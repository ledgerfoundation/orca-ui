import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import UserBannerCard from '../../components/UserBannerCard';
import PodList from '../../components/PodList';
import { useAppStore } from '../../store';

const useStyles = makeStyles({
  root: {},
});

const User = observer(() => {
  const classes = useStyles();

  const { createPod, setUser, isAuthUser, user } = useAppStore().userPageStore;
  const { query } = useRouter();
  const { userId } = query;

  useEffect(() => {
    // Sets the user in the userPageStore, required for userPageStore functions
    if (user) {
      setUser(user);
    }
  }, [user]);
  return (
    <Layout className={classes.root}>
      {userId && (
        <Container maxWidth="md">
          <Grid container alignItems="flex-start" direction="row" spacing={2}>
            <Grid container item direction="column" md={8} spacing={2}>
              <Grid item>
                <UserBannerCard isAuthUser={isAuthUser} user={user} />
              </Grid>
              {user?.isHost && (
                <Grid item>
                  <PodList
                    title="Hosted Pods"
                    isAuthUser={isAuthUser}
                    pods={user.hostPods}
                    createPod={createPod}
                  />
                </Grid>
              )}
              <Grid item>
                <PodList title="Member Pods" pods={user.memberPods} />
              </Grid>
            </Grid>
          </Grid>
        </Container>
      )}
    </Layout>
  );
});

export default User;
