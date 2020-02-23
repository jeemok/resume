import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

const useStyles = makeStyles(theme => ({
  root: {
    '& p': {
      fontSize: '0.8rem',
    },
  },
}));

export default function Projects() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      Projects

      <div style={{ margin: 10 }}>
        Instructors management system
        <p>
          June 2020
        </p>
        <p>
          to manage daily.
        </p>
      </div>

      <div style={{ margin: 10 }}>
        Owner Portal
        <p>
          HTM Inhouse project
        </p>
        <p>
          The Owner Portal is a portal for owners of HTM managed accommodations.
          Designed to be able to view and manage many of the major aspects of their
          property ownership through the new portal; including viewing their Owner
          Statements, making and changing their Owner Bookings, requesting and
          viewing payments and transactions, managing personal details, viewing
          Occupancy information for their room, and communicating with our Owner
          Team.
        </p>
      </div>

      <div style={{ margin: 10 }}>
        Bamboo Plus
        <p>
          HTM Inhouse project
        </p>
        <p>
          HTM Internal (a.k.a. Bamboo Plus) is development project for internal tools.
          The goal is to unify all of the small tools we use throughout the company
          under one roof and also to make them easier and more convenient to use.
          Integration of the above systems replaces the existing Timesheet system and
          interfaces with third-party software - Bamboo HR in several ways.
          Storefront
          Storefront is the public-facing booking portal. Through this channel people
          can browse HTM properties, see the prices and book or quote them, also take
          payments through the portal. All of the information comes from GuestCentrix
          and also ends up in the GuestCentrix.
        </p>
        <p>
          Challenges
        </p>
        <p>
          - Timezone
        </p>
      </div>


      <div style={{ margin: 10 }}>
        OKingLegend App
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
      </div>

      <div style={{ margin: 10 }}>
        LFC Malaysia App
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
      </div>
    </div>
  );
}
