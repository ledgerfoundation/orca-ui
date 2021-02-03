import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import Layout from '../components/Layout';
import UserBannerCard from '../components/UserBannerCard';
import PodList from '../components/PodList';
import { useAppStore } from '../store';

const useStyles = makeStyles({
  root: {},
});

const User = observer(() => {
  const classes = useStyles();

  const { user: authUser, isLoading } = useAppStore().authStore;

  const {
    user,
    createPod,
    isAuthUser,
    setUser,
    loadUser,
    userMemberPods,
    userHostPods,
  } = useAppStore().userPageStore;

  useEffect(() => {
    // Sets the user in the userPageStore, required for userPageStore functions
    if (authUser) {
      setUser(authUser);
      loadUser(authUser);
    }
  }, [authUser]);

  return (
    <Layout className={classes.root}>
      {authUser && (
        <Container maxWidth="md">
          <Grid container alignItems="flex-start" direction="row" spacing={2}>
            <Grid container item direction="column" md={8} spacing={2}>
              <Grid item>
                <UserBannerCard isAuthUser={isAuthUser} isLoading={isLoading} user={authUser} />
              </Grid>
              <Grid item>
                <PodList
                  title="Hosted Pods"
                  isLoading={isLoading}
                  isAuthUser={isAuthUser}
                  pods={userHostPods}
                  createPod={createPod}
                />
              </Grid>
              <Grid item>
                <PodList title="Member Pods" pods={userMemberPods} />
              </Grid>
            </Grid>
          </Grid>
        </Container>
      )}
    </Layout>
  );
});

User.propTypes = {};

User.defaultProps = {};

export default User;
