import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Router from 'next/router';
import _ from 'lodash';
import {
  Typography,
  Paper,
  Grid,
  Container,
  ListItem,
  Avatar,
  List,
  ListItemText,
  ListItemIcon,
} from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import theme from '../config/theme';

const {
  typography: { pxToRem },
} = theme;

const useStyles = makeStyles({
  root: {},
  content: {
    padding: pxToRem(15),
  },
  listHeader: {
    color: '#3140FF',
    fontWeight: '600',
    marginBottom: pxToRem(20),
  },
});

const MemberCard = ({ member, redirect }) => (
  <ListItem
    button={!_.isEmpty(member)}
    onClick={!_.isEmpty(member) && redirect}
    disabled={_.isEmpty(member)}
  >
    <ListItemIcon>
      <Avatar src={member?.profileImage?.url} />
    </ListItemIcon>
    <ListItemText>{member?.nickname}</ListItemText>
  </ListItem>
);

const PodMemberList = observer(({ pod, className, authUser }) => {
  const classes = useStyles();
  const root = clsx(classes.root, className);

  const { members } = pod;

  // Sets the minmum number of cards that will alway render
  const minRenderCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const renderMembers = minRenderCount.map(count => {
    if (members?.length >= count) {
      return members[count - 1];
    }
    return {};
  });

  const redirect = participant => {
    if (authUser?._id === participant?._id) {
      Router.push('/user');
    } else {
      Router.push(`/user/${participant?._id}`);
    }
  };

  return (
    <Paper elevation={2} className={root}>
      <Container className={classes.content}>
        <Grid container direction="column" justify="center">
          <Typography className={classes.listHeader} variant="body1">
            {`ONLY ${10 - pod?.memberIds?.length} SPOTS LEFT`}
          </Typography>
          <List>
            {renderMembers.map(member => (
              <MemberCard redirect={() => redirect(member)} member={member} />
            ))}
          </List>
        </Grid>
      </Container>
    </Paper>
  );
});

MemberCard.propTypes = {
  member: PropTypes.shape({
    profileImage: PropTypes.shape({
      url: PropTypes.string,
    }),
  }).isRequired,
  redirect: PropTypes.func.isRequired,
};

PodMemberList.propTypes = {
  className: PropTypes.string,
  pod: PropTypes.shape({}).isRequired,
};

PodMemberList.defaultProps = {
  className: '',
};

export default PodMemberList;
