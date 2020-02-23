import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { DateTime } from 'luxon';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import DateRangeIcon from '@material-ui/icons/DateRange';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const DATE_FORMAT = 'MMM yyyy'; // e.g. Jan 2019

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: '15px',
  },
  period: {
    color: 'grey',
    fontSize: '0.8em',
    marginTop: '10px',
    display: 'inline-block',
    minWidth: '300px',
  },
  icon: {
    verticalAlign: 'top',
    fontSize: '1em',
    marginRight: '5px',
  },
  tag: {
    display: 'inline-block',
    background: '#e8f3ff',
    color: '#3376ac',
    borderRadius: '2px',
    padding: '5px 8px',
    marginRight: '5px',
    fontSize: '0.6em',
  },
  project: {
    fontSize: '0.9em',
    marginLeft: '15px',
    marginBottom: '10px',
  },
  projectName: {
    fontSize: '0.9em',
    fontWeight: 600,
    marginBottom: '5px',
  },
  projectDescription: {
    fontSize: '0.9em',
    marginBottom: '5px',
  },
}));

const achievement = props => {
  const { title, date, descriptions, tags } = props.details;

  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <div>
        { title }
      </div>

      <div className={classes.period}>
        <DateRangeIcon className={classes.icon} />
        { DateTime.fromISO(date).toFormat(DATE_FORMAT) }
      </div>

      {
        Array.isArray(descriptions) && Children.toArray(
          descriptions.map(desc => <p>{ desc }</p>)
        )
      }

      {
        Array.isArray(tags) && Children.toArray(
          tags.map(tag => (
            <div className={classes.tag}>
              { tag }
            </div>
          ))
        )
      }
    </div>
  );
}

achievement.PropTypes = {
  details: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    descriptions: PropTypes.arrayOf(PropTypes.string),
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default achievement;
