import React from 'react';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

import Biography from '../containers/biography/me';
import Languages from '../containers/biography/languages';
import Job from '../containers/experiences/experiences';
import Education from '../containers/education/education';
import StudentBodies from '../containers/education/studentBodies';
import Awards from '../containers/awards/awards';
import News from '../containers/awards/news';
import Projects from '../containers/projects/projects';
import OpenSources from '../containers/openSources/libraries';
import Reviews from '../containers/reviews/reviews';
import Hobbies from '../containers/hobbies/hobbies';

// Ref: https://stackoverflow.com/cv/mok

// TODO:
//  - eslint

export default function Index() {
  return (
    <Container style={{ fontFamily: 'arial' }} maxWidth="md">
      {/* <img src="/static/portrait.jpg" alt="Mok's portrait" style={{ maxWidth: 200, borderRadius: 5 }} /> */}
      <Biography />

      <br />
      <Divider />
      <br />

      <Grid container spacing={3}>
        <Grid item xs={8}>
          <Job />

          <br />
          <Divider />
          <br />

          <Projects />

          <br />
          <Divider />
          <br />

          <Reviews />
        </Grid>

        <Grid item xs={4}>
          <Education />

          <br />
          <Divider />
          <br />

          <Awards />

          <br />
          <Divider />
          <br />

          <OpenSources />

          <br />
          <Divider />
          <br />

          <Languages />

          <br />
          <Divider />
          <br />

          <StudentBodies />

          <br />
          <Divider />
          <br />

          <News />

          <br />
          <Divider />
          <br />

          <Hobbies />
        </Grid>
      </Grid>
    </Container>
  );
}
