import React from 'react';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';

import Biography from '../containers/biography/me';
import Languages from '../containers/biography/languages';
import Job from '../containers/experiences/experiences';
import Education from '../containers/education/education';
import Awards from '../containers/awards/awards';
import News from '../containers/awards/news';
import Projects from '../containers/projects/projects';
import OpenSources from '../containers/openSources/libraries';
import Reviews from '../containers/reviews/reviews';

export default function Index() {
  return (
    <Container style={{ fontFamily: 'arial' }}>
      {/* <img src="/static/portrait.jpg" alt="Mok's portrait" style={{ maxWidth: 200, borderRadius: 5 }} /> */}
      <Biography />

      <br />
      <Divider />
      <br />

      <Job />

      <br />
      <Divider />
      <br />

      <Education />

      <br />
      <Divider />
      <br />

      <Awards />

      <br />
      <Divider />
      <br />

      <News />

      <br />
      <Divider />
      <br />

      <Projects />

      <br />
      <Divider />
      <br />

      <Languages />

      <br />
      <Divider />
      <br />

      <Reviews />

      <br />
      <Divider />
      <br />

      <OpenSources />
    </Container>
  );
}
