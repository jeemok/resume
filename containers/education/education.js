import React, { Children } from 'react';
import { DateTime } from 'luxon';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import DateRangeIcon from '@material-ui/icons/DateRange';

const DATE_FORMAT = 'MMM yyyy'; // e.g. Jan 2019

const EDUCATIONS = require('../../data/educations');

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: '25px',
  },
  school: {
    fontSize: '0.8em',
    color: '#3e75c8',
    fontWeight: 'bold',
    marginTop: '5px',
  },
  subTitle: {
    color: 'grey',
    fontSize: '0.8em',
    marginTop: '10px',
  },
  icon: {
    verticalAlign: 'top',
    fontSize: '1em',
    marginRight: '5px',
  },
  description: {
    fontSize: '0.8em',
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
}));

export default () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div>
      <div>
        Education
      </div>

      <div style={{ margin: 10 }}>
        {
          EDUCATIONS.map(education => (
            <div className={classes.root}>
              <div>
                { education.title }
              </div>

              <div className={classes.school}>
                { education.school }
              </div>

              <div className={classes.subTitle}>
                <DateRangeIcon className={classes.icon} />
                { DateTime.fromISO(education.from).toFormat(DATE_FORMAT) }
                &nbsp;
                -
                &nbsp;
                { education.to ?  DateTime.fromISO(education.to).toFormat(DATE_FORMAT) : 'Present' }
              </div>

              {
                Array.isArray(education.descriptions) && Children.toArray(
                  education.descriptions.map(desc => <p className={classes.description}>{ desc }</p>)
                )
              }

              {
                Array.isArray(education.tags) && Children.toArray(
                  education.tags.map(tag => (
                    <div className={classes.tag}>
                      { tag }
                    </div>
                  ))
                )
              }
            </div>
          ))
        }
      </div>
    </div>
  );
}
