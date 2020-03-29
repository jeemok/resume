import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';

import Experience from '../../components/experiences/experience';
import Header from '../../components/common/header';

const JOBS = require('../../data/jobs');

const useStyles = makeStyles(theme => ({
}));

export default function MakeItYourM2U() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Box>
      <Header title="Job Experiences" />

      <Box m={2}>
        {
          JOBS.map(details => <Experience details={details} />)
        }
      </Box>
    </Box>
  );
}
