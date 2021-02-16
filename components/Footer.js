import React from 'react';
import { Grid, Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Twitter } from '@material-ui/icons';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import theme from '../config/theme';

const {
  typography: { pxToRem },
} = theme;

const useStyles = makeStyles({
  root: {
    padding: 20,
    backgroundColor: 'black',
    textAlign: 'center',
  },
  image: {
    display: 'flex',
    height: pxToRem(110),
    textDecoration: 'none',
  },
  text: {
    color: 'white',
    paddingRight: pxToRem(5),
  },
  icon: {
    fontSize: pxToRem(20),
    color: 'white',
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      justify="center"
      direction="column"
      alignItems="center"
      className={classes.root}
    >
      <Grid container justify="center" direction="row" alignItems="center" className={classes.root}>
        <Grid item>
          <Grid container justify="flex-end">
            <span role="img">🐋</span>
          </Grid>
        </Grid>
      </Grid>
      <Link href="https://twitter.com/orcaprotocol">
        <Grid container justify="center" direction="row" alignItems="stretch">
          <Typography className={classes.text} variant="h6">
            FOLLOW US
          </Typography>
          <Twitter className={classes.icon} />
        </Grid>
      </Link>
      <Link href="mailto:orcaprotocol@gmail.com">
        <Grid container justify="center" direction="row" alignItems="stretch">
          <Typography className={classes.text} variant="h6">
            CONTACT US
          </Typography>
          <MailOutlineIcon className={classes.icon} />
        </Grid>
      </Link>
    </Grid>
  );
};

export default Footer;
