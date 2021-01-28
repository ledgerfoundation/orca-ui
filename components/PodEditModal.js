import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
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

const steps = ['Pod Details', 'Pod Specifics'];

const EditPodModal = ({ className, onClose, pod, onSave, ...other }) => {
  const classes = useStyles();
  const root = clsx(classes.root, className);

  const { notificationsStore } = useAppStore().userPageStore;

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

  const initialState = {
    ...pod,
    time: DateTime.fromISO(pod?.time).toFormat("yyyy-MM-dd'T'HH:mm"),
  };

  const { handleSubmit, handleChange, values, errors } = useFormik({
    validateOnChange: false,
    initialValues: initialState,
    validationSchema: podSchema,
    onSubmit(newPod) {
      onSave(
        { ...newPod, time: new Date(newPod.time) },
        {
          url: newPod.image.url,
          file: newPod.image.file,
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

  return (
    <OverModal className={root} onClose={handleClose} {...other}>
      <EditStepper
        title="Edit Pod"
        setActiveStep={setActiveStep}
        activeStep={activeStep}
        handleSubmit={handleSubmit}
        steps={steps}
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
          </Grid>
        )}
        {activeStep === 1 && (
          <Grid container alignItems="center" direction="column" spacing={4}>
            <Grid item>
              <OverTextField
                required
                label="Dues"
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
            <Grid item>
              <OverTextField
                required
                label="Pod Duration"
                name="length"
                type="number"
                value={values.length}
                error={errors.length}
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
              <OverTextField
                required
                label="Time"
                name="time"
                value={values.time}
                error={errors.time}
                type="datetime-local"
                onChange={handleChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          </Grid>
        )}
      </EditStepper>
    </OverModal>
  );
};

EditPodModal.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  pod: PropTypes.shape({
    _id: PropTypes.string,
    image: PropTypes.shape({
      url: PropTypes.string,
    }),
    title: PropTypes.string,
    level: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

EditPodModal.defaultProps = {
  className: '',
};

export default EditPodModal;
