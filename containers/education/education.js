import React, { Children } from 'react';
import { DateTime } from 'luxon';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import DateRangeIcon from '@material-ui/icons/DateRange';
import Header from '../../components/common/header';

const DATE_FORMAT = 'MMM yyyy'; // e.g. Jan 2019

const EDUCATIONS = require('../../data/educations');

const useStyles = makeStyles(theme => ({
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
}));

export default () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Box>
      <Header title="Education" />

      <Box m={1}>
        {
          EDUCATIONS.map(education => (
            <Box>
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
            </Box>
          ))
        }
      </Box>
    </Box>
  );
}
