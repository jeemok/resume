import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Experience from '../../components/experiences/experience';

const JOBS = require('../../data/jobs');

const useStyles = makeStyles(theme => ({
  root: {
    '& p': {
      fontSize: '0.8rem',
    },
  },
  panel: {
    boxShadow: 'none',
  },
  summary: {
    padding: 0,
  },
  details: {
    padding: '10px',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightBold,
    color: '#315893',
  },
}));

export default function MakeItYourM2U() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <ExpansionPanel className={classes.panel} defaultExpanded>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          id="panel1a-header"
          aria-controls="panel1a-content"
          className={classes.summary}
        >
          <Typography className={classes.heading}>
            Experiences
          </Typography>
        </ExpansionPanelSummary>

        <ExpansionPanelDetails className={classes.details}>
          <div>
            {
              JOBS.map(details => <Experience details={details} />)
            }
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
