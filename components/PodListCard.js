import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, Grid, Typography, Avatar, Container } from '@material-ui/core';
import Router from 'next/router';
import { DateTime } from 'luxon';
import theme from '../config/theme';

const {
  typography: { pxToRem },
} = theme;

const useStyles = makeStyles({
  root: {
    minHeight: pxToRem(102),
  },
  card: {
    textAlign: 'center',
    minHeight: pxToRem(102),
  },
  icon: {
    background: 'inherit',
    width: pxToRem(80),
    height: pxToRem(80),
  },
});

const PodListCard = ({ className, pod }) => {
  const classes = useStyles();
  const root = clsx(classes.root, className);

  const redirect = () => {
    Router.push(`/pod/${pod?._id}`);
  };

  const hostedBy = pod?.hostNickname || '';

  return (
    <Card elevation={2} className={root}>
      {pod?._id && (
        <CardActionArea onClick={redirect}>
          <Grid className={classes.card} container direction="row" alignItems="center">
            <Grid item sm={2} xs={4}>
              <Container>
                <Avatar src={pod?.image?.url} className={classes.icon} />
              </Container>
            </Grid>
            <Grid
              item
              container
              justify="space-around"
              alignItems="center"
              direction="column"
              sm={10}
              xs={8}
              spacing={2}
            >
              <Grid item>
                <Typography variant="h4">
                  {DateTime.fromISO(pod.time).toFormat('EEE MMM d h:mm a')}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h4">{pod?.title.toUpperCase()}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h4" className={classes.font}>
                  {hostedBy}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </CardActionArea>
      )}
    </Card>
  );
};

PodListCard.propTypes = {
  className: PropTypes.string,
  pod: PropTypes.shape({
    _id: PropTypes.string,
    time: PropTypes.string,
  }),
};

PodListCard.defaultProps = {
  className: '',
  pod: {
    _id: '',
    time: '',
  },
};

export default PodListCard;
