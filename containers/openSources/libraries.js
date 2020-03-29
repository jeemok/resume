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
  card: {
    display: 'flex',
    maxWidth: 1200,
    margin: '0 auto',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: '100%',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function MakeItYourM2U() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div>
      Open Sources
      <br />

      <div style={{ margin: 10 }}>
        <a href="https://www.npmjs.com/package/better-npm-audit" style={{ display: 'block' }}>
          Better NPM Audit
        </a>

        <div style={{ fontSize: '0.8rem', marginBottom: '10px' }}>
          Made to allow skipping certain vulnerabilities, and any extra handling that are not supported by the default npm audit in the future.
        </div>

        <img
          src="https://nodei.co/npm/better-npm-audit.png?downloads=true&downloadRank=true&stars=true"
          style={{ display: 'block', maxWidth: '250px' }}
        />
      </div>
    </div>
  );
}
