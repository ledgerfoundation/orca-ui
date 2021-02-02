import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Container, Grid, IconButton, Paper, Typography } from '@material-ui/core';
import theme from '../config/theme';

const {
  typography: { pxToRem },
} = theme;

const useStyles = makeStyles({
  root: {
    position: 'relative',
  },
  buttons: {
    color: 'blue',
    position: 'absolute',
    top: pxToRem(0),
    right: pxToRem(0),
  },
  content: {
    padding: pxToRem(15),
    overflow: 'hidden',
  },
  avatar: {
    height: '120px',
    width: '120px',
  },
});

const UserBannerCard = ({ className, user, ...other }) => {
  const classes = useStyles();
  const root = clsx(classes.root, className);

  const img = '';

  const UserAvatar = () => (
    <IconButton disabled>
      <Avatar className={classes.avatar} src={img} />
    </IconButton>
  );

  return (
    <Paper className={root} elevation={2} {...other}>
      <Container>
        <Grid
          container
          className={classes.content}
          direction="row"
          justify="space-between"
          spacing={2}
        >
          <Grid container item alignItems="center" direction="row">
            <Grid item md={4} xs={6}>
              <UserAvatar />
            </Grid>
            <Grid item container direction="column" md={8} xs={6}>
              <Typography noWrap className={classes.text} variant="h2">
                {user}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

UserBannerCard.propTypes = {
  className: PropTypes.string,
  user: PropTypes.string,
};

UserBannerCard.defaultProps = {
  className: '',
  user: {},
};

export default UserBannerCard;
