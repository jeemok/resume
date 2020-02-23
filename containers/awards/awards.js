import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Achievement from '../../components/awards/Achievement';

const ACHIEVEMENTS = [
  {
    "title": "HTM Top Performer",
    "date": "2019-11-01",
    "descriptions": [
      "One of the top performers in HTM Niseko with highest peer reviews score."
    ]
  },
  {
    "title": "Three-times UCSI Presidential Award winner",
    "date": "2015-05-01",
    "descriptions": [
      "Awarded UCSI Presidential Award in January 2014, May 2014, May 2015."
    ]
  },
  {
    "title": "Dean’s List Recipient",
    "date": "2014-04-01",
    "descriptions": [
      "Dean’s List Recipient in May 2013, September 2013, January 2014.",
      "The Dean's Honours List is a recognition of outstanding academic excellence and the Faculty members extend their congratulations to the following students who are admitted to the Dean’s Honours List."
    ]
  },
  {
    "title": "The Star Education Fund Scholarship",
    "date": "2012-12-01",
    "descriptions": [
      "Awarded the Full Scholarship for BSc (Hons) Computing foundation-degree course in UCSI University by The Star Education Fund."
    ]
  }
];

const useStyles = makeStyles(theme => ({
  root: {
    '& p': {
      fontSize: '0.8rem',
    },
  },
}));

export default function MakeItYourM2U() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <div>
        Achievements
      </div>

      <div style={{ margin: 10 }}>
        {
          ACHIEVEMENTS.map(details => <Achievement details={details} />)
        }
      </div>
    </div>
  );
}
