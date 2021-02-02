import React from 'react';
import { AppBar, Toolbar, Button, Avatar, Grid } from '@material-ui/core';
import { useRouter } from 'next/router';
import { observer } from 'mobx-react-lite';
import { makeStyles } from '@material-ui/core/styles';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
// import SearchIcon from '@material-ui/icons/Search';
import { useAppStore } from '../store/app-store.hook';
import theme from '../config/theme';
import { truncateAddress } from '../utils/web3-utils';

const {
  typography: { pxToRem },
} = theme;

const useStyles = makeStyles({
  nav: {
    position: 'static',
    '@media (max-width:425px)': {
      '& div > div> button> span.MuiButton-label': {
        fontSize: pxToRem(10),
      },
      '& div > div> button': {
        minWidth: pxToRem(50),
      },
    },
  },
  image: {
    height: 78,
    textDecoration: 'none',
  },
});

const Nav = observer(() => {
  const classes = useStyles();
  const image = '';

  const { user, isLoading, login, logout } = useAppStore().authStore;

  const router = useRouter();

  const handleLogin = () => {
    const path = router.asPath === '/' ? '/user' : router.asPath;
    login(path);
  };

  const handleLogoClick = () => {
    if (user) router.push('/user');
  };

  const handleAvatarClick = () => {
    if (user) router.push('/user');
  };
  return (
    <AppBar className={classes.nav} elevation={0}>
      <Toolbar>
        <Button onClick={handleLogoClick}>
          <img className={classes.image} alt="logo" src={image} />
        </Button>

        <Grid container justify="flex-end">
          {user && (
            <Button onClick={handleAvatarClick}>
              <Avatar src={user ? user.picture : ''} />
            </Button>
          )}

          {user && (
            <Button disableRipple style={{ backgroundColor: 'transparent', cursor: 'default' }}>
              {`Hi ${truncateAddress(user)}`}
            </Button>
          )}

          <Button
            startIcon={!user ? <PersonOutlineIcon color="secondary" /> : null}
            variant={!user ? 'outlined' : null}
            disabled={!!isLoading}
            onClick={user ? logout : handleLogin}
          >
            {user ? 'Disconnect MetaMask' : 'Connect MetaMask'}
          </Button>
        </Grid>
      </Toolbar>
    </AppBar>
  );
});

export default Nav;
