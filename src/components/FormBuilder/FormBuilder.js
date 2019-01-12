import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import NewFormPopup from '../NewFormPopup/NewFormPopup';
import { withFormContext } from '../FormContext/withFormContext';

const styles = {
  createButton: {
    height: 45,
    margin: 0,
    marginTop: 10,
  },
  formList: {
    margin: 0,
    padding: 0,
  },
};

class FormBuilder extends Component {
  state = {
    open: false,
    forms: [],
    selectedFormID: null,
  };

  componentDidMount() {
    this.loadFormsFromFixtures();
  }

  componentDidUpdate(prev) {
    if (this.props.forms !== prev.forms) {
      this.loadFormsFromFixtures();
    }
  }

  loadFormsFromFixtures = () => {
    const { forms } = this.props;
    this.setState({ forms: Object.values(forms).map(f => f.form) });
  };

  handleNewFormClick = event => {
    this.setState({ open: true });
  };

  handleFormOpen = formId => event => {
    event.preventDefault();
    this.setState({
      open: true,
      selectedFormID: formId,
    });
  };

  handleClose = form => {
    const { addForm } = this.props;
    if (form) {
      addForm(form);
    }
    this.setState({ open: false, selectedFormID: null });
  };

  renderFormList = () => {
    const { forms } = this.props;
    const extractedForms = Object.values(forms).map(f => f.form);
    return extractedForms.length ? (
      extractedForms.map((form, index) => {
        return (
          <div key={index}>
            {index > 0 ? <Divider /> : null}
            <ListItem button>
              <ListItemText primary={form.name} onClick={this.handleFormOpen(form.id)} />
            </ListItem>
          </div>
        );
      })
    ) : (
      <ListItem>
        <ListItemText primary="No forms added." />
      </ListItem>
    );
  };

  render() {
    const { classes } = this.props;
    const { open, forms, selectedFormID } = this.state;
    const selectedForm = forms.find(form => form.id === selectedFormID);
    return (
      <Fragment>
        <Paper>
          <List className={classes.formList}>{this.renderFormList()}</List>
        </Paper>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={this.handleNewFormClick}
          className={classes.createButton}
        >
          Create New Form
        </Button>

        <NewFormPopup
          open={open}
          onClose={this.handleClose}
          form={selectedForm}
          className={classes.createButton}
        />
      </Fragment>
    );
  }
}

export default withStyles(styles)(withFormContext(FormBuilder));
