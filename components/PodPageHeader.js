import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import theme from '../config/theme';

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

const PodDetailContent = ({ pod, className }) => {
  const classes = useStyles();
  const root = clsx(classes.root, className);
  const { host } = pod;
  return (
    <div className={root}>
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
          </Grid>
        </Grid>
      )}
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
