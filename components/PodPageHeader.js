import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, Grid } from '@material-ui/core';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import theme from '../config/theme';
import PaymentCheckoutModal from './PaymentCheckoutModal';
import PaymentCompleteModal from './PaymentCompleteModal';
import createLoginUrl from '../utils/url-helper';
import { useAppStore } from '../store/app-store.hook';

const {
  typography: { pxToRem },
  breakpoints,
} = theme;

const useStyles = makeStyles({
  root: {},

  instructor: {
    color: '#3140FF',
    fontWeight: '600',
  },
  bookNowButton: {
    backgroundColor: '#3140FF',
    color: 'white',
    marginTop: pxToRem(30),
    width: pxToRem(200),
    height: pxToRem(40),
  },
  podDescription: {
    width: pxToRem(392),
    [breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  icon: {
    color: '#3140FF',
    marginRight: pxToRem(10),
  },
  booked: {
    textAlign: 'left',
    paddingBottom: pxToRem(20),
    alignItems: 'center',
    paddingTop: pxToRem(10),
  },
  countDownText: {
    color: 'white',
  },
});

const PodDetailContent = ({ pod, className, user }) => {
  const classes = useStyles();
  const root = clsx(classes.root, className);
  const { host } = pod;
  const { bookPod, isHost, isPodFull } = useAppStore().podPage;

  const [isOpen, setIsOpen] = React.useState(false);
  const [isPaymentCompleteModalOpen, setIsPaymentCompleteModalOpen] = React.useState(false);
  const [isBookingAttempted, setIsBookingAttempted] = React.useState(false);

  const handleOpen = flag => {
    if (user) {
      setIsOpen(flag);
    } else {
      window.location.assign(createLoginUrl(`/pod/${pod._id}`));
    }
  };

  const handleBook = () => {
    if (user) {
      pod?.price.toString() === '0' ? bookPod(pod) : handleOpen(true);
      setIsBookingAttempted(true);
    } else {
      window.location.assign(createLoginUrl(`/pod/${pod._id}`));
    }
  };

  const handleWaitlist = () => {
    if (user) {
      console.log('clicked');
    } else {
      window.location.assign(createLoginUrl(`/pod/${pod._id}`));
    }
  };

  React.useEffect(() => {
    if (isBookingAttempted && pod?.booked) {
      setIsPaymentCompleteModalOpen(true);
    }
  }, [isBookingAttempted, pod]);

  return (
    <div className={root}>
      {!pod?.booked && (
        <>
          {isOpen && (
            <PaymentCheckoutModal
              pod={pod}
              open={isOpen}
              disabled={pod?.booked}
              onClose={() => {
                handleOpen(false);
              }}
            />
          )}
        </>
      )}
      {pod && (
        <Grid container direction="row" alignItems="center" justify="space-between">
          <Grid direction="column" justify="space-between" spacing={5}>
            <Grid item>
              <Typography variant="h1" className={classes.title}>
                {pod?.title?.toUpperCase()}
              </Typography>
              {host && (
                <Grid item>
                  <Typography variant="body2" className={classes.instructor}>
                    {`BY ${host?.nickname?.toUpperCase() || host?.name?.toUpperCase()}`}
                  </Typography>
                </Grid>
              )}
            </Grid>
            <Grid item>
              <Typography className={classes.podDescription} variant="body2">
                {pod?.description}
              </Typography>
            </Grid>
            <>
              {!isHost &&
                (!pod?.booked ? (
                  <Button className={classes.bookNowButton} onClick={handleBook} variant="outlined">
                    <Typography variant="h4" className={classes.countDownText}>
                      BOOK NOW
                    </Typography>
                  </Button>
                ) : (
                  <Typography className={classes.booked} variant="h3">
                    <DoneOutlineIcon className={classes.icon} />
                    BOOKED
                  </Typography>
                ))}
              {isPodFull && (
                <Button
                  className={classes.bookNowButton}
                  onClick={handleWaitlist}
                  variant="outlined"
                >
                  <Typography variant="h4" className={classes.countDownText}>
                    ADD TO WAITLIST
                  </Typography>
                </Button>
              )}
            </>
          </Grid>
        </Grid>
      )}
      <PaymentCompleteModal
        linkAvailable={pod?.booked}
        pod={pod}
        isPaymentCompleteModalOpen={isPaymentCompleteModalOpen}
        setIsPaymentCompleteModalOpen={setIsPaymentCompleteModalOpen}
      />
    </div>
  );
};

PodDetailContent.propTypes = {
  className: PropTypes.string,
  pod: PropTypes.shape({
    _id: PropTypes.string,
    image: PropTypes.shape({
      url: PropTypes.string,
    }),
    title: PropTypes.string,
    description: PropTypes.string,
    videoLink: PropTypes.string,
    hostId: PropTypes.string,
    host: PropTypes.shape({
      profileImage: PropTypes.shape({
        url: PropTypes.string,
      }),
      name: PropTypes.string,
      nickname: PropTypes.string,
      _id: PropTypes.string,
    }),
  }).isRequired,
  user: PropTypes.shape({}).isRequired,
};

PodDetailContent.defaultProps = {
  className: '',
};

export default PodDetailContent;
