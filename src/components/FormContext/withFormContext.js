import React from 'react';

import { FormContext } from './FormContext';

export function withFormContext(Component) {
  return class withFormContext extends React.Component {
    render() {
      return (
        <FormContext.Consumer>
          {props => <Component {...this.props} {...props} />}
        </FormContext.Consumer>
      );
    }
  };
}
