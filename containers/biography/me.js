import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import EmailIcon from '@material-ui/icons/Email';
import ForumIcon from '@material-ui/icons/Forum';
import WorkIcon from '@material-ui/icons/Work';

const GCP_ICON = '/static/google-cloud-icon.png';
const PORTRAIT = '/static/transparent_background_portrait.png';

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    maxWidth: 1200,
    margin: '0 auto',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: '100%',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function MakeItYourM2U() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div>
      <div style={{ display: 'inline-block' }}>
        <img src={PORTRAIT} alt="Mok's Portrait" style={{ maxWidth: 100, borderRadius: '50%' }} />
      </div>

      <div style={{ display: 'inline-block', marginLeft: 20 }}>
        <h1>
          Hi, I'm Mok
        </h1>

        <div>
          Full stack developer
        </div>

        <div style={{ fontSize: '0.7em' }}>
          <p>
            <EmailIcon style={{ fontSize: '0.9em', marginRight: 10 }} />
            jee.ict@hotmail.com
          </p>
          <p>
            <ForumIcon style={{ fontSize: '0.9em', marginRight: 10 }} />
            Speaks English, 中文, 广东话, 日本語, Melayu
          </p>
          <p>
            <WorkIcon style={{ fontSize: '0.9em', marginRight: 10 }} />
            Work: Hokkaido, Japan
          </p>
        </div>
      </div>

      <img src={GCP_ICON} alt="GCP icon" style={{ maxWidth: 50, float: 'right' }} />
    </div>
  );
}
