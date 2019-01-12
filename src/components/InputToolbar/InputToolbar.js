import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

const styles = {
  paper: {
    margin: 5,
    marginTop: 10,
    padding: 5,
    paddingTop: 8,
  },
  nameControl: {
    margin: 0,
    width: '100%',
  },
};

class InputToolbar extends Component {
  render() {
    const { classes, name, onName } = this.props;
    return (
      <Paper className={classes.paper}>
        <TextField
          id="form-name"
          label="Form Name"
          value={name}
          onChange={onName}
          className={classes.nameControl}
          margin="normal"
          variant="outlined"
        />
      </Paper>
    );
  }
}

export default withStyles(styles)(InputToolbar);
