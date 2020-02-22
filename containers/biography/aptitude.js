import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
}));

export default function Aptitude() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div>
      Aptitude Test Result

      <div style={{ margin: 10 }}>
        Send me a request to view
      </div>
    </div>
  );
}
