import React, { Component, Fragment } from 'react';
import { APP_NAME } from '../../constants.js';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Redirect } from 'react-router-dom';

import NavigationMenu from '../NavigationMenu/NavigationMenu';
import NavigaionUser from '../NavigationUser';
import { AuthContext } from '../AuthContext/AuthContext.js';

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: theme.zIndex.drawer + 1,
  },
  toolbar: {
    padding: '0px 10px',
  },
  grow: {
    flexGrow: 1,
    cursor: 'pointer',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  logo: {
    height: 40,
    marginRight: 15,
    cursor: 'pointer',
  },
});

class NavigationBar extends Component {
  state = {
    auth: true,
    redirect: null,
  };

  handleChange = event => {
    this.setState({ auth: event.target.checked });
  };

  clickHome = event => {
    this.setState({ redirect: '/' });
  };

  render() {
    const { classes } = this.props;
    const { auth, redirect } = this.state;

    if (redirect) {
      this.state.redirect = null;
      return <Redirect to={redirect} />;
    }

    return (
      <AuthContext.Consumer>
        {({ isAuth }) => (
          <AppBar position="absolute" className={classes.root}>
            <Toolbar className={classes.toolbar}>
              {isAuth && <NavigationMenu />}
              <Typography
                variant="h6"
                color="inherit"
                className={classes.grow}
                onClick={this.clickHome}
              >
                {APP_NAME}
              </Typography>
              {isAuth && <NavigaionUser />}
            </Toolbar>
          </AppBar>
        )}
      </AuthContext.Consumer>
    );
  }
}

NavigationBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavigationBar);
