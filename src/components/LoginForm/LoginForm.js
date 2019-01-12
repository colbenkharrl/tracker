import React from 'react';
import { Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  loginPaper: {
    padding: 10,
    margin: 0,
  },
  loginField: {
    margin: '5px 0px',
  },
  loginButton: {
    marginTop: 10,
  },
  errorText: {
    color: '#3f51b5',
    fontWeight: '500',
  },
});

/**
 * Displays a sign in form
 * Validate form for email and password > 6 chars
 */
class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: null,
      redirect: false,
    };
  }

  /**
   *
   * Regex check on email input
   * Password must be greater than 8
   * Email AND Password checks must be true
   * returns formErrors
   */

  isFormValid() {
    const { email, password } = this.state;
    let formErrors;
    let regex = new RegExp('^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$', 'ig');
    let validEmail = regex.test(email);
    let validPass = password.length > 7;
    let validForm = validEmail && validPass;
    if (!validForm) {
      if (!validEmail) {
        formErrors = 'Please enter a valid email address. \n';
        this.setState({ errors: formErrors });
      } else if (!validPass) {
        formErrors = 'Password must be at least 8 characters.';
        this.setState({ errors: formErrors });
      }
    }
    return formErrors;
  }

  resetState = () => {
    this.setState({
      email: '',
      password: '',
      errors: null,
    });
  };

  /**
   * Update state properties on change
   */
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  /**
   * On submit log form submission to console.
   * Suppress query string and reset form.
   */
  onSubmit = e => {
    const { email } = this.state;
    e.preventDefault();
    const errors = this.isFormValid();
    if (errors) {
      this.setState({ errors });
    } else {
      this.props.authenticate(email);
      this.resetState();
      this.setState({ redirect: true });
    }
  };

  /**
   * Render component and disable Login button until
   * form is valid.
   */
  render() {
    const { errors, redirect } = this.state;
    const { classes } = this.props;
    let message = null;

    if (redirect) {
      return <Redirect to="/" />;
    }

    // conditional messages displayed on errors/sign in at bottom of component
    if (errors) {
      message = (
        <Typography className={classes.errorText} variant="body1">
          {errors}
        </Typography>
      );
    } else if (this.props.isAuth) {
      message = (
        <Typography className={classes.errorText} variant="body1">
          Signed In
        </Typography>
      );
    } else {
      //do nothing
    }
    return (
      <div>
        <Paper className={classes.loginPaper}>
          <form className={classes.form}>
            <TextField
              autoFocus
              className={classes.loginField}
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={e => this.handleChange(e)}
              fullWidth
            />
            <br />
            <TextField
              className={classes.loginField}
              name="password"
              placeholder="Password"
              type="password"
              value={this.state.password}
              onChange={e => this.handleChange(e)}
              fullWidth
            />
            {message}
          </form>
        </Paper>
        <Button
          className={classes.loginButton}
          variant="contained"
          color="primary"
          onClick={this.onSubmit}
          fullWidth
        >
          Sign in
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(LoginForm);
