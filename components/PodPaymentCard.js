/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Container, Paper } from '@material-ui/core';
import theme from '../config/theme';

const {
  typography: { pxToRem },
  breakpoints,
} = theme;

const useStyles = makeStyles({
  root: {
    position: 'relative',
  },
  subCardHeader: {
    color: '#3140FF',
    fontWeight: '600',
  },
  duesText: {
    fontSize: pxToRem(48),
    fontWeight: '700',
    [breakpoints.down('xs')]: {
      fontSize: pxToRem(35),
    },
  },
  image: {
    height: pxToRem(272),
  },
});

const PodPaymentCard = ({ className, pod }) => {
  const classes = useStyles();
  const root = clsx(classes.root, className);

  return (
    <Paper elevation={2} className={root}>
      <Container>
        {pod && (
          <Grid
            className={root}
            container
            direction="column"
            alignItems="center"
            justify="center"
            spacing={2}
          >
            <Grid item>
              <Typography className={classes.paymentHeader} variant="body1">
                {`ONLY ${10 - pod?.memberIds?.length} SPOTS`}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h1">{`$${pod?.price}`}</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">monthly dues</Typography>
            </Grid>
          </Grid>
        )}
      </Container>
    </Paper>
  );
};

PodPaymentCard.propTypes = {
  className: PropTypes.string,
  pod: PropTypes.shape({
    time: PropTypes.string,
  }),
};

PodPaymentCard.defaultProps = {
  className: '',
  pod: {
    time: '',
  },
};

export default PodPaymentCard;
