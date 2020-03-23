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
        <div style={{ marginTop: '50px', fontSize: '1.5rem', fontWeight: 'bold' }}>
          Hi, I'm Mok
        </div>

        <div style={{ marginTop: '5px', fontSize: '0.8rem' }}>
          Full stack developer
          <br />
          Have you ever felt that sensation that tells you something is wrong while reading your code? That feeling of “mmm something doesn’t look ok” but still, you don’t precisely get what the issue is?
          This weird feeling is that you get from your code is the correct intuition. These are bad practices, better known as code smells.
        </div>

        <div style={{ marginTop: '10px', fontSize: '0.7rem' }}>
          <div>
            <EmailIcon style={{ fontSize: '0.7rem', marginRight: 10 }} />
            jee.ict@hotmail.com
          </div>
          <div>
            <ForumIcon style={{ fontSize: '0.7rem', marginRight: 10 }} />
            Speaks English, 中文, 广东话, 日本語, Melayu
          </div>
          <div>
            <WorkIcon style={{ fontSize: '0.7rem', marginRight: 10 }} />
            Work: Hokkaido, Japan
          </div>
        </div>
      </div>

      <img src={GCP_ICON} alt="GCP icon" style={{ maxWidth: 50, float: 'right' }} />
    </div>
  );
}
