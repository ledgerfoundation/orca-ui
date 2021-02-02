import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Paper,
  IconButton,
  Avatar,
  Grid,
  Typography,
  Button,
  CircularProgress,
} from '@material-ui/core';
import theme from '../config/theme';
import EditPodModal from './PodEditModal';

const {
  typography: { pxToRem },
} = theme;

const useStyles = makeStyles({
  root: {},
  avatar: {
    height: pxToRem(120),
    width: pxToRem(120),
  },
  content: {
    padding: pxToRem(15),
  },
  buttons: {
    color: 'blue',
    position: 'absolute',
  },
});

const PodBannerCard = ({
  pod,
  editPod,
  className,
  isLoading,
  canInstructorView,
  matchesUser,
  ...other
}) => {
  const classes = useStyles();
  const root = clsx(classes.root, className);

  const [isOpen, setIsOpen] = React.useState(false);

  const PodAvatar = () => (
    <IconButton disabled={!matchesUser || !canInstructorView}>
      <Avatar className={classes.avatar} src={pod?.image?.url} />
    </IconButton>
  );

  const { host } = pod;

  const description =
    pod?.description ||
    'No two sessions are alike. Each session will vary from yoga, sound bath meditation, and other mindfulness activities such as smudge stick creation, intention setting exercises and more. Upon signing up, you will receive a Pod Kit shipped to you with mindfulness goodies, some of which will be used throughout our gatherings.';

  return (
    <Paper className={root} elevation={0} {...other}>
      {isLoading ? (
        <CircularProgress color="secondary" />
      ) : (
        canInstructorView && (
          <Button className={classes.buttons} onClick={() => setIsOpen(true)}>
            Edit
          </Button>
        )
      )}
      {isOpen && (
        <EditPodModal onSave={editPod} pod={pod} open={isOpen} onClose={() => setIsOpen(false)} />
      )}
      <Container>
        <Grid
          container
          className={classes.content}
          direction="row"
          justify="space-between"
          spacing={2}
        >
          <Grid container item alignItems="center" direction="row">
            <Grid item md={4} xs={6}>
              <PodAvatar />
            </Grid>
            <Grid item container direction="column" md={8} xs={6}>
              <Typography variant="h1" className={classes.title}>
                {pod?.title?.toUpperCase()}
              </Typography>
              <Typography variant="body2" className={classes.instructor}>
                {`BY ${host?.nickname?.toUpperCase()}`}
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="body2" paragraph>
              {description}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

PodBannerCard.propTypes = {
  className: PropTypes.string,
  editPod: PropTypes.func,
  canInstructorView: PropTypes.bool,
  matchesUser: PropTypes.bool,
  pod: PropTypes.shape({
    host: PropTypes.shape({
      nickname: PropTypes.string,
    }),
  }),
  isLoading: PropTypes.bool,
};

PodBannerCard.defaultProps = {
  className: '',
  editPod: null,
  isLoading: null,
  matchesUser: null,
  canInstructorView: null,
  pod: {
    host: {
      nickname: '',
    },
  },
};

export default PodBannerCard;
