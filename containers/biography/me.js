import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';

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
    <Box align="center" mt={5}>
      <img
        src={PORTRAIT}
        alt="Mok's Portrait"
        style={{ maxWidth: 100, borderRadius: '50%' }}
      />

      <Box>
        <Typography style={{ fontSize: '1.5rem' }}>
          Mok Yun Liu
        </Typography>

        <Typography style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#2c60a4' }}>
          DevOps Engineer
        </Typography>
      </Box>

      <Box>
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
      </Box>

      <img src={GCP_ICON} alt="GCP icon" style={{ maxWidth: 50, position: 'absolute', top: 10, right: 10 }} />
    </Box>
  );
}
