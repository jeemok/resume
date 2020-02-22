import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
}));

export default function Languages() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div>
      Languages

      <div style={{ margin: 10 }}>
        <p>
          English
        </p>

        <p>
          Mandarin
        </p>

        <p>
          Cantonese
        </p>

        <p>
          Malay
        </p>

        <p>
          Japanese
          <ul style={{ fontSize: '0.8em' }}>
            <li>N4 Certified on Jan 2020</li>
            <li>N5 Certified on July 2019</li>
          </ul>
        </p>
      </div>
    </div>
  );
}
