import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';

import MenuList from '../MenuList/MenuList';

const styles = {
  menu: {
    padding: 0,
  },
};

class NavigationMenu extends Component {
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

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    return (
      <div>
        <IconButton
          aria-owns={open ? 'menu-appbar' : null}
          aria-haspopup="true"
          onClick={this.handleMenu}
          color="inherit"
        >
          <MenuIcon />
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
          <MenuList onClose={this.handleClose} className={classes.menu} />
        </Menu>
      </div>
    );
  }
}

export default withStyles(styles)(NavigationMenu);
