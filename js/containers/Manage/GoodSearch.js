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
      name: '',
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSearch = this.handleOnSearch.bind(this);
    this.createTableBodyRows = this.createTableBodyRows.bind(this);
  }
  handleOnChange(value, type) {
    this.setState({ name: value });

    this.props.queryActions.onChange(value, type);
  }
  handleOnSearch() {
    const body = {
      name: this.state.name,
    };
    this.props.queryActions.goodSearch(body, 'http://www.silvereye.work/api/plant/search', 'POST');
  }

  createTableBodyRows() {
    const tableRows = [];
    this.props.datas.map((row, index) => {
      tableRows.push(<TableRow
        key={index}
      >
        <TableRowColumn>
          {row.name}
        </TableRowColumn>
        <TableRowColumn>
          {row.family}
        </TableRowColumn>
        <TableRowColumn>
          {row.form}
        </TableRowColumn>
        <TableRowColumn>
          {row.path}
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
            hintText={'Plant Name'}
            floatingLabelText={'植物名'}
            value={this.state.name}
            onChange={(value, nextValue) => this.handleOnChange(nextValue, 'name')}
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
                <TableHeaderColumn>
                  パス
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
