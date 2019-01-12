import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

export default class Home extends Component {
  render() {
    return (
      <Paper className="App-page-paper">
        <Typography variant="h5" component="h3">
          Home Page
        </Typography>
        <Typography component="p">
          This is a placeholder for content on the home page.
        </Typography>
      </Paper>
    );
  }
}
