import React from 'react';
import Container from '@material-ui/core/Container';

import MakeityourM2U from '../components/MakeityourM2U';

export default function Index() {
  return (
    <Container style={{ textAlign: 'center' }}>
      {/* <img src="/static/portrait.jpg" alt="Mok's portrait" style={{ maxWidth: 200, borderRadius: 5 }} /> */}
      Mok Yun Liu
      <MakeityourM2U />
    </Container>
  );
}
