import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Box, useMediaQuery, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  title: {
    color: '#2469a3',
    fontWeight: 'bold',
    fontSize: '1.2rem',
  },
  author: {
    color: '#8a8a8a',
    fontSize: '0.7rem',
  },
}));

const Review = props => {
  const { title, by, date, descrption } = props;
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Box p={2}>
      <Typography variant="h5" className={classes.title}>
        "
        {title}
        "
      </Typography>
      <Typography variant="body1" className={classes.author}>
        {by}
        <br />
        {date}
      </Typography>

      <Box mt={2}>
        <Typography variant="body2">
          {descrption}
        </Typography>
      </Box>
    </Box>
  );
};

Review.propTypes = {
  title: PropTypes.string.isRequired,
  by: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  descrption: PropTypes.string.isRequired,
};

export default Review;
