import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {
  Step,
  Stepper,
  StepButton,
  StepLabel,
  Button,
  Typography,
  useMediaQuery,
  StepConnector,
  Popover,
  Box,
  ButtonGroup,
  Grid,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import theme from '../config/theme';

const {
  typography: { pxToRem },
  breakpoints,
  palette,
} = theme;

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexGrow: 1,
  },
  formContent: {
    minHeight: '300px',
    padding: pxToRem(20),
    backgroundColor: '#e0e0e0',
    flexGrow: 1,
  },
  text: {
    fill: '#3140FF',
  },
  active: {
    fill: '#3140FF !important',
    color: '#FFFFFF !important',
    '& > text': {
      fill: 'white !important',
    },
  },
  iconRoot: {
    color: '#FFFFFF',
    border: '1px solid #3140FF',
    borderRadius: '50%',
  },
  label: {
    [breakpoints.down('xs')]: {
      padding: pxToRem(1),
    },
  },
  stepButtonRoot: {
    [breakpoints.down('xs')]: {
      padding: '0',
    },
  },
  labelText: {
    fontSize: `${pxToRem(12)} !important`,
  },
  popover: {
    padding: '20px 25px',
    border: `3px solid ${palette.secondary.main}`,
  },
});

const OrcaConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    '& $line': {
      backgroundImage:
        'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(49,64,255,1) 35%, rgba(0,212,255,1) 100%)',
    },
  },
  completed: {
    '& $line': {
      backgroundImage:
        'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(49,64,255,1) 35%, rgba(0,212,255,1) 100%)',
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
    [breakpoints.down('xs')]: {
      height: `${pxToRem(8)} !important`,
      width: pxToRem(2),
    },
  },
})(StepConnector);

export const EditStepper = ({
  className,
  children,
  title,
  subtitle,
  setActiveStep,
  activeStep,
  handleSubmit,
  steps,
  completed,
  onDelete,
  initialState,
}) => {
  const classes = useStyles();
  const root = clsx(classes.root, className);
  const lastStep = activeStep === steps.length - 1;
  const isDesktop = useMediaQuery('(min-width:600px)');

  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleStep = step => {
    setActiveStep(step);
  };

  const handleDeleteClick = event => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleDeleteClose = () => setAnchorEl(null);

  return (
    <Grid container direction="column" justify="space-between" className={root}>
      <Grid item>
        <Typography variant="h1">{title}</Typography>
        <Typography variant="h3">{subtitle}</Typography>
      </Grid>
      <Stepper
        classes={{ root: classes.stepperRoot }}
        nonLinear
        orientation={isDesktop ? 'horizontal' : 'vertical'}
        activeStep={activeStep}
        connector={<OrcaConnector />}
      >
        {steps.map((label, index) => (
          <Step key={label}>
            <StepButton
              classes={{ root: classes.stepButtonRoot }}
              onClick={() => handleStep(index)}
              completed={completed[index]}
            >
              <StepLabel
                classes={{ root: classes.stepLabelRoot, label: classes.stepButtonLabel }}
                StepIconProps={{
                  classes: {
                    active: classes.active,
                    completed: classes.completed,
                    text: classes.text,
                    root: classes.iconRoot,
                  },
                }}
              >
                <Typography className={classes.labelText} variant="h3">
                  {label.toUpperCase()}
                </Typography>
              </StepLabel>
            </StepButton>
          </Step>
        ))}
      </Stepper>
      {onDelete && (
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          onClose={handleDeleteClose}
        >
          <Box className={classes.popover}>
            <Typography variant="subtitle1">ARE YOU SURE YOU WANT TO DELETE?</Typography>
            <div>
              <Button
                onClick={onDelete(initialState)}
                className={classes.button}
                size="large"
                color="secondary"
              >
                <Typography variant="body1">Yes</Typography>
              </Button>
              <Button
                onClick={handleDeleteClose}
                className={classes.button}
                size="large"
                color="secondary"
              >
                <Typography variant="body1">Cancel</Typography>
              </Button>
            </div>
          </Box>
        </Popover>
      )}

      <form noValidate autoComplete="off" className={classes.formContent}>
        {children}
      </form>

      <ButtonGroup className={classes.buttonGroup} fullWidth variant="text">
        <Button
          onClick={handleBack}
          disabled={activeStep === 0}
          size="large"
          startIcon={<ArrowBackIosIcon color="secondary" />}
        >
          <Typography variant="body1">Back </Typography>
        </Button>
        <Button size="large" disabled={!lastStep && !onDelete} onClick={handleDeleteClick}>
          {lastStep && onDelete && <DeleteIcon color="error" />}
        </Button>
        )
        <Button size="large" disabled={!lastStep} color="secondary" onClick={handleSubmit}>
          <Typography variant="body1">Save </Typography>
        </Button>
        )
        <Button
          onClick={handleNext}
          disabled={lastStep}
          size="large"
          endIcon={<ArrowForwardIosIcon color="secondary" />}
        >
          <Typography variant="body1">Next </Typography>
        </Button>
      </ButtonGroup>
    </Grid>
  );
};

EditStepper.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  activeStep: PropTypes.number.isRequired,
  setActiveStep: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  steps: PropTypes.arrayOf(PropTypes.shape).isRequired,
  completed: PropTypes.shape({}).isRequired,
  onDelete: PropTypes.func,
  initialState: PropTypes.shape({}),
};

EditStepper.defaultProps = {
  className: '',
  title: '',
  subtitle: '',
  onDelete: null,
  initialState: {},
};

export default EditStepper;
