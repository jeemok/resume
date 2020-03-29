import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import Header from '../../components/common/header';

const useStyles = makeStyles(theme => ({
}));

export default function Projects() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Box>
      <Header title="Other Projects" />

      <Box m={2}>
        <Typography variant="subtitle">
          PichaEats Ordering System
        </Typography>
        {/* <p>
          June 2019
        </p> */}
        <Typography variant="body2" style={{ color: 'grey' }}>
          PichaEats (rebrand from The Picha Project) has been growing a lot over the years. The initial solution of using WordPress no
          longer work well with the size and has to grow. Building a new website system that comes with
          a ordering capability and integrate with external systems. making sure it is scalable for
          any requirements in the future.
          <br />
          Integrate with external systems: Payment, Invoice, Chat, etc. Tracking Google Analytics
          and Pixels. Migration from existing wordpress server to GCP. Email client migration, Setup
          new client using ZOHO and migrated DNS.
          <br />
          Development mode: Using staging environment and production.
          <br />
          Tech Stacks: React, Material UI, Express
          Repository and Task Management: GitHub

          <p>
            Website
            <br />
            All the static sites. SEO and designs.
          </p>
          <p>
            Cart
            <br />
            Items to cart and checkout. Google map API for real data address. Persistency of user's cart.
            Promo code system.
          </p>
          <p>
            Catering
            <br />
            Customize menu.
          </p>
          <p>
            Management Backend
            <br />
            Delivery area, menu, items, etc.
          </p>
          <p>
            Blog
            <br />
            using wordpress?
          </p>
        </Typography>
      </Box>

      <Box m={2}>
        <Typography variant="subtitle">
          Ski School Management System
        </Typography>

        <p>
          June 2019
        </p>
        <Typography variant="body2">
          Manage daily instructors rosters and training.
        </Typography>
      </Box>

      <Box m={2}>
        <Typography variant="subtitle">
          OKingLegend App
        </Typography>

        <p>
          Sep 2017
        </p>
        <p>
          Built native iOS & Android application using React Native through Expo.io tool; Uses WordPress Woocommerce as backend; The application supports PayPal and COD payment; Published on both AppStore & Google Play Store:
          <br />
          <br />
          https://itunes.apple.com/us/app/okinglegend/id1236763942?mt=8&ign-mpt=uo%3D4
          <br />
          https://play.google.com/store/apps/details?id=com.okinglegend.okinglegendapp&hl=en
        </p>
      </Box>

      <Box m={2}>
        <Typography variant="subtitle">
          LFC Malaysia App
        </Typography>
        <p>
          Jun 2017
        </p>
        <p>
          Built native ios & Android application using React Native through Expo.io tool; Uses WordPress Woocommerce as backend; The application supports PayPal and COD payment; Published on both AppStore & Google Play Store:
          <br />
          <br />
          https://itunes.apple.com/us/app/lfc-malaysia/id1215617599?mt=8
          <br />
          https://play.google.com/store/apps/details?id=com.nav.lfc&hl=en
        </p>
      </Box>
    </Box>
  );
}
