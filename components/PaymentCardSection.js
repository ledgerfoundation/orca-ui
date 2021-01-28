import React from 'react';
import { Typography, Button } from '@material-ui/core';
import { CardElement } from '@stripe/react-stripe-js';
import { makeStyles } from '@material-ui/core/styles';
import { observer } from 'mobx-react-lite';
import { useAppStore } from '../store/app-store.hook';
import PaymentCard from './PaymentCard';
import theme from '../config/theme';

const {
  typography: { pxToRem },
  breakpoints,
} = theme;

const useStyles = makeStyles({
  root: {
    width: '70%',
    textAlign: 'left',
    margin: `${pxToRem(20)} 0`,
    [breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  text: {
    display: 'flex',
    marginBottom: pxToRem(10),
    [breakpoints.down('xs')]: {
      marginBottom: pxToRem(5),
    },
  },
  button: {
    width: '50%',
    [breakpoints.down('xs')]: {
      height: pxToRem(45),
      width: '100%',
    },
  },
  cardInput: {
    padding: pxToRem(15),
  },
});

const CardSection = observer(() => {
  const classes = useStyles();

  const { paymentsStore } = useAppStore();
  const {
    selectedPaymentMethod,
    paymentMethods,
    setSelectedPaymentMethod,
    isChoosing,
    setIsChoosing,
  } = paymentsStore;

  const addPayment = () => {
    setSelectedPaymentMethod(null);
    setIsChoosing(false);
  };

  const updatePayment = id => {
    setSelectedPaymentMethod(id);
    setIsChoosing(false);
  };

  React.useEffect(() => {
    setIsChoosing(false);
  }, []);

  return (
    <div className={classes.root}>
      <Typography className={classes.text} variant="h3">
        {'Card Details'.toUpperCase()}
      </Typography>

      {isChoosing &&
        paymentMethods.map(({ id, card }) => (
          <PaymentCard
            card={card}
            onClick={() => updatePayment(id)}
            selected={selectedPaymentMethod?.id === id}
          />
        ))}

      {selectedPaymentMethod && !isChoosing && (
        <PaymentCard disabled card={selectedPaymentMethod.card} />
      )}

      {!selectedPaymentMethod && !isChoosing && (
        <div className={classes.cardInput}>
          <CardElement
            options={{
              iconStyle: 'solid',
              style: {
                base: {
                  width: '100% !important',
                  iconColor: '#3140FF',
                  color: '#3140FF',
                  fontWeight: 500,
                  fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
                  fontSize: '14px',
                  ':-webkit-autofill': {
                    color: '#3140FF',
                  },
                  '::placeholder': {
                    color: '#3140FF',
                  },
                },
                invalid: {
                  iconColor: 'red',
                  color: 'red',
                },
              },
            }}
          />
        </div>
      )}

      {!!paymentMethods.length && (
        <Button
          className={classes.button}
          color="secondary"
          variant="outlined"
          onClick={isChoosing ? addPayment : () => setIsChoosing(true)}
        >
          {isChoosing ? 'New Credit Card' : 'Change Credit Card'}
        </Button>
      )}
    </div>
  );
});

export default CardSection;
