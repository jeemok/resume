import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    // '& p': {
    //   fontSize: '0.8rem',
    // },
  },
}));

export default function Hobbies() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Box className={classes.root}>
      <Typography variant="h5">
        Hobbies
      </Typography>

      <Typography variant="h5">
        Snowboarding
      </Typography>
      <Typography variant="body2">
        Canada Avalanche Safety training 1 certified
      </Typography>
    </Box>
  );
}
