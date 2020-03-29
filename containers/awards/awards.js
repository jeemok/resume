import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import Achievement from '../../components/awards/Achievement';
import Header from '../../components/common/header';

const ACHIEVEMENTS = [
  {
    "title": "HTM Top Performer",
    "date": "2019-11-01",
    "description": "Top performer in HTM Niseko among the highest peer reviews score."
  },
  {
    "title": "Three-times UCSI Presidential Award winner",
    "date": "2015-05-01",
    "description": "Awarded one of the top recognitions in UCSI Univeristy - The Presidential Award in January 2014, May 2014, May 2015."
  },
  {
    "title": "Dean’s List Recipient",
    "date": "2014-04-01",
    "description": "Dean’s List Recipient in May 2013, September 2013, January 2014."
  },
  {
    "title": "The Star Education Fund Scholarship",
    "date": "2012-12-01",
    "description": "Awarded the Full Scholarship for B.Sc. (Hons) Computing foundation-degree course in UCSI University by The Star Education Fund."
  }
];

const useStyles = makeStyles(theme => ({
  // root: {
  //   '& p': {
  //     fontSize: '0.8rem',
  //   },
  // },
}));

export default function MakeItYourM2U() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Box className={classes.root}>
      <Header title="Achievements" />

      <Box m={1}>
        {
          ACHIEVEMENTS.map(details => <Achievement details={details} />)
        }
      </Box>
    </Box>
  );
}
