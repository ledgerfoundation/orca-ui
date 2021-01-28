import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  Paper,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@material-ui/core';
import { DateTime } from 'luxon';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import theme from '../config/theme';

const {
  typography: { pxToRem },
} = theme;

const useStyles = makeStyles({
  root: {},
  timeText: {
    marginLeft: pxToRem(10),
  },
});

const PodDetailCard = ({ className, pod }) => {
  const classes = useStyles();
  const root = clsx(classes.root, className);

  return (
    <Paper elevation={2} className={root}>
      <Container>
        {pod && (
          <List>
            <ListItem>
              <ListItemIcon>
                <CalendarTodayIcon color="secondary" />
              </ListItemIcon>
              <ListItemText>
                <Typography className={classes.timeText} variant="body2">
                  {DateTime.fromISO(pod?.time).toFormat('LLL dd')}
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <AllInclusiveIcon color="secondary" />
              </ListItemIcon>
              <ListItemText>
                <Typography className={classes.timeText} variant="body2">
                  {`Every ${DateTime.fromISO(pod?.time).weekdayLong}`}
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <AccessAlarmIcon color="secondary" />
              </ListItemIcon>
              <ListItemText>
                <Typography className={classes.timeText} variant="body2">
                  {`${DateTime.fromISO(pod?.time).toFormat('hh:mm')} - ${DateTime.fromISO(pod?.time)
                    .plus({ minutes: pod?.length })
                    .toFormat('hh:mma')}`}
                </Typography>
              </ListItemText>
            </ListItem>
          </List>
        )}
      </Container>
    </Paper>
  );
};

PodDetailCard.propTypes = {
  className: PropTypes.string,
  pod: PropTypes.shape({
    time: PropTypes.string,
  }),
};

PodDetailCard.defaultProps = {
  className: '',
  pod: {
    time: '',
  },
};

export default PodDetailCard;
