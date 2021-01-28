import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, Container, Grid, IconButton } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import theme from '../config/theme';

const {
  typography: { pxToRem },
} = theme;

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
  },
  icon: {
    height: pxToRem(90),
    width: pxToRem(90),
    color: 'lightgrey',
  },
  verified: {
    color: 'green',
  },
});

const UserPaymentCard = ({
  children,
  className,
  stripeVerified,
  verificationLink,
  isLoading,
  ...other
}) => {
  const classes = useStyles();
  const root = clsx(classes.root, className);

  return (
    <Paper className={root} elevation={2} {...other}>
      <Container>
        <Grid container direction="row" alignItems="center" justify="center">
          <IconButton disabled={stripeVerified || isLoading} href={verificationLink}>
            <DoneIcon className={clsx(classes.icon, stripeVerified && classes.verified)} />
          </IconButton>
          <Grid>
            <Typography variant="h3">PAYMENT</Typography>
            <Typography gutterBottom variant="h3">
              VERIFICATION
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

UserPaymentCard.propTypes = {
  className: PropTypes.string,
  stripeVerified: PropTypes.bool.isRequired,
  verificationLink: PropTypes.string,
  isLoading: PropTypes.bool,
};

UserPaymentCard.defaultProps = {
  className: '',
  verificationLink: null,
  isLoading: null,
};

export default UserPaymentCard;
