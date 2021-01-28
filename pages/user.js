import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import Layout from '../components/Layout';
import UserBannerCard from '../components/UserBannerCard';
import PodList from '../components/PodList';
import { useAppStore } from '../store';
import UserPaymentCard from '../components/UserPaymentCard';

const useStyles = makeStyles({
  root: {},
});

const User = observer(() => {
  const classes = useStyles();

  const {
    user: authUser,
    isLoading,
  } = useAppStore().authStore;

  const { user, setUser, createPod, matchesUser } = useAppStore().userPageStore;

  useEffect(() => {
    // Sets the user in the userPageStore, required for userPageStore functions
    if (authUser) {
      setUser(authUser);
      if (authUser.isHost && !authUser.stripeVerified) verifyStripe();
    }
  }, [authUser]);

  return (
    <Layout className={classes.root}>
      {authUser && (
        <Container maxWidth="md">
          <Grid container alignItems="flex-start" direction="row" spacing={2}>
            <Grid container item direction="column" md={8} spacing={2}>
              <Grid item>
                <UserBannerCard
                  matchesUser={matchesUser}
                  isLoading={isLoading}
                  user={authUser}
                  saveUser={saveUser}
                />
              </Grid>
              {user?.isHost && (
                <Grid item>
                  <PodList
                    title="Hosted Pods"
                    isLoading={isLoading}
                    matchesUser={matchesUser}
                    pods={user.hostPods}
                    createPod={createPod}
                  />
                </Grid>
              )}
              <Grid item>
                <PodList title="Member Pods" pods={user.memberPods} />
              </Grid>
            </Grid>
            <Grid container item direction="column" justify="center" spacing={2} md={4}>
              {user?.isHost && (
                <Grid item>
                  <UserPaymentCard
                    isLoading={isLoading}
                    stripeVerified={stripeVerified}
                    verificationLink={verificationLink}
                  />
                </Grid>
              )}
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
