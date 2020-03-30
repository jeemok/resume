import React, { Children } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import Header from '../../components/common/header';

const STUDENT_BODIES = require('../../data/studentBodies');

const useStyles = makeStyles(theme => ({
  subtitle: {
    fontSize: '0.8rem',
    color: '#a4a4a4',
  },
  description: {
    marginTop: '5px',
    fontSize: '0.8rem',
    color: '#4a4a4a',
  },
}));

export default () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Box>
      <Header title="Student Bodies" />

      <Box m={1}>
        {
          STUDENT_BODIES.map(({ title, subtitle, description }) => (
            <Box mb={2}>
              <div>
                { title }
              </div>

              <div className={classes.subtitle}>
                { subtitle }
              </div>

              {
                description && <div className={classes.description}>{ description }</div>
              }
            </Box>
          ))
        }
      </Box>
    </Box>
  );
}
