import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import Hidden from '@material-ui/core/Hidden';
import NavbarMenu from './menu.jsx'

import whiteLogo from '../../images/virtualapt-logo.png'

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  }
};

function Navbar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.flex}>
            <img src={whiteLogo} alt='VirtualAPT White Logo' className='navbar-logo'/>
          </Typography>
          <Hidden smDown>
            <Button component={Link} to='/' color="inherit">Home</Button>
            <Button component={Link} to='/videos' color="inherit">Videos</Button>
            <Button component={Link} to='/services' color="inherit">Services</Button>
            <Button component={Link} to='/press' color="inherit">Press</Button>
            <Button component={Link} to='/team' color="inherit">Team</Button>
            <Button component={Link} to='/contact' color="inherit">Contact</Button>
          </Hidden>
          <Hidden mdUp>
            <NavbarMenu />
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);