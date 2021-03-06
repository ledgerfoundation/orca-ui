import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import UserBannerCard from '../../components/UserBannerCard';
import PodList from '../../components/PodList';
import { useAppStore } from '../../store';
import { getUserById } from '../../services/user';

const useStyles = makeStyles({
  root: {},
});

const User = observer(({ user }) => {
  const classes = useStyles();

  const { createPod, setUser, matchesUser } = useAppStore().userPageStore;
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
                <UserBannerCard matchesUser={matchesUser} user={user} />
              </Grid>
              {user?.isHost && (
                <Grid item>
                  <PodList
                    title="Hosted Pods"
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
          </Grid>
        </Container>
      )}
    </Layout>
  );
});

export const getServerSideProps = async ({ query, res }) => {
  let user;
  try {
    user = await getUserById(query.userId);
  } catch {
    res.writeHead(302, { Location: '/404' });
    res.end();
  }
  return { props: { user } };
};

User.propTypes = {};

User.defaultProps = {};

export default User;
