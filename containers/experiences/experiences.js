import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';

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
    padding: 0,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
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
          aria-controls="panel1a-content"
          id="panel1a-header"
         className={classes.summary}
        >
          <Typography className={classes.heading}>
            Experiences
          </Typography>
        </ExpansionPanelSummary>

        <ExpansionPanelDetails className={classes.details}>
          <div style={{ margin: 10 }}>
            Lead Developer at HTM Niseko
            <p>
              May 2019 → Current (10 months)
            </p>

            <br />

            Developer at HTM Niseko
            <p>
              Nov 2017 → May 2019 (1 year, 7 months)
            </p>

            <br />

            Remote Developer at HTM Niseko
            <p>
              Jan 2017 → Nov 2017 (11 months)
            </p>

            <br />

            Intern at HTM Niseko
            <p>
              Jun 2016 → Dec 2016 (7 months)
            </p>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>


    </div>
  );
}
