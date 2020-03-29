import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  description: {
    color: 'grey',
    fontSize: '0.8rem',
  },
}));

const achievement = props => {
  const { title, date, description, tags } = props.details;
  const classes = useStyles();

  return (
    <Box mb={2}>
      <Typography>
        { title }
      </Typography>
      <Typography variant="body2" className={classes.description}>
        { description }
      </Typography>
    </Box>
  );
}

achievement.PropTypes = {
  details: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default achievement;
