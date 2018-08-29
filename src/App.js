import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Navbar from './components/navbar/Navbar'
import Home from './components/home'
import Videos from './components/videos'
import Services from './components/services'
import Press from './components/press'
import Team from './components/team'
import Contact from './components/contact';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#232323',
    },
    secondary: {
      main: '#ffffff',
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
              <Route path='/videos' component={Videos} />
              <Route path='/services' component={Services} />
              <Route path='/press' component={Press} />
              <Route path='/team' component={Team} />
              <Route path='/contact' component={Contact} />
            </div>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
