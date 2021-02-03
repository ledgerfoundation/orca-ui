import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Container, Grid, Paper, Typography, CircularProgress } from '@material-ui/core';
import theme from '../config/theme';
import PodModal from './PodModal';
import PodListCard from './PodListCard';

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
  },
});

const PodList = ({
  children,
  className,
  title,
  pods = [],
  createPod,
  isLoading,
  isAuthUser,
  ...other
}) => {
  const classes = useStyles();
  const root = clsx(classes.root, className);

  const [isOpen, setIsOpen] = useState(false);
  const minRenderCount = [1, 2];
  const renderPods = minRenderCount.map(count => (pods?.length >= count ? pods[count - 1] : {}));

  return (
    <Paper className={root} elevation={2} {...other}>
      <Container>
        <Grid container className={classes.content}>
          <Grid item>
            <Typography variant="button">{title}</Typography>
          </Grid>
          <Grid container direction="column" spacing={2}>
            {createPod &&
              isAuthUser &&
              (isLoading ? (
                <CircularProgress color="secondary" />
              ) : (
                  <Button className={classes.buttons} onClick={() => setIsOpen(true)}>
                    Add
                  </Button>
                ))}
            {isOpen && (
              <PodModal onSave={createPod} open={isOpen} onClose={() => setIsOpen(false)} />
            )}

            {renderPods.map((pod, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <Grid item key={index}>
                <PodListCard pod={pod} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

PodList.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  pods: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
    }),
  ),
  createPod: PropTypes.func,
  isLoading: PropTypes.bool,
  isAuthUser: PropTypes.bool,
};

PodList.defaultProps = {
  className: '',
  title: '',
  pods: [],
  createPod: null,
  isLoading: null,
  isAuthUser: null,
};
export default PodList;
