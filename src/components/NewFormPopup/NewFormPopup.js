import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

import NewInputDialog from '../NewInputDialog/NewInputDialog';
import InputToolbar from '../InputToolbar/InputToolbar';

import { SCHEMAS, INPUT_TYPES } from './inputSchemas';

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
  paper: {
    margin: 5,
    marginTop: 15,
  },
  sectionTitle: {
    margin: '15px auto 0px 15px',
  },
  errorText: {
    color: '#FFFFFF',
  },
  createButton: {
    height: 45,
    margin: 0,
    marginBottom: 10,
  },
  noSpacing: {
    margin: 0,
    padding: 0,
  },
});

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class NewFormPopup extends Component {
  state = {
    name: '',
    inputs: [],
    inputDialogOpen: false,
    errors: null,
    selectedInputIndex: null,
    id: null,
  };

  componentDidUpdate(prevProps) {
    const { open, form } = this.props;
    if (!prevProps.open && open) {
      if (form) {
        this.setState(form);
      }
    }
  }

  resetState = () => {
    this.setState({
      name: '',
      inputs: [],
      inputDialogOpen: false,
      errors: null,
      selectedInputIndex: null,
      id: null,
    });
  };

  handleNameInput = event => {
    this.setState({
      name: event.currentTarget.value,
    });
  };

  handleOpenInputDialog = () => {
    this.setState({ inputDialogOpen: true });
  };

  handleInputCancel = () => {
    this.setState({ inputDialogOpen: false, selectedInputIndex: null });
  };

  handleInputAdd = input => {
    const { inputs, selectedInputIndex } = this.state;
    if (selectedInputIndex !== null) {
      inputs[selectedInputIndex] = input;
    } else {
      inputs.push(input);
    }
    this.setState({ inputDialogOpen: false, selectedInputIndex: null, inputs });
  };

  handleInputClick = index => event => {
    this.setState({ inputDialogOpen: true, selectedInputIndex: index });
  };

  handleCancel = () => {
    this.props.onClose();
    this.resetState();
  };

  handleCreate = () => {
    const { name, inputs, id } = this.state;
    const newForm = JSON.parse(
      JSON.stringify({
        name,
        inputs,
        id: id || Date.now(),
      })
    );
    const errors = this.getInputErrors(newForm);
    if (errors) {
      this.setState({ errors });
    } else {
      this.props.onClose(newForm);
      this.resetState();
    }
  };

  getInputErrors = form => {
    const { name, inputs } = form;
    if (!name || name.trim() === '') {
      return 'No name provided, please name your form.';
    }
    if (!inputs || !inputs.length) {
      return 'No inputs provided, please add an input to your form.';
    }
    return null;
  };

  buildSecondaryString = input => {
    const type = INPUT_TYPES[input.type];
    const options = SCHEMAS[input.type].options ? ', ' + input.options.length + ' Options' : '';
    const attributes = Object.keys(input).reduce((acc, current) => {
      if (typeof input[current] === 'boolean' && input[current]) {
        return (acc += ', ' + current);
      } else {
        return acc;
      }
    }, '');
    return type + options + attributes;
  };

  renderInputList = () => {
    const { inputs } = this.state;
    const { classes } = this.props;
    return inputs.length ? (
      inputs.map((input, index) => {
        return (
          <div key={index}>
            {index > 0 ? <Divider /> : null}
            <ListItem button onClick={this.handleInputClick(index)}>
              <ListItemText primary={input.name} secondary={this.buildSecondaryString(input)} />
            </ListItem>
          </div>
        );
      })
    ) : (
      <ListItem>
        <ListItemText className={classes.noInputs} primary="No inputs added." />
      </ListItem>
    );
  };

  render() {
    const { inputDialogOpen, name, errors, inputs, selectedInputIndex } = this.state;
    const { open, classes } = this.props;

    const selectedInput = selectedInputIndex !== null ? inputs[selectedInputIndex] : null;

    return (
      <div>
        <Dialog
          fullScreen
          open={open}
          onClose={this.handleCancel}
          TransitionComponent={Transition}
          scroll="paper"
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton color="inherit" onClick={this.handleCancel} aria-label="Close">
                <CloseIcon />
              </IconButton>
              <Typography variant="title" color="inherit" className={classes.flex}>
                New Form
              </Typography>
              {errors ? (
                <Typography variant="body1" className={classes.errorText}>
                  {errors}
                </Typography>
              ) : null}
              <Button color="inherit" onClick={this.handleCreate}>
                Create
              </Button>
            </Toolbar>
          </AppBar>
          <DialogContent className={classes.noSpacing}>
            <InputToolbar name={name} onName={this.handleNameInput} />
            <Paper className={classes.paper}>
              <List className={classes.noSpacing}>{this.renderInputList()}</List>
            </Paper>
            <div className={classes.paper}>
              <Button
                color="primary"
                onClick={this.handleOpenInputDialog}
                variant="contained"
                className={classes.createButton}
                fullWidth
              >
                Add Form Input
              </Button>
            </div>
          </DialogContent>
        </Dialog>
        <NewInputDialog
          open={inputDialogOpen}
          handleCancel={this.handleInputCancel}
          handleAdd={this.handleInputAdd}
          input={selectedInput}
        />
      </div>
    );
  }
}

export default withStyles(styles)(NewFormPopup);
