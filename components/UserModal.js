import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { useFormik } from 'formik';
import MenuItem from '@material-ui/core/MenuItem';
import NoSSR from 'react-no-ssr';
import dynamic from 'next/dynamic';
import { EditStepper } from './Stepper';
import userSchema from '../schema/user';
import OverTextField from './OverTextField';
import OverModal from './OverModal';
import theme from '../config/theme';
import { useAppStore } from '../store/app-store.hook';

const MuiPhoneNumber = dynamic(import('material-ui-phone-number'), { ssr: false });

const {
  typography: { pxToRem },
  breakpoints,
} = theme;

const useStyles = makeStyles({
  root: {},
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

const steps = ['Profile', 'Details'];
const pronounList = [
  'He/Him/His',
  'She/Her/Hers',
  'They/Them/Theirs',
  'Ze/Zir/Zirs',
  'Prefer Not To Answer',
];

const UserModal = ({ className, user, isOpen, onSave, onClose }) => {
  const classes = useStyles();
  const root = clsx(classes.root, className);

  const { notificationsStore } = useAppStore().authStore;

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

  const initialValues = {
    ...userSchema.default(),
    ...user,
    email: user?.name || '',
  };

  const { handleSubmit, handleChange, values, errors } = useFormik({
    validateOnChange: false,
    validationSchema: userSchema,
    initialValues,
    enableReinitialize: true,
    onSubmit(newUser) {
      onSave(newUser, {
        path: newUser.profileImage.path,
        url: newUser.profileImage.url,
      });
      handleReset();
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
    <OverModal className={root} onClose={handleClose} open={isOpen}>
      <EditStepper
        title="User Profile"
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
                label="FirstName"
                name="firstName"
                value={values.firstName}
                error={errors.firstName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item>
              <OverTextField
                required
                label="LastName"
                name="lastName"
                value={values.lastName}
                error={errors.lastName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item>
              <OverTextField
                required
                label="Nickname"
                name="nickname"
                value={values.nickname}
                error={errors.nickname}
                onChange={handleChange}
              />
            </Grid>
            <Grid item>
              <OverTextField
                label="Bio"
                name="bio"
                value={values.bio}
                error={errors.bio}
                multiline
                rows={4}
                onChange={handleChange}
              />
            </Grid>
            {user.isHost && (
              <Grid item>
                <OverTextField
                  required
                  label="VideoLink"
                  name="videoLink"
                  value={values.videoLink}
                  error={errors.videoLink}
                  onChange={handleChange}
                />
              </Grid>
            )}
          </Grid>
        )}

        {activeStep === 1 && (
          <Grid container alignItems="center" direction="column" spacing={4}>
            <Grid item>
              <OverTextField
                required
                label="Date of Birth"
                name="birthday"
                value={values.birthday}
                error={errors.birthday}
                type="date"
                onChange={handleChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item>
              <NoSSR>
                <MuiPhoneNumber
                  color="secondary"
                  size="small"
                  required
                  label="Mobile Number"
                  variant="outlined"
                  name="phone"
                  value={values.phone}
                  error={errors.phone}
                  defaultCountry="us"
                  onChange={handleChange('phone')}
                />
              </NoSSR>
            </Grid>
            <Grid item>
              <OverTextField
                required
                select
                label="Pronoun"
                value={values.pronoun}
                error={errors.pronoun}
                onChange={handleChange('pronoun')}
                helperText={errors.pronoun}
              >
                {pronounList.map(item => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </OverTextField>
            </Grid>
          </Grid>
        )}
        {activeStep === 2 && (
          <Grid container alignItems="center" direction="column" spacing={4}>
            <Grid item>
              <OverTextField
                name="instagram"
                label="Instagram"
                value={values.instagram}
                error={errors.instagram}
                onChange={handleChange}
              />
            </Grid>
            <Grid item>
              <OverTextField
                name="facebook"
                label="Facebook"
                value={values.facebook}
                error={errors.facebook}
                onChange={handleChange}
              />
            </Grid>
            <Grid item>
              <OverTextField
                name="twitter"
                label="Twitter"
                value={values.twitter}
                error={errors.twitter}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        )}
      </EditStepper>
    </OverModal>
  );
};

UserModal.propTypes = {
  className: PropTypes.string,
  isOpen: PropTypes.bool,
  onSave: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    pronoun: PropTypes.string.isRequired,
    isHost: PropTypes.bool.isRequired,
  }).isRequired,
};

UserModal.defaultProps = {
  className: '',
  isOpen: false,
};

export default UserModal;
