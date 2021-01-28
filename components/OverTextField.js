import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
// import theme from '../config/theme';

const useStyles = makeStyles({
  root: {},
});

const OverTextField = ({ error, className, ...other }) => {
  const classes = useStyles();
  const root = clsx(classes.root, className);

  return (
    <TextField
      className={root}
      color="secondary"
      variant="outlined"
      size="small"
      error={Boolean(error)}
      helperText={error}
      {...other}
    />
  );
};

OverTextField.propTypes = {
  className: PropTypes.string,
  error: PropTypes.string,
};

OverTextField.defaultProps = {
  className: '',
  error: '',
};

export default OverTextField;
