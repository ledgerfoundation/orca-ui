import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import { useFormik } from 'formik';
import InputAdornment from '@material-ui/core/InputAdornment';
import { DateTime } from 'luxon';
import theme from '../config/theme';
import OverModal from './OverModal';
import OverTextField from './OverTextField';
import podSchema from '../schema/pod';
import { EditStepper } from './Stepper';
import { useAppStore } from '../store/app-store.hook';

const {
  typography: { pxToRem },
  breakpoints,
} = theme;

const useStyles = makeStyles({
  root: {},
  grid: { width: pxToRem(200) },
  detailsContainer: {},
  accountIcon: {
    height: pxToRem(175),
    width: pxToRem(175),
    [breakpoints.down('xs')]: {
      width: pxToRem(75),
      height: pxToRem(75),
    },
  },
});

const PodModal = ({ className, onClose, onSave, ...other }) => {
  const classes = useStyles();
  const root = clsx(classes.root, className);

  const { notificationsStore, user } = useAppStore().userPageStore;

  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  const handleClose = () => {
    handleReset();
    onClose();
  };

  const { handleSubmit, handleChange, values, errors, touched, handleBlur } = useFormik({
    validateOnChange: false,
    initialValues: {
      hostId: user._id,
      title: '',
      image: {
        url: null,
        path: null,
      },
      time: DateTime.local().toFormat('yyyy-MM-ddT'),
      price: '',
      length: '',
      description: '',
      gatherings: '',
      memberIds: [],
    },
    validationSchema: podSchema,
    onSubmit(pod) {
      onSave(
        { ...pod, time: new Date(pod.time) },
        {
          url: null,
          file: null,
        },
      );
      onClose();
    },
  });

  const onError = () => {
    const error =
      Object.values(errors).length > 0 &&
      notificationsStore.showErrorMessage(
        Object.values(errors).map(err => (
          <>
            <div>{err}</div>
          </>
        )),
      );
    return error;
  };

  React.useEffect(() => {
    onError();
  }, [errors]);

  const getGatheringTimeString = (time, length) => {
    if (time && length) {
      return `${DateTime.fromISO(time).toFormat('hh:mma')} - ${DateTime.fromISO(time)
        .plus({ minutes: length })
        .toFormat('hh:mma')}`;
    }
    return '';
  };

  return (
    <OverModal className={root} onClose={handleClose} {...other}>
      <EditStepper
        title="Create a Pod"
        setActiveStep={setActiveStep}
        activeStep={activeStep}
        handleSubmit={handleSubmit}
        steps={['Pod Details', 'Gathering Scheduling']}
        completed={completed}
      >
        {activeStep === 0 && (
          <Grid container alignItems="center" direction="column" spacing={4}>
            <Grid item>
              <OverTextField
                required
                label="Pod Title"
                name="title"
                value={values.title}
                error={errors.title}
                onChange={handleChange}
              />
            </Grid>
            <Grid item>
              <OverTextField
                required
                label="Pod Description"
                name="description"
                value={values.description}
                error={errors.description}
                multiline
                rows={4}
                onChange={handleChange}
              />
            </Grid>
            <Grid item>
              <OverTextField
                required
                label="Monthly Dues"
                name="price"
                type="number"
                value={values.price}
                error={errors.price}
                onChange={handleChange}
                InputProps={{
                  startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}
              />
            </Grid>
          </Grid>
        )}
        {activeStep === 1 && (
          <Grid container alignItems="center" direction="column" spacing={4}>
            <Grid item>
              <OverTextField
                required
                label="First Gathering Time"
                name="time"
                onBlur={handleBlur}
                touched={touched}
                value={values.time}
                error={errors.time}
                type="datetime-local"
                onChange={handleChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item>
              <OverTextField
                required
                label="Gathering Duration"
                name="length"
                type="number"
                value={values.length}
                error={touched.length && errors.length}
                onChange={handleChange}
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment classes={{ root: classes.minutes }} position="end">
                      minutes
                    </InputAdornment>
                  ),
                }}
                className={classes.lengthInput}
              />
            </Grid>
            <Grid item>
              <Typography variant="h3">Pod Will Gather:</Typography>
              <Typography variant="h4">
                {values.time && touched.time
                  ? `Every ${DateTime.fromISO(values.time).toFormat('cccc')}`
                  : 'Every '}
              </Typography>
              <Typography variant="h4">
                {getGatheringTimeString(values.time, values.length)}
              </Typography>
            </Grid>
          </Grid>
        )}
      </EditStepper>
    </OverModal>
  );
};

PodModal.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

PodModal.defaultProps = {
  className: '',
};

export default PodModal;
