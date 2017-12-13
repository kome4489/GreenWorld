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
import * as actions from '../actions/app';
import css from '../../style/body.css';

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input_1: '',
      input_2: '',
      datas: [
        {
          type: '種類1',
          category: 'カテゴリ1',
        },
        {
          type: '種類2',
          category: 'カテゴリ2',
        },
        {
          type: '種類3',
          category: 'カテゴリ3',
        },
      ],
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSaveChange = this.handleSaveChange.bind(this);
    this.createTableBodyRows = this.createTableBodyRows.bind(this);
  }
  handleOnChange(value, index) {
    if (index === 1) {
      this.setState({ input_1: value });
    } else {
      this.setState({ input_2: value });
    }
  }
  handleSaveChange() {
    this.props.actions.saveChange(this.state.input_1, this.state.input_2);
  }
  createTableBodyRows() {
    const tableRows = [];
    this.state.datas.map((row, index) => {
      tableRows.push(<TableRow
        key={index}
      >
        <TableRowColumn>
          {row.type}
        </TableRowColumn>
        <TableRowColumn>
          {row.category}
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
            hintText={'入力1'}
            value={this.state.input_1}
            onChange={(value, nextValue) => this.handleOnChange(nextValue, 1)}
          />
          <TextField
            hintText={'入力2'}
            value={this.state.input_2}
            onChange={(value, nextValue) => this.handleOnChange(nextValue, 2)}
          />
          <RaisedButton
            onClick={() => this.handleSaveChange()}
            label="はい"
          />
          <div>
            {`prevList:${this.props.prevList}`}
          </div>
          <div>
            {`nextList:${this.props.nextList}`}
          </div>
        </div>
        <div>
          <Table>
            <TableHeader
              displaySelectAll={false}
              adjustForCheckbox={false}
            >
              <TableRow>
                <TableHeaderColumn>
                  種類
                </TableHeaderColumn>
                <TableHeaderColumn>
                  カテゴリ
                </TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
              {this.createTableBodyRows()}
            </TableBody>
          </Table>
        </div>
        {this.props.aaa}
      </div>
    );
  }
}

Body.defaultProps = {
  aaa: '',
};

Body.propTypes = {
  aaa: PropTypes.string,
  actions: PropTypes.objectOf(PropTypes.func),
  prevList: PropTypes.arrayOf(PropTypes.string),
  nextList: PropTypes.arrayOf(PropTypes.string),
};

function mapStateToProps(state) {
  return {
    aaa: state.app.aaa,
    prevList: state.app.prevList,
    nextList: state.app.nextList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Body);
