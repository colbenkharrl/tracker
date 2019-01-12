import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

export default class Settings extends Component {
  render() {
    return (
      <Paper className="App-page-paper">
        <Typography variant="h5" component="h3">
          Settings Page
        </Typography>
        <Typography component="p">
          This is a placeholder for the page for managing users, permissions,
          and projects.
        </Typography>
      </Paper>
    );
  }
}
