import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import Header from '../../components/common/header';

const useStyles = makeStyles(theme => ({
  packageName: {
    display: 'block',
    textDecoration: 'none',
  },
  description: {
    color: 'grey',
    fontSize: '0.8rem',
    marginTop: '5px',
    marginBottom: '10px',
  },
}));

export default function MakeItYourM2U() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Box>
      <Header title="Open Sources" />

      <Box m={1}>
        <a href="https://www.npmjs.com/package/better-npm-audit" className={classes.packageName}>
          Better NPM Audit
        </a>

        <Typography variant="body2" className={classes.description}>
          Made to allow skipping certain vulnerabilities, and any extra handling that are not supported by the default npm audit in the future.
        </Typography>

        <img
          src="https://nodei.co/npm/better-npm-audit.png?downloads=true&downloadRank=true&stars=true"
          style={{ display: 'block', maxWidth: '250px' }}
        />
      </Box>
    </Box>
  );
}
