import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import Header from '../../components/common/header';
import PopUp from '../../components/common/popup';

const useStyles = makeStyles(theme => ({
  description: {
    color: 'grey',
    fontSize: '0.8rem',
  },
  date: {
    color: 'grey',
    fontSize: '0.8rem',
  },
  link: {
    // for button
    border: 'none',
    padding: 0,
    // for anchor
    textDecoration: 'none',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: '0.8rem',
    color: '#315893',
  },
}));

export default function News() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Box>
      <Header title="News" />

      <Box m={1}>
        <Box mb={2}>
          <Typography>
            The Human Aspect of Computing
          </Typography>
          <Typography className={classes.date}>
            Mar 2015
          </Typography>
          <PopUp labelClassName={classes.link} label="Paper archive">
            <img src="/static/the_human_aspect_of_computing_paper.jpeg" />
          </PopUp>
          <a
            className={classes.link}
            target="_blank"
            href="http://www.pressreader.com/malaysia/the-star-malaysia-star2/20150326/282226599220128"
          >
            Read online
          </a>
        </Box>

        <Box mb={2}>
          <Typography>
            Education for a Lifetime
          </Typography>
          <Typography className={classes.date}>
            Apr 2015
          </Typography>
          <PopUp labelClassName={classes.link} label="Paper archive">
            <img src="/static/education_for_a_lifetime_paper.jpeg" />
          </PopUp>
          <a
            className={classes.link}
            target="_blank"
            href="http://www.pressreader.com/malaysia/the-star-malaysia-star2/20150414/282093455263590"
          >
            Read online
          </a>
        </Box>
      </Box>
    </Box>
  );
}
