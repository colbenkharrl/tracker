import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import { SCHEMAS, INPUT_TYPES } from '../NewFormPopup/inputSchemas';
import { Typography } from '@material-ui/core';

const styles = {
  dialog: {
    margin: 5,
    padding: 15,
  },
  title: {
    padding: 0,
  },
  contentContainer: {
    padding: 0,
  },
  formControl: {
    margin: 0,
    width: '100%',
  },
  textField: {
    margin: 0,
    width: '100%',
  },
  optionsInput: {
    width: '100%',
    margin: 0,
  },
  actions: {
    margin: 0,
  },
  errorMessage: {
    color: 'red',
  },
};

class NewInputDialog extends Component {
  state = {
    name: '',
    type: '',
    options: '',
    required: false,
    errors: null,
  };

  componentDidUpdate(prevProps) {
    const { open, input } = this.props;
    if (!prevProps.open && open) {
      if (input) {
        const copy = JSON.parse(JSON.stringify(input));
        copy.options = Array.isArray(input.options) ? input.options.join(', ') : '';
        this.setState(copy);
      }
    }
  }

  resetState = () => {
    this.setState({
      name: '',
      type: '',
      options: '',
      required: false,
      errors: null,
    });
  };

  hasOptions = () => {
    const { type } = this.state;
    let hasOptions = false;
    Object.keys(SCHEMAS).forEach(schema => {
      if (schema === type && SCHEMAS[schema].options) {
        hasOptions = true;
      }
    });
    return hasOptions;
  };

  handleTypeChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleValueChange = name => event => {
    this.setState({ [name]: event.currentTarget.value });
  };

  handleToggleChange = name => () => {
    this.setState({
      [name]: !this.state[name],
    });
  };

  handleSubmit = () => {
    // copy state
    const newInput = JSON.parse(JSON.stringify(this.state));
    if (newInput.options.trim() !== '') {
      newInput.options = newInput.options.split(',').map(option => option.trim());
    }
    const errors = this.getInputErrors(newInput);
    if (errors) {
      this.setState({ errors });
    } else {
      this.props.handleAdd(newInput);
      this.resetState();
    }
  };

  handleCancel = () => {
    this.props.handleCancel();
    this.resetState();
  };

  getInputErrors = input => {
    const { name, type, options } = input;
    if (!name || name.trim() === '') {
      return 'No name provided, please name your input.';
    }
    if (!type || type.trim() === '') {
      return 'No type provided, please choose an input type.';
    }
    if (SCHEMAS[type].options && (!options || !options.length)) {
      return 'No options provided, please add options to your ' + INPUT_TYPES[type] + '.';
    }
    return null;
  };

  render() {
    const { open, classes } = this.props;
    const { name, type, options, required, errors } = this.state;
    return (
      <Dialog
        open={open}
        onClose={this.handleCancel}
        maxWidth="lg"
        fullWidth
        aria-labelledby="input-dialog-title"
        PaperProps={{ className: classes.dialog }}
      >
        <DialogTitle id="input-dialog-title" className={classes.title}>
          New Input
        </DialogTitle>
        <DialogContent className={classes.contentContainer}>
          <TextField
            id="name"
            label="Input Name"
            margin="none"
            fullWidth
            value={name}
            onChange={this.handleValueChange('name')}
          />

          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age-helper">Input Type</InputLabel>
            <Select
              value={type}
              onChange={this.handleTypeChange('type')}
              input={<Input name="input-type" id="input-type" />}
            >
              <MenuItem value="" key="none">
                None
              </MenuItem>
              {Object.keys(INPUT_TYPES).map((type, i) => {
                return (
                  <MenuItem value={type} key={i}>
                    {INPUT_TYPES[type]}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>

          {this.hasOptions() ? (
            <TextField
              id="options-multiline"
              label="Options"
              multiline
              rowsMax="4"
              value={options}
              onChange={this.handleValueChange('options')}
              margin="none"
              fullWidth
              margin="normal"
            />
          ) : null}

          <FormControlLabel
            control={
              <Checkbox
                checked={required}
                onChange={this.handleToggleChange('required')}
                value="required"
                color="primary"
              />
            }
            label="Required"
          />
          {errors ? (
            <Typography variant="body1" className={classes.errorMessage}>
              Error: {errors}
            </Typography>
          ) : null}
        </DialogContent>
        <DialogActions className={classes.actions}>
          <Button
            variant="contained"
            onClick={this.handleCancel}
            color="default"
            size="small"
            className={classes.button}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={this.resetState}
            color="default"
            size="small"
            className={classes.button}
          >
            Clear
          </Button>
          <Button
            variant="contained"
            size="small"
            onClick={this.handleSubmit}
            color="primary"
            className={classes.button}
          >
            Add Input
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default withStyles(styles)(NewInputDialog);
