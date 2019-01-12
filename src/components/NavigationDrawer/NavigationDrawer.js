import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from '../AuthContext/AuthContext';
import { Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

import MenuList from '../MenuList/MenuList';

const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    width: 240,
  },
  toolbar: theme.mixins.toolbar,
});

class NavigationDrawer extends Component {
  state = {
    redirect: null,
  };

  render() {
    const { classes } = this.props;
    const { redirect } = this.state;

    if (redirect) {
      this.state.redirect = null;
      return <Redirect to={redirect} />;
    }

    return (
      <AuthContext.Consumer>
        {({ isAuth }) =>
          isAuth ? (
            <Drawer
              variant="permanent"
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <div className={classes.toolbar} />
              <MenuList />
            </Drawer>
          ) : null
        }
      </AuthContext.Consumer>
    );
  }
}

NavigationDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavigationDrawer);
