import React, { Component } from 'react';

import DataTable from '../DataTable/DataTable';

import { withFormContext } from '../FormContext/withFormContext';
import generateDataRows from '../../scripts/entryBuilder';

class DataViewer extends Component {
  render() {
    const { forms, location } = this.props;
    const form = Object.values(forms).find(form => form.route === location.pathname).form;
    const rows = generateDataRows(form, 20);

    return <DataTable form={form} rows={rows} />;
  }
}

export default withFormContext(DataViewer);
