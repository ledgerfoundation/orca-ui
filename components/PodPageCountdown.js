import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Card, Grid } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import theme from '../config/theme';

const {
  typography: { pxToRem },
} = theme;

const useStyles = makeStyles({
  root: {},
  card: {
    textAlign: 'center',
  },
  countdownCard: {
    width: pxToRem(427),
    height: pxToRem(485),
    padding: pxToRem(20),
    '@media (max-width:425px)': {
      width: pxToRem(248),
      height: pxToRem(312),
    },
  },
});

const PodPageCountdown = observer(({ pod, className }) => {
  const classes = useStyles();
  const root = clsx(classes.root, className);

  return (
    <div className={root}>
      <Card className={classes.countdownCard}>
        <Grid
          className={classes.card}
          container
          direction="column"
          justify="center"
          alignItems="stretch"
        >
          <Typography className={classes.listHeader} variant="body1">
            {`ONLY ${10 - pod?.memberIds?.length} SPOTS LEFT`}
          </Typography>
        </Grid>
      </Card>
    </div>
  );
});

PodPageCountdown.propTypes = {
  className: PropTypes.string,
  pod: PropTypes.shape({}).isRequired,
};

PodPageCountdown.defaultProps = {
  className: '',
};

export default PodPageCountdown;
