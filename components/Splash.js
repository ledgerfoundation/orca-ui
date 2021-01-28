/* eslint-disable */
import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    height: '70vh',
    textAlign: 'center',
  },
});

const Splash = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.root}
      direction="column"
      justify="center"
      alignContent="center"
      spacing={4}
    >
      <Grid item>
        <Typography variant="h1"> Orca Protocol</Typography>
      </Grid>
      <Grid item>
        <Typography variant="h3"> 🐋 World's Lightest DAO 🐋</Typography>
      </Grid>
    </Grid>
  );
};

export default Splash;
