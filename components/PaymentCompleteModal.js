import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, Divider } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { observer } from 'mobx-react-lite';
import AddToCalendar from 'react-add-to-calendar';
import { DateTime } from 'luxon';
import theme from '../config/theme';
import OverModal from './OverModal';

const {
  typography: { pxToRem },
} = theme;

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
  },
  title: {
    marginTop: pxToRem(7),
  },
  buttonDivider: {
    margin: pxToRem(7),
  },
  icon: {
    height: pxToRem(100),
    width: pxToRem(100),
    color: '#3140FF',
    marginBottom: pxToRem(20),
    alignSelf: 'center',
  },
  topDivider: {
    marginTop: pxToRem(7),
    height: pxToRem(2),
    background: 'black',
    marginBottom: pxToRem(15),
  },
  button: {
    textDecorationLine: 'underline',
    fontFamily: 'Josefin Sans',
  },
  bottomText: {
    paddingBottom: pxToRem(10),
  },
  addCalendarButton: {
    paddingLeft: pxToRem(20),
  },
  addToCalendar: {
    '&:hover, &:focus': {
      cursor: 'pointer',
    },
    '& ul': {
      paddingInlineStart: '0',
      listStyle: 'none',
      color: '#3140FF',
      fontFamily: 'Josefin Sans',
      fontSize: pxToRem(15),
    },
    '& a': {
      color: '#3140FF',
      fontFamily: 'Josefin Sans',
      fontSize: pxToRem(15),
      textDecoration: 'underline',
      textTransform: 'uppercase',
    },
    padding: '6px 8px',
  },
});

const PaymentCompleteModal = observer(
  ({
    children,
    pod,
    isPaymentCompleteModalOpen,
    setIsPaymentCompleteModalOpen,
    className,
    linkAvailable,
    ...other
  }) => {
    const lessonLength = parseInt(pod.length, 10);
    const classes = useStyles();
    const root = clsx(classes.root, className);
    const event = {
      title: `${pod.title} with ${pod.instructorNickname}`,
      description: `${pod.description} \n View your booked class on Overlly: https://cove.social/pod/${pod._id}`,
      location: pod.videoLink,
      startTime: pod.time,
      endTime: DateTime.fromISO(pod?.time).plus({ minutes: lessonLength }),
    };

    return (
      <div className={root} {...other}>
        <OverModal
          onClose={() => setIsPaymentCompleteModalOpen(false)}
          className={classes.modal}
          title={
            // eslint-disable-next-line react/jsx-wrap-multilines
            <Typography className={classes.title} variant="h6">
              {pod.title}
            </Typography>
          }
          open={isPaymentCompleteModalOpen}
        >
          <Divider variant="middle" className={classes.topDivider} />
          <CheckCircleIcon className={classes.icon} />
          <Typography variant="h6">PAYMENT COMPLETE.</Typography>
          <Typography className={classes.bottomText} variant="h6">
            ENJOY THE POD!
          </Typography>
          <Divider variant="middle" className={classes.buttonDivider} />
          <Button
            className={classes.button}
            href="/user"
            target="_blank"
            rel="noopener"
            color="secondary"
          >
            {linkAvailable ? 'VIEW ON YOUR OVERLLY PROFILE' : 'VIEW ON YOUR OVERLLY SCHEDULE'}
          </Button>
          {!linkAvailable && (
            <>
              <Divider variant="middle" className={classes.buttonDivider} />
              <div className={classes.addToCalendar}>
                <AddToCalendar event={event} />
              </div>
            </>
          )}

          <Divider variant="middle" className={classes.buttonDivider} />
          {/* <Button className={classes.button} color="secondary">
          LET PEOPLE KNOW THAT YOURE GOING
        </Button>
        <Divider variant="middle" className={classes.buttonDivider} /> */}
        </OverModal>
      </div>
    );
  },
);

PaymentCompleteModal.propTypes = {
  className: PropTypes.string,
};

PaymentCompleteModal.defaultProps = {
  className: '',
};

export default PaymentCompleteModal;
