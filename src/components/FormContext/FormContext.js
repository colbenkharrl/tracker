import React from 'react';

import fixtures from '../../scripts/fixtures';

export const FormContext = React.createContext();

export class FormProvider extends React.Component {
  state = {
    forms: fixtures,
  };

  createRouteName = name => {
    const { forms } = this.state;

    const routeName = '/' + name.toLowerCase().replace(/\W/g, '');

    const routes = Object.values(forms).map(f => f.route);
    let extension = '';
    let version = 1;
    while (routes.includes(routeName + extension)) {
      version += 1;
      extension = '-v-' + version;
    }
    return routeName + extension;
  };

  addForm = form => {
    const { forms } = this.state;

    if (forms[form.id]) {
      forms[form.id].form = form;
    } else {
      const fixture = {
        fixture: '',
        form,
        screenName: form.name,
        route: this.createRouteName(form.name),
        id: form.id,
      };

      forms[fixture.id] = fixture;
    }

    this.setState({ forms });
  };

  render() {
    const { forms } = this.state;
    const { addForm } = this;
    return (
      <FormContext.Provider
        value={{
          forms,
          addForm,
        }}
      >
        {this.props.children}
      </FormContext.Provider>
    );
  }
}
