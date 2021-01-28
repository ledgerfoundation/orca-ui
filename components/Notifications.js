import { observer } from 'mobx-react-lite';
import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { useAppStore } from '../store/app-store.hook';

const useStyles = makeStyles({
  root: {
    color: '#fff',
    backgroundColor: 'red',
  },
  successMessage: {
    color: '#fff',
    backgroundColor: '#4caf50',
  },
});

export const Notifications = observer(className => {
  const classes = useStyles();
  const root = clsx(classes.root, className);
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState(undefined);
  const [snackbarClass, setSnackbarClass] = React.useState(undefined);

  const {
    successMessage,
    errorMessage,
    clearSuccessMessage,
    clearErrorMessage,
  } = useAppStore().notificationsStore;

  React.useEffect(() => {
    if (successMessage) {
      setMessage(successMessage);
      setSnackbarClass(classes.successMessage);
      setOpen(!open);
    }
    return () => {
      clearSuccessMessage();
    };
  }, [open, clearSuccessMessage, successMessage]);

  React.useEffect(() => {
    if (errorMessage) {
      setMessage(errorMessage);
      setSnackbarClass(root);
      setOpen(!open);
    }
    return () => {
      clearErrorMessage();
    };
  }, [open, clearErrorMessage, errorMessage]);

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      open={open}
      autoHideDuration={6000}
      onClose={() => setOpen(false)}
      message={message || null}
      ContentProps={{
        className: snackbarClass,
      }}
    />
  );
});
