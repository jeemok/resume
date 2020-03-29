import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import Review from '../../components/reviews/review';

const useStyles = makeStyles(theme => ({
  root: {
    // '& p': {
    //   fontSize: '0.8rem',
    // },
  },
}));

export default function Reviews() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Box className={classes.root}>
      <Typography variant="h5">
        Manager Assessments
      </Typography>

      <Review
        title="Provides useful, insightful analysis or potential applicants."
        by="by Benjamin Metcalf (System Manager, HTM Niseko)"
        date="Aug 31, 2018"
        descrption={`
          Mok develops functional, reliable, easy to use products, while maintaining extremely high standards
          for coding, security, documentation and testing.
          Really good suggestions for problem solving and improvements - thinking beyond the specification and
          about delivering the best result for HTM.
          He is also a really positive influence within the team - he is fun to work with!
          Provides useful, insightful analysis or potential applicants.
        `}
      />

      <Review
        title="He produces fantastic, well-functioning results and is a pleasure to work with!"
        by="by Benjamin Metcalf (System Manager, HTM Niseko)"
        date="Apr 30, 2018"
        descrption={`
          Last review I wrote how impressed I was with all Mok had learned. 3 months later I don't think like that any more;
          I see Mok as one of the most important and knowledgeable parts of our team.
          His dedication to quality code and structure is fantastic and I rely of him a lot to watch over that for the team.
          He produces fantastic, well-functioning results and is a pleasure to work with!
          I very much appreciate Mok coming to me recently with his concerns. Another example of how he is dedicated to doing quality work.
        `}
      />

      <Review
        title="His development produces really great results."
        by="by Benjamin Metcalf (System Manager, HTM Niseko)"
        date="Jan 28, 2018"
        descrption={`
          I am very impressed.
          His development produces really great results.
          He thinks about the right approach to solving a problem and the fastest approach and
          makes a choice between those two (or a middle ground), as appropriate.
          He stays positive despite repeated changes and set-backs (for Bamboo+) and is a pleasure to work with.
          Tests his development from a user perspective, as well as a developer.
        `}
      />
    </Box>
  );
}
