import React from 'react';
import PropTypes from 'prop-types';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router';
import { observer } from 'mobx-react-lite';
import clsx from 'clsx';
import Layout from '../../components/Layout';
import { useAppStore } from '../../store/app-store.hook';
import { getPod } from '../../services/pod';
import { auth0 } from '../../utils/auth0';
import { getUser } from '../../services/user';
import PodPaymentCard from '../../components/PodPaymentCard';
import GatheringDetailCard from '../../components/GatheringDetailCard';
import UserBannerCard from '../../components/UserBannerCard';
import PodMemberList from '../../components/PodMemberList';
import PodDetailCard from '../../components/PodDetailCard';
import PodBannerCard from '../../components/PodBannerCard';
import theme from '../../config/theme';

// stripe public key
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

const {
  typography: { pxToRem },
} = theme;

const useStyles = makeStyles({
  root: {},
  detailsRow: {
    height: pxToRem(160),
  },
  membersRow: {
    height: pxToRem(295),
  },
});

const Pod = observer(({ className, user }) => {
  const classes = useStyles();
  const root = clsx(classes.root, className);
  const { query } = useRouter();
  const { podId } = query;

  const {
    pod,
    loadPod,
    setPod,
    editPod,
    canInstructorView,
    isLoading,
    isBooked,
  } = useAppStore().podPage;
  const { matchesUser } = useAppStore().userPageStore;

  React.useEffect(() => {
    if (podId) loadPod(podId);
  }, [podId]);

  React.useEffect(() => {
    if (podId) setPod(podId);
  }, [podId]);

  return (
    <Layout className={root}>
      <Elements stripe={stripePromise}>
        {pod && (
          <Container maxWidth="md">
            <Grid container direction="column" justify="center" alignItems="stretch" spacing={4}>
              <Grid item>
                <PodBannerCard
                  isLoading={isLoading}
                  editPod={editPod}
                  pod={pod}
                  canInstructorView={canInstructorView}
                  matchesUser={matchesUser}
                />
              </Grid>
              <Grid
                item
                container
                direction="row"
                alignItems="stretch"
                justify="center"
                spacing={2}
              >
                <Grid item md={7} xs={12}>
                  <PodPaymentCard className={classes.detailsRow} pod={pod} isBooked={isBooked} />
                </Grid>
                <Grid item md={5} xs={12}>
                  <PodDetailCard className={classes.detailsRow} pod={pod} />
                </Grid>
              </Grid>
              <Grid
                item
                container
                direction="row"
                alignItems="stretch"
                justify="center"
                spacing={2}
              >
                <Grid item>
                  <UserBannerCard
                    className={classes.membersRow}
                    isLoading={isLoading}
                    user={pod.host}
                  />
                </Grid>
                {pod?.booked && (
                  <Grid item md={5}>
                    <GatheringDetailCard
                      isLoading={isLoading}
                      className={classes.membersRow}
                      pod={pod}
                    />
                  </Grid>
                )}
              </Grid>
              <Grid item>
                <PodMemberList authUser={user} pod={pod} />
              </Grid>
            </Grid>
          </Container>
        )}
      </Elements>
    </Layout>
  );
});

export const getServerSideProps = async ({ query, req, res }) => {
  let auth;
  let user;
  let pod;
  try {
    auth = await auth0.getSession(req);
  } catch (error) {
    console.error(error);
  }

  if (auth) {
    const { user: authUser } = auth;
    // checks if the user exists, if not will register user in db
    try {
      user = await getUser(authUser);
      pod = await getPod(query.podId);
    } catch {
      res.writeHead(302, { Location: '/404' });
      res.end();
    }

    return { props: { user, pod } };
  }
  return { props: {} };
};

Pod.propTypes = {
  pod: PropTypes.shape({}),
  user: PropTypes.shape({}),
};

Pod.defaultProps = {
  pod: {},
  user: {},
};

export default Pod;
