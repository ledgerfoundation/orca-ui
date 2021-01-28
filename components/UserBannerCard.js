import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  Avatar,
  Button,
  ButtonGroup,
  Container,
  Grid,
  IconButton,
  Paper,
  Typography,
  CircularProgress,
} from '@material-ui/core';
import theme from '../config/theme';
import UserModal from './UserModal';

const {
  typography: { pxToRem },
} = theme;

const useStyles = makeStyles({
  root: {
    position: 'relative',
  },
  buttons: {
    color: 'blue',
    position: 'absolute',
    top: pxToRem(0),
    right: pxToRem(0),
  },
  content: {
    padding: pxToRem(15),
    overflow: 'hidden',
  },
  avatar: {
    height: '120px',
    width: '120px',
  },
});

const UserBannerCard = ({ className, user, isLoading, saveUser, matchesUser, ...other }) => {
  const classes = useStyles();
  const root = clsx(classes.root, className);

  const [isOpen, setIsOpen] = React.useState(false);
  const [isImgOpen, setIsImgOpen] = React.useState(false);

  const name = user.nickname || 'New User';

  const bio = user?.bio || 'Add a bio!';

  const UserAvatar = () => (
    <IconButton disabled={!matchesUser || isLoading}>
      <Avatar
        onClick={() => setIsImgOpen(true)}
        className={classes.avatar}
        src={user?.profileImage?.url || user.picture}
      />
    </IconButton>
  );

  return (
    <Paper className={root} elevation={2} {...other}>
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
              <UserAvatar />
            </Grid>
            <Grid item container direction="column" md={8} xs={6}>
              <Typography noWrap className={classes.text} variant="h2">
                {name}
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="body2">{bio}</Typography>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

UserBannerCard.propTypes = {
  className: PropTypes.string,
  user: PropTypes.string,
  isLoading: null,
};

UserBannerCard.defaultProps = {
  className: '',
  user: {},
  isLoading: null,
};

export default UserBannerCard;
