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
      Other Projects

      <div style={{ margin: 10 }}>
        PichaEats Ordering System
        {/* <p>
          June 2019
        </p> */}
        <p>
          PichaEats (rebrand from The Picha Project) has been growing a lot over the years. The initial solution of using WordPress no
          longer work well with the size and has to grow. Building a new website system that comes with
          a ordering capability and integrate with external systems. making sure it is scalable for
          any requirements in the future.

          Integrate with external systems: Payment, Invoice, Chat, etc. Tracking Google Analytics
          and Pixels. Migration from existing wordpress server to GCP. Email client migration, Setup
          new client using ZOHO and migrated DNS.

          Development mode: Using staging environment and production.
        </p>
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
      </div>

      <div style={{ margin: 10 }}>
        Instructors management system
        <p>
          June 2019
        </p>
        <p>
          to manage daily instructors shifts.
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
