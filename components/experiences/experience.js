import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { DateTime } from 'luxon';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DateRangeIcon from '@material-ui/icons/DateRange';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const DATE_FORMAT = 'MMM yyyy'; // e.g. Jan 2019

const useStyles = makeStyles(theme => ({
  company: {
    fontSize: '0.8em',
    color: '#3e75c8',
    fontWeight: 'bold',
    marginTop: '5px',
  },
  subTitle: {
    color: 'grey',
    fontSize: '0.8em',
    marginTop: '10px',
  },
  period: {
    display: 'inline-block',
    minWidth: '300px',
  },
  location: {
    display: 'inline-block',
  },
  icon: {
    verticalAlign: 'top',
    fontSize: '1em',
    marginRight: '5px',
  },
  tag: {
    display: 'inline-block',
    background: '#e8f3ff',
    color: '#3376ac',
    borderRadius: '2px',
    padding: '5px 8px',
    marginRight: '5px',
    fontSize: '0.6em',
  },
  project: {
    fontSize: '0.9em',
    marginLeft: '15px',
    marginBottom: '10px',
  },
  projectName: {
    fontSize: '0.9em',
    fontWeight: 600,
    marginBottom: '5px',
  },
  projectDescription: {
    fontSize: '0.9em',
    marginBottom: '5px',
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
}));

const experience = props => {
  const { title, company, location, from, to, descriptions, tags, projects } = props.details;

  const classes = useStyles();
  const theme = useTheme();

  return (
    <Box mb={3}>
      {/* Role title */}
      <div>
        { title }
      </div>

      {/* Company */}
      <div className={classes.company}>
        { company }
      </div>

      {/* Range and location */}
      <div className={classes.subTitle}>
        <div className={classes.period}>
          <DateRangeIcon className={classes.icon} />
          { DateTime.fromISO(from).toFormat(DATE_FORMAT) }
          &nbsp;
          -
          &nbsp;
          { to ?  DateTime.fromISO(to).toFormat(DATE_FORMAT) : 'Present' }
        </div>

        <div className={classes.location}>
          <LocationOnIcon className={classes.icon} />
          { location }
        </div>
      </div>

      {/* Description paragraphs */}
      {
        Array.isArray(descriptions) && Children.toArray(
          descriptions.map(desc => <p style={{ fontSize: '0.8rem' }}>{ desc }</p>)
        )
      }

      {
        Array.isArray(tags) && Children.toArray(
          tags.map(tag => (
            <div className={classes.tag}>
              { tag }
            </div>
          ))
        )
      }

      {/* Projects */}
      <ExpansionPanel className={classes.panel}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          id="panel1a-header"
          aria-controls="panel1a-content"
          className={classes.summary}
        >
          <Typography variant="subtitle">
            Projects
          </Typography>
        </ExpansionPanelSummary>

        <ExpansionPanelDetails className={classes.details}>
          <div>
            {
              Array.isArray(projects) && Children.toArray(
                projects.map(project => (
                  <div className={classes.project}>
                    <div className={classes.projectName}>
                      { project.name }
                    </div>
                    <div className={classes.projectDescription}>
                      { project.description }
                    </div>
                    {
                      Array.isArray(project.tags) && Children.toArray(
                        project.tags.map(tag => (
                          <div className={classes.tag}>
                            { tag }
                          </div>
                        ))
                      )
                    }
                  </div>
                ))
              )
            }
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Box>
  );
}

experience.PropTypes = {
  details: PropTypes.shape({
    title: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    from: PropTypes.string.isRequired,
    to: PropTypes.string,
    descriptions: PropTypes.arrayOf(PropTypes.string),
    tags: PropTypes.arrayOf(PropTypes.string),
    project: PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.string),
    }),
  }).isRequired,
};

export default experience;
