import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SettingsIcon from '@material-ui/icons/Settings';
import BuilderIcon from '@material-ui/icons/Build';
import FormIcon from '@material-ui/icons/DataUsage';
import Typography from '@material-ui/core/Typography';
import { withFormContext } from '../FormContext/withFormContext';

const styles = theme => ({
  list: {
    padding: 0,
  },
  sectionTitle: {
    marginLeft: 10,
  },
  item: {
    padding: 0,
    margin: 10,
  },
  itemLabel: {
    padding: 0,
  },
});

class NavigationDrawer extends Component {
  state = {
    redirect: null,
  };

  push = route => {
    this.setState({ redirect: route });
  };

  render() {
    const { push } = this;
    const { forms, onClose, classes } = this.props;
    const { redirect } = this.state;

    if (redirect) {
      this.state.redirect = null;
      onClose();
      return <Redirect to={redirect} />;
    }

    return (
      <Fragment>
        <List className={classes.list}>
          <Typography variant="caption" className={classes.sectionTitle}>
            MANAGE FORMS
          </Typography>
          <ListItem button onClick={() => push('/forms')} className={classes.item}>
            <ListItemIcon>
              <BuilderIcon />
            </ListItemIcon>
            <ListItemText primary="Form Builder" className={classes.itemLabel} />
          </ListItem>
          <Typography variant="caption" className={classes.sectionTitle}>
            YOUR FORMS
          </Typography>
          {Object.values(forms).map((fixture, i) => (
            <ListItem key={i} button onClick={() => push(fixture.route)} className={classes.item}>
              <ListItemIcon>
                <FormIcon />
              </ListItemIcon>
              <ListItemText primary={fixture.screenName} className={classes.itemLabel} />
            </ListItem>
          ))}
          <Typography variant="caption" className={classes.sectionTitle}>
            ADMIN
          </Typography>
          <ListItem button onClick={() => push('/settings')} className={classes.item}>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" className={classes.itemLabel} />
          </ListItem>
        </List>
      </Fragment>
    );
  }
}

NavigationDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  forms: PropTypes.object.isRequired,
};

export default withStyles(styles)(withFormContext(NavigationDrawer));
