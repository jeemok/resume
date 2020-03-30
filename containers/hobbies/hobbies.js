import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import Header from '../../components/common/header';

const useStyles = makeStyles(theme => ({
  description: {
    color: 'grey',
    fontSize: '0.8rem',
  },
}));

export default function Hobbies() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Box>
      <Header title="Hobbies" />

      <Box m={1}>
        <Typography>
          Snowboarding
        </Typography>
        <Typography className={classes.description}>
          Certified Canada Avalanche Safety Training
        </Typography>
      </Box>
    </Box>
  );
}
