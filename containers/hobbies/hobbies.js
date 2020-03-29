import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import Header from '../../components/common/header';

const useStyles = makeStyles(theme => ({
}));

export default function Hobbies() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Box>
      <Header title="Hobbies" />

      <Box m={1}>
        <Typography variant="subtitle">
          Snowboarding
        </Typography>
        <Typography variant="body2">
          Canada Avalanche Safety training 1 certified
        </Typography>
      </Box>
    </Box>
  );
}
