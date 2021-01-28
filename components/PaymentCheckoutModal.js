/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Button,
  CircularProgress,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  ButtonGroup,
  Container,
  Grid,
} from '@material-ui/core';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { observer } from 'mobx-react-lite';
import Link from 'next/link';
import { DateTime } from 'luxon';
import OverModal from './OverModal';
import { useAppStore } from '../store/app-store.hook';
import PaymentCardSection from './PaymentCardSection';
import theme from '../config/theme';
import API from '../utils/api-utils';
import { calculateTotal, calculateStripeFee } from '../utils/payment-utils';

const {
  typography: { pxToRem },
  breakpoints,
} = theme;

const useStyles = makeStyles({
  root: {},

  termsText: {
    textAlign: 'left',
    margin: `${pxToRem(20)} 0`,
    width: pxToRem(768),
    fontSize: pxToRem(12),
    [breakpoints.down('xs')]: {
      margin: `0 ${pxToRem(10)}`,
      width: pxToRem(300),
      fontSize: pxToRem(8),
    },
  },
});

const StripeCheckoutModal = observer(({ className, onClose, pod, ...other }) => {
  const classes = useStyles();
  const root = clsx(classes.root, className);

  const stripe = useStripe();
  const elements = useElements();

  const { paymentsStore, podPage, authStore } = useAppStore();
  const { user } = authStore;
  const { isLoading: isLoadingPod, bookPod } = podPage;
  const {
    isLoading: isLoadingPayment,
    paymentMethods,
    selectedPaymentMethod,
    getPaymentMethods,
    isChoosing,
  } = paymentsStore;

  const isLoading = isLoadingPod || isLoadingPayment;

  const [isProcessing, setIsProcessing] = React.useState(false);
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    if (user.stripeCustomerId && !paymentMethods.length) {
      getPaymentMethods();
    }
  }, []);

  React.useEffect(() => {
    setError('');
  }, [isChoosing]);

  const handleClose = () => {
    if (!isProcessing) onClose();
  };
  const handleSubmit = async () => {
    setError('');
    setIsProcessing(true);

    try {
      const paymentIntent = await API.post('/api/payment', {
        podId: pod._id,
        paymentMethodId: selectedPaymentMethod?.id,
      });

      const paymentConfig = !selectedPaymentMethod
        ? {
            payment_method: {
              card: elements.getElement(CardElement),
            },
            setup_future_usage: 'on_session',
          }
        : {};

      const result = await stripe.confirmCardPayment(paymentIntent, paymentConfig);
      if (result.error) throw new Error(result.error.message);

      await bookPod(pod);
      handleClose();
    } catch (err) {
      setError(err.message);
    }
    setIsProcessing(false);
  };

  const stripeFee = calculateStripeFee(pod?.price);
  const podTime = DateTime.fromISO(pod?.time);
  const podEndTime = podTime.plus({ minutes: pod?.length });

  return (
    <OverModal className={root} onClose={() => handleClose()} {...other}>
      <Container>
        <Grid direction="column" justify="space-between" alignContent="center">
          <Grid item>
            <Typography variant="h2">{pod?.title.toUpperCase()}</Typography>
            <Typography variant="h3">{`Every ${podTime.toFormat('cccc')}`}</Typography>
            <Typography variant="h3">
              {`${podTime.toFormat('hh:mma')} - ${podEndTime.toFormat('hh:mma')}`}
            </Typography>
          </Grid>
          <Grid item>
            <TableContainer>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>{pod?.title}</TableCell>
                    <TableCell>{`$${parseFloat(pod?.price)}`}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Transaction fee</TableCell>
                    <TableCell>{`$${stripeFee}`}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Total</TableCell>
                    <TableCell>{`$${calculateTotal(pod?.price, stripeFee)}`}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>

          {!isLoading && <PaymentCardSection />}

          {isProcessing ? (
            <CircularProgress color="secondary" />
          ) : (
            <ButtonGroup>
              <Button onClick={() => handleClose()} size="large">
                <Typography variant="body1">Cancel </Typography>
              </Button>
              <Button
                color="secondary"
                variant="outlined"
                onClick={handleSubmit}
                className={classes.button}
                disabled={!(stripe && elements && !isLoading && !isChoosing)}
              >
                Confirm Payment
              </Button>
            </ButtonGroup>
          )}

          {isProcessing && <Typography variant="h3">...PROCESSING DO NOT EXIT THE PAGE</Typography>}
          {error && <Typography variant="h3">{`ERROR: ${error}`.toUpperCase()}</Typography>}
          <Grid item>
            <Typography className={classes.termsText} variant="body2">
              By completing this payment you are agreeing to the Overlly{' '}
              <Link href="/legal">terms and conditions</Link> and our waiver and release document.
              Please make sure you have read and understood all of the documents before continuing.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </OverModal>
  );
});

StripeCheckoutModal.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

StripeCheckoutModal.defaultProps = {
  className: '',
};

export default StripeCheckoutModal;
