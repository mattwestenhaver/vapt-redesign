import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#ffffff',
    },
  }
});

class NavbarMenu extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      anchorEl: null,
    };
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
        <div>
          <MuiThemeProvider theme={theme}>
            <Button color='primary' aria-owns={anchorEl ? 'simple-menu' : null} aria-haspopup="true" onClick={this.handleClick} >
              Menu
              <KeyboardArrowDownIcon />
            </Button>
          </MuiThemeProvider>
          <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.handleClose} menuStyle={{width: '300px'}} autoWidth={false} >
            <MenuItem component={Link} to='/' onClick={this.handleClose}>Home</MenuItem>
            <MenuItem component={Link} to='/videos' onClick={this.handleClose}>Videos</MenuItem>
            <MenuItem component={Link} to='/services' onClick={this.handleClose}>Services</MenuItem>
            <MenuItem component={Link} to='/press' onClick={this.handleClose}>Press</MenuItem>
            <MenuItem component={Link} to='/team' onClick={this.handleClose}>Team</MenuItem>
            <MenuItem component={Link} to='/contact' onClick={this.handleClose}>Contact</MenuItem>
          </Menu>
        </div>
    );
  }
}

export default NavbarMenu;