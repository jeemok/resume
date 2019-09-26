import React from 'react';
import Container from '@material-ui/core/Container';

import MakeItYourM2U from '../components/MakeItYourM2U';

export default function Index() {
  return (
    <Container style={{ textAlign: 'center' }}>
      {/* <img src="/static/portrait.jpg" alt="Mok's portrait" style={{ maxWidth: 200, borderRadius: 5 }} /> */}
      Mok Yun Liu
      <MakeItYourM2U />
    </Container>
  );
}
