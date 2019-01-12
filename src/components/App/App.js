import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';

import NavigationBar from '../NavigationBar/NavigationBar';
// import NavigationDrawer from '../NavigationDrawer/NavigationDrawer';
import AppSwitch from '../AppSwitch/AppSwitch';
import { FormProvider } from '../FormContext/FormContext';

const styles = theme => ({
  content: {
    marginTop: 64,
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    minWidth: 0,
    padding: 5,
  },
});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#B5FFFD',
    },
    secondary: {
      main: '#FED766',
    },
  },
});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <FormProvider>
          <MuiThemeProvider theme={theme}>
            <div>
              <NavigationBar />
              {/* <NavigationDrawer /> */}
              <main className={classes.content}>
                <AppSwitch />
              </main>
            </div>
          </MuiThemeProvider>
        </FormProvider>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
