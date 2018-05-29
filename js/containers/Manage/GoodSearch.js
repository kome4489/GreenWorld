import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
// import { v1 as uuidv1 } from 'uuid';
import * as queryActions from '../../actions/query';
import css from '../../../style/body.css';

class GoodSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goodListItems: [],
      datas: [],
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSearch = this.handleOnSearch.bind(this);
    this.createTableBodyRows = this.createTableBodyRows.bind(this);
  }
  handleOnChange(value, type) {
    if (type === 'familyName') {
      this.setState({ familyName: value });
    } else if (type === 'formName') {
      this.setState({ formName: value });
    }

    this.props.queryActions.onChange(value, type);
  }
  handleOnSearch() {
    this.props.queryActions.goodSearch({}, 'https://us-central1-weather-e382e.cloudfunctions.net/searchDataTest', 'GET');
  }

  createTableBodyRows() {
    const tableRows = [];
    this.props.datas.map((row, index) => {
      tableRows.push(<TableRow
        key={index}
      >
        <TableRowColumn>
          {row.goodName}
        </TableRowColumn>
        <TableRowColumn>
          {row.familyName}
        </TableRowColumn>
        <TableRowColumn>
          {row.formName}
        </TableRowColumn>
      </TableRow>,
      );
      return tableRows;
    });
    return tableRows;
  }

  render() {
    return (
      <div className={css.body}>
        <div>
          <TextField
            hintText={'Family Name'}
            floatingLabelText={'科名'}
            value={this.state.familyName}
            onChange={(value, nextValue) => this.handleOnChange(nextValue, 'familyName')}
          />
          <TextField
            hintText={'Form Name'}
            floatingLabelText={'形態'}
            value={this.state.formName}
            onChange={(value, nextValue) => this.handleOnChange(nextValue, 'formName')}
          />

        </div>
        <div>
          <RaisedButton
            onClick={() => this.handleOnSearch()}
            label="検索"
            primary={this.props.primaryButton}
          />
        </div>
        <div>
          <Table>
            <TableHeader
              displaySelectAll={false}
              adjustForCheckbox={false}
            >
              <TableRow>
                <TableHeaderColumn>
                  品名
                </TableHeaderColumn>
                <TableHeaderColumn>
                  科名
                </TableHeaderColumn>
                <TableHeaderColumn>
                  形態
                </TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
              {this.createTableBodyRows()}
            </TableBody>
          </Table>
        </div>
      </div>
    );
  }
}

GoodSearch.defaultProps = {
  primaryButton: true,
};

GoodSearch.propTypes = {
  primaryButton: PropTypes.boolean,
  queryActions: PropTypes.objectOf(PropTypes.func),
  datas: PropTypes.arrayOf(PropTypes.object),
};

function mapStateToProps(state) {
  return {
    datas: state.query.results.datas,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    queryActions: bindActionCreators(queryActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GoodSearch);
