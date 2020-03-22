import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 250,
    margin: 10,
    display: 'inline-block',
    verticalAlign: 'top',
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

export default function News() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div>
      <div>
        News
      </div>

      <Card className={classes.card}>
        <CardMedia
          component="img"
          height="200"
          alt="Human Aspect of Computing"
          image="/static/human-aspect-of-computing.jpg"
          title="Human Aspect of Computing"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            The Human Aspect of Computing
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Local paper, Mar 2015.
            <p>
              Online: http://www.pressreader.com/malaysia/the-star-malaysia-star2/20150326/282226599220128
            </p>
            <p>
              Paper archive: https://www.ucsiuniversity.edu.my/sites/default/files/20150326-star.pdf
            </p>
          </Typography>
        </CardContent>

        <CardActions>
          <Button size="small" color="primary">
            Download
          </Button>
          <Button size="small" color="primary" href="http://www.pressreader.com/malaysia/the-star-malaysia-star2/20150326/282226599220128">
            Read More
          </Button>
        </CardActions>
      </Card>

      <Card className={classes.card}>
        <CardMedia
          component="img"
          height="200"
          alt="Education for a lifetime"
          image="/static/education-for-a-lifetime.png"
          title="Education for a lifetime"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Education for a Lifetime
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Local paper, Apr 2015.
            <p>
              Online: http://www.pressreader.com/malaysia/the-star-malaysia-star2/20150414/282093455263590
            </p>
            <p>
              Paper archive: https://www.ucsiuniversity.edu.my/sites/default/files/20150414-star2.pdf
            </p>
          </Typography>
        </CardContent>

        <CardActions>
          <Button size="small" color="primary">
            Download
          </Button>
          <Button size="small" color="primary" href="http://www.pressreader.com/malaysia/the-star-malaysia-star2/20150414/282093455263590">
            Read More
          </Button>
        </CardActions>
      </Card>

      <Card className={classes.card}>
        <CardMedia
          component="img"
          height="200"
          alt="MakeityourM2U"
          image="https://i.stack.imgur.com/z4fJl.jpg"
          title="MakeityourM2U"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            MakeityourM2U
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            MakeityourM2U, a UI/UX design competition for Maybank’s mobile banking site was held from 1st until 27 February 2015. The competition is among students from 10 selected universities in Klang Valley.
            <br />
            Throughout the competition period, Maybank received more than 60 interesting designs from the students. On 9th April 2015, the top 10 designs stand before the judges to present their ideas and designs.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
