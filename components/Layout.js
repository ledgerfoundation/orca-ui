import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Nav from './Nav';
import Footer from './Footer';

const useStyles = makeStyles({
  root: {},
  content: {
    minHeight: '100vh',
    marginBottom: '10%',
  },
});

const Layout = ({ children, className, ...other }) => {
  const classes = useStyles();
  const root = clsx(classes.root, className);
  return (
    <div className={root} {...other}>
      <div className={classes.content}>
        <Nav />
        {children}
      </div>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  className: PropTypes.string,
};

Layout.defaultProps = {
  className: '',
};

export default Layout;
