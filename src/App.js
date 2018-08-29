import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#232323',
    },
    secondary: {
      main: '#999999',
    },
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <div>
            <Navbar />
            <div className="App">
              <Route exact path='/' component={Home} />
            </div>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
