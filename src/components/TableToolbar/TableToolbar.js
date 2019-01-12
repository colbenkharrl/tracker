import React, { Fragment } from 'react';
import {
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Menu,
  MenuItem,
  TextField,
  Toolbar,
  Tooltip,
  withStyles,
} from '@material-ui/core';
import { lighten } from '@material-ui/core/styles/colorManipulator';
import classNames from 'classnames';
import { CsvBuilder } from 'filefy';
import PropTypes from 'prop-types';
/* eslint-enable no-unused-vars */

class TableToolbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columnsButtonAnchorEl: null,
      exportButtonAnchorEl: null,
    };
  }

  exportCsv = () => {
    const columns = this.props.columns.filter(columnDef => {
      return !columnDef.hidden && columnDef.field;
    });

    const data = this.props.renderData.map(rowData =>
      columns.map(columnDef => rowData[columnDef.field])
    );

    // eslint-disable-next-line no-unused-vars
    const builder = new CsvBuilder((this.props.title || 'data') + '.csv')
      .setDelimeter(this.props.exportDelimiter)
      .setColumns(columns.map(columnDef => columnDef.title))
      .addRows(data)
      .exportFile();

    this.setState({ exportButtonAnchorEl: null });
  };

  renderSearch() {
    const { search, searchText, onSearchChanged } = this.props;
    const localization = { ...TableToolbar.defaultProps.localization, ...this.props.localization };
    if (search) {
      return (
        <TextField
          value={searchText}
          onChange={event => onSearchChanged(event.target.value)}
          color="inherit"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Tooltip title={localization.searchTooltip}>
                  <this.props.icons.Search color="inherit" />
                </Tooltip>
              </InputAdornment>
            ),
          }}
        />
      );
    } else {
      return null;
    }
  }

  renderDefaultActions() {
    const {
      classes,
      columnsButton,
      columns,
      onColumnsChanged,
      exportButton,
      components,
      actions,
      icons,
    } = this.props;
    const localization = { ...TableToolbar.defaultProps.localization, ...this.props.localization };
    return (
      <Fragment>
        {this.renderSearch()}
        <div className={classes.spacer} />
        {columnsButton && (
          <span>
            <Tooltip title={localization.showColumnsTitle}>
              <IconButton
                color="inherit"
                onClick={event => this.setState({ columnsButtonAnchorEl: event.currentTarget })}
                aria-label={localization.showColumnsAriaLabel}
              >
                <icons.ViewColumn />
              </IconButton>
            </Tooltip>
            <Menu
              anchorEl={this.state.columnsButtonAnchorEl}
              open={Boolean(this.state.columnsButtonAnchorEl)}
              onClose={() => this.setState({ columnsButtonAnchorEl: null })}
            >
              {columns.map((col, index) => {
                return (
                  <MenuItem key={col.tableData.id}>
                    <FormControlLabel
                      label={col.title}
                      control={
                        <Checkbox
                          checked={!col.hidden}
                          onChange={(event, checked) => {
                            const { columns } = this.props;
                            columns[index].hidden = !checked;
                            onColumnsChanged(columns);
                          }}
                        />
                      }
                    />
                  </MenuItem>
                );
              })}
            </Menu>
          </span>
        )}
        {exportButton && (
          <span>
            <Tooltip title={localization.exportTitle}>
              <IconButton
                color="inherit"
                onClick={event => this.setState({ exportButtonAnchorEl: event.currentTarget })}
                aria-label={localization.exportAriaLabel}
              >
                <icons.Export />
              </IconButton>
            </Tooltip>
            <Menu
              anchorEl={this.state.exportButtonAnchorEl}
              open={Boolean(this.state.exportButtonAnchorEl)}
              onClose={() => this.setState({ exportButtonAnchorEl: null })}
            >
              <MenuItem key="export-csv" onClick={this.exportCsv}>
                {localization.exportName}
              </MenuItem>
            </Menu>
          </span>
        )}
        <components.Actions actions={actions && actions.filter(a => a.isFreeAction)} />
      </Fragment>
    );
  }

  renderSelectedActions() {
    return (
      <React.Fragment>
        {this.renderSearch()}
        <this.props.components.Actions
          actions={this.props.actions.filter(a => !a.isFreeAction)}
          data={this.props.selectedRows}
        />
      </React.Fragment>
    );
  }

  renderActions() {
    const { classes } = this.props;
    return (
      <div className={classes.flexContainer}>
        {this.props.selectedRows && this.props.selectedRows.length > 0
          ? this.renderSelectedActions()
          : this.renderDefaultActions()}
      </div>
    );
  }

  render() {
    const { classes } = this.props;

    return (
      <Toolbar
        className={classNames(classes.root, {
          [classes.highlight]: this.props.selectedRows && this.props.selectedRows.length > 0,
        })}
      >
        <div className={classes.actions}>{this.renderActions()}</div>
      </Toolbar>
    );
  }
}

TableToolbar.defaultProps = {
  actions: [],
  columns: [],
  columnsButton: false,
  localization: {
    nRowsSelected: '{0} row(s) selected',
    showColumnsTitle: 'Show Columns',
    showColumnsAriaLabel: 'Show Columns',
    exportTitle: 'Export',
    exportAriaLabel: 'Export',
    exportName: 'Export as CSV',
    searchTooltip: 'Search',
  },
  search: true,
  searchText: '',
  selectedRows: [],
  title: 'No Title!',
};

TableToolbar.propTypes = {
  actions: PropTypes.array,
  columns: PropTypes.array,
  columnsButton: PropTypes.bool,
  localization: PropTypes.object.isRequired,
  onColumnsChanged: PropTypes.func.isRequired,
  onSearchChanged: PropTypes.func.isRequired,
  search: PropTypes.bool.isRequired,
  searchText: PropTypes.string.isRequired,
  selectedRows: PropTypes.array,
  title: PropTypes.string.isRequired,
  renderData: PropTypes.array,
  exportButton: PropTypes.bool,
  exportDelimiter: PropTypes.string,
  classes: PropTypes.object,
};

const styles = theme => ({
  flexContainer: { display: 'flex' },
  root: {},
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  actions: {
    color: theme.palette.text.secondary,
    width: '100%',
  },
  search: {
    alignSelf: 'right',
  },
  spacer: {
    flexGrow: 1,
  },
});

export default withStyles(styles)(TableToolbar);
