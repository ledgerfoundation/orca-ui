import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { useFormik } from 'formik';
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

  const { handleSubmit, handleChange, values, errors } = useFormik({
    validateOnChange: false,
    initialValues: {
      creator: user._id,
      title: '',
      totalSupply: null,
    },
    validationSchema: podSchema,
    onSubmit(pod) {
      onSave(pod);
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
        title="Create a Pod"
        setActiveStep={setActiveStep}
        activeStep={activeStep}
        handleSubmit={handleSubmit}
        steps={['Pod Details', 'Confirm Pod']}
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
                label="Pod Size"
                name="totalSupply"
                type="number"
                value={values.totalSupply}
                error={errors.totalSupply}
                onChange={handleChange}
              />
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
