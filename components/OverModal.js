import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Modal, Paper, useMediaQuery } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

import theme from '../config/theme';

const {
  typography: { pxToRem },
} = theme;

const useStyles = makeStyles({
  root: {
    outline: 'none',
    width: '100vw',
    height: '100vh',
  },
  desktop: {
    margin: 'auto',
    maxWidth: '70vw',
    marginTop: '10vh',
  },
  mobile: {
    width: '100vw',
    height: '100vh',
  },
  content: {
    flexGrow: 1,
    textAlign: 'center',
    paddingTop: pxToRem(15),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing.unit / 2,
    top: theme.spacing.unit / 2,
    color: theme.palette.grey[500],
  },
});

const OverModal = ({ title, subtitle, children, className, onClose, ...other }) => {
  const classes = useStyles();
  const root = clsx(classes.root, className);
  const isMobile = !useMediaQuery('(min-width:600px)');
  return (
    <Modal className={root} onClose={onClose} disableAutoFocus {...other}>
      <Paper className={classes[!isMobile && 'desktop']} square={isMobile}>
        <Grid
          container
          justify="space-between"
          direction="column"
          className={clsx(classes.content, classes[isMobile && 'mobile'])}
        >
          {isMobile && (
            <IconButton
              aria-label="Close"
              className={classes.closeButton}
              onClick={isMobile ? onClose : null}
            >
              <CloseIcon />
            </IconButton>
          )}
          {children}
        </Grid>
      </Paper>
    </Modal>
  );
};

OverModal.propTypes = {
  className: PropTypes.string,
  title: PropTypes.node.isRequired,
  subtitle: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

OverModal.defaultProps = {
  className: '',
  subtitle: '',
};

export default OverModal;
