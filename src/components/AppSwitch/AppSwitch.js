import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../Home/Home';
import FormBuilder from '../FormBuilder/FormBuilder';
import DataViewer from '../DataViewer/DataViewer';
import Settings from '../Settings/Settings';
import NotFound from '../NotFound/NotFound';
import LoginForm from '../LoginForm';
import { AuthContext } from '../AuthContext/AuthContext';
import { withFormContext } from '../FormContext/withFormContext';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <AuthContext.Consumer>
    {({ isAuth }) => (
      <Route
        {...rest}
        render={
          // props => <Component {...props} />
          props => (isAuth === true ? <Component {...props} /> : <Redirect to="/login" />)
        }
      />
    )}
  </AuthContext.Consumer>
);

class App extends Component {
  render() {
    const { forms } = this.props;
    return (
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute exact path="/forms" component={FormBuilder} />
        {Object.values(forms).map(fixture => (
          <PrivateRoute exact path={fixture.route} component={DataViewer} key={fixture.id} />
        ))}
        <PrivateRoute exact path="/view" component={DataViewer} />
        <PrivateRoute exact path="/settings" component={Settings} />
        <Route exact path="/login" component={LoginForm} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default withFormContext(App);
