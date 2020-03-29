import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightBold,
    color: '#315893',
  },
}));

const Header = props => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Typography className={classes.heading}>
      {props.title}
    </Typography>
  );
}


Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
