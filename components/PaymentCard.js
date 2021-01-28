import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Card, Grid, CardActionArea } from '@material-ui/core';
import PaymentIcon from '@material-ui/icons/Payment';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../config/theme';

const { breakpoints } = theme;

const useStyles = makeStyles({
  root: {
    padding: '5px 0px',
    marginBottom: '7px',
    width: '50%',
    textAlign: 'left',
    [breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  icon: {
    paddingRight: '10px',
  },
  selected: {
    padding: '5px 0px',
    backgroundColor: 'lightgrey',
    marginBottom: '7px',
    width: '50%',
    textAlign: 'left',
    [breakpoints.down('xs')]: {
      width: '100%',
    },
  },
});

const PaymentCard = ({ card, disabled, onClick, selected }) => {
  const classes = useStyles();

  return (
    <Card className={selected ? classes.selected : classes.root}>
      <CardActionArea disabled={disabled} onClick={onClick}>
        <Grid container direction="row" justify="center" alignItems="center">
          <PaymentIcon className={classes.icon} />
          <Typography variant="h4">{`${card.brand.toUpperCase()} -- ${card.last4}`}</Typography>
        </Grid>
      </CardActionArea>
    </Card>
  );
};

export default PaymentCard;

PaymentCard.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  card: PropTypes.shape({
    brand: PropTypes.string,
    last4: PropTypes.string,
  }).isRequired,
};

PaymentCard.defaultProps = {
  disabled: false,
  onClick: () => {},
  selected: false,
};
