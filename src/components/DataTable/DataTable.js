import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import MaterialTable from 'material-table';
import TableToolbar from '../TableToolbar/TableToolbar';

const styles = theme => ({
  title: {
    padding: 8,
    marginBottom: 10,
  },
  root: {
    width: '100%',
  },
  table: {
    minWidth: 1020,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
});

class DataTable extends React.Component {
  onSelectChange = selectionArray => {
    console.log(selectionArray);
  };

  render() {
    const { classes, form, rows } = this.props;

    const inputs = form.inputs;

    return (
      <Fragment>
        <Paper className={classes.title}>
          <Typography variant="h6">{form.name} </Typography>
        </Paper>
        <Paper className={classes.root}>
          <MaterialTable
            columns={inputs.map(input => ({ title: input.name, field: input.name }))}
            data={rows}
            onSelectionChange={this.onSelectChange}
            options={{
              columnsButton: true,
              exportButton: true,
              selection: true,
              paging: false,
            }}
            color="primary"
            components={{
              Toolbar: props => <TableToolbar {...props} />,
            }}
          />
        </Paper>
      </Fragment>
    );
  }
}

DataTable.propTypes = {
  classes: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  rows: PropTypes.array.isRequired,
};

export default withStyles(styles)(DataTable);
