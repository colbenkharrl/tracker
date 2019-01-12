import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';

const styles = {
  menuIcon: {
    marginRight: 10,
  },
};

class NavigationUser extends Component {
  state = {
    anchorEl: null,
  };

  componentDidMount() {}

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleSignout = () => {
    this.props.signout();
    this.handleClose();
  };

  render() {
    const { classes, username } = this.props;
    const { anchorEl } = this.state;
    const open = !!anchorEl;
    return (
      <Fragment>
        <IconButton
          aria-owns={open ? 'menu-appbar' : null}
          aria-haspopup="true"
          onClick={this.handleMenu}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={open}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>
            <AccountCircle className={classes.menuIcon} />
            {username}
          </MenuItem>
          <Divider />
          <MenuItem onClick={this.handleSignout}>
            <Lock className={classes.menuIcon} />
            Sign Out
          </MenuItem>
        </Menu>
      </Fragment>
    );
  }
}

export default withStyles(styles)(NavigationUser);
