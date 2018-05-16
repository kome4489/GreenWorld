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
import * as actions from '../../actions/app';
import * as queryActions from '../../actions/query';
import css from '../../../style/body.css';

class GoodSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input_1: '',
      input_2: '',
      datas: [
        {
          goodName: '菊',
          familyName: '種類1',
          formName: 'カテゴリ1',
        },
        {
          goodName: '竹',
          familyName: '種類2',
          formName: 'カテゴリ2',
        },
        {
          goodName: '梅',
          familyName: '種類3',
          formName: 'カテゴリ3',
        },
        {
          goodName: '松',
          familyName: '種類3',
          formName: 'カテゴリ3',
        },
      ],
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

    this.props.actions.onChange(value, type);
  }
  handleOnSearch() {
    const body = {
      familyName: this.state.familyName,
      formName: this.state.formName,
    };

    const url = '';
    this.props.queryActions.goodSearch(body, 1, url);
  }
  createTableBodyRows() {
    const tableRows = [];
    this.state.datas.map((row, index) => {
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
  actions: PropTypes.objectOf(PropTypes.func),
  queryActions: PropTypes.objectOf(PropTypes.func),
};

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
    queryActions: bindActionCreators(queryActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GoodSearch);
