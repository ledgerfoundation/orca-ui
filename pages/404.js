import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Container, Button, Link } from '@material-ui/core';
import Router from 'next/router';
import theme from '../config/theme';

const {
  breakpoints,
  typography: { pxToRem },
} = theme;

const useStyles = makeStyles({
  section: {
    paddingTop: pxToRem(30),
    paddingBottom: pxToRem(30),
    [breakpoints.down('sm')]: {
      paddingTop: pxToRem(11),
    },
  },
  logo: {
    height: 78,
    textDecoration: 'none',
  },
  media: {
    marginLeft: pxToRem(20),
    position: 'relative',
  },
  errorPic: {
    height: pxToRem(400),
    width: pxToRem(400),
    marginBottom: pxToRem(40),
    [breakpoints.down('sm')]: {
      height: pxToRem(300),
      width: pxToRem(300),
    },
  },
  errorSubTitle: {
    fontSize: pxToRem(18),
    padding: `${pxToRem(10)} 0`,
  },
  supportEmail: {
    color: 'blue',
    fontSize: pxToRem(18),
    paddingLeft: pxToRem(4),
  },
  homeButton: {
    marginTop: pxToRem(10),
  },
});

const Custom404 = () => {
  const classes = useStyles();
  const image = './Orca-logo-mark-black.svg';

  const redirect = () => {
    Router.push('/');
  };

  return (
    <Container>
      <img className={classes.logo} alt="logo" src={image} />
      <Grid
        container
        justify="space-around"
        alignItems="center"
        direction="row-reverse"
        className={classes.section}
      >
        <div className={classes.media} />

        <div>
          <Typography className={classes.errorTitle} variant="h1">
            OOPS!
          </Typography>
          <Typography className={classes.errorSubTitle} variant="subtitle2">
            Something went wrong. We can&apos;t find what you’re looking for.
          </Typography>
          <Typography className={classes.errorSubTitle} variant="subtitle2">
            Having a problem with the site? Drop us an email at:
            <Link className={classes.supportEmail} href="mailto:orcaprotocol@gmail.com">
              orcaprotocol@gmail.com
            </Link>
          </Typography>
          <Typography className={classes.errorSubTitle} variant="subtitle2">
            Just want to go home?
          </Typography>
          <Button
            className={classes.homeButton}
            variant="outlined"
            color="secondary"
            onClick={redirect}
          >
            ORCA HOMEPAGE
          </Button>
        </div>
      </Grid>
    </Container>
  );
};

export default Custom404;
