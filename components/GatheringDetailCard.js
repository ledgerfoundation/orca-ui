import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, Paper, Grid, Container, CircularProgress } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import { DateTime } from 'luxon';
import clsx from 'clsx';
import theme from '../config/theme';

const {
  typography: { pxToRem },
} = theme;

const useStyles = makeStyles({
  root: { padding: pxToRem(15) },
  joinButton: {
    backgroundColor: '#3140FF',
    color: 'white',
    width: pxToRem(200),
    height: pxToRem(40),
  },
  zoomText: {
    color: 'white',
  },
});

const JoinPodGathering = observer(({ className, pod, isLoading }) => {
  const classes = useStyles();
  const root = clsx(classes.root, className);

  const redirect = () => {
    window.location.href = pod?.hostVideoLink;
  };

  return (
    <Paper elevation={2}>
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
              <Typography variant="h3">JOIN THE GATHERING</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                {`The first class is on ${DateTime.fromISO(pod?.time).toFormat('LLL dd')}.`}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                {`Click the link at ${DateTime.fromISO(pod?.time, {
                  zone: 'America/New_York',
                }).toFormat('hh:mma ZZZZ')} to join your gathering!`}
              </Typography>
            </Grid>
            <Grid item>
              {isLoading ? (
                <CircularProgress color="secondary" />
              ) : (
                <Button className={classes.joinButton} onClick={redirect} variant="outlined">
                  <Typography variant="subtitle1" className={classes.zoomText}>
                    JOIN ZOOM CALL
                  </Typography>
                </Button>
              )}
            </Grid>
          </Grid>
        )}
      </Container>
    </Paper>
  );
});

JoinPodGathering.propTypes = {
  className: PropTypes.string,
  pod: PropTypes.shape({}).isRequired,
  isLoading: PropTypes.bool,
};

JoinPodGathering.defaultProps = {
  className: '',
  isLoading: null,
};

export default JoinPodGathering;
