import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

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
      Awards
      <br />

      <div style={{ margin: 10 }}>
        Academic Excellence Presenter
        <br />
        Jan 2016
        <p>
          Presented on “Academic Excellence in UCSI” to 600 new students and parents during UCSI University Jan 2016 Orientation.
        </p>
      </div>

      <div style={{ margin: 10 }}>
        Three-times UCSI Presidential Award winner
        <br />
        May 2015
        <p>
          Awarded UCSI Presidential Award in January 2014, May 2014, May 2015
        </p>
      </div>

      <div style={{ margin: 10 }}>
        Dean’s List Recipient
        <br />
        Jan 2014
        <p>
          Dean’s List Recipient in May 2013, September 2013, January 2014
          <br />
          <br />
          The Dean's Honours List is a recognition of outstanding academic excellence and the Faculty members extend their congratulations to the following students who are admitted to the Dean’s Honours List.
        </p>
      </div>

      <div style={{ margin: 10 }}>
        The Star Education Fund Scholarship
        <br />
        May 2012
        <p>
          Awarded the Full Scholarship for BSc (Hons) Computing foundation-degree course in UCSI University by The Star Education Fund.
        </p>
      </div>
    </div>
  );
}
