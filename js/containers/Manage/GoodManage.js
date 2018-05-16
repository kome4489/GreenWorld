import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class GoodManage extends Component {
  render() {
    function createTableBodyRows() {
      const tableRows = [];
      const datas = [
        { type: 'aaa', category: 'bbb' },
      ];
      datas.map((row, index) => {
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
    return (
      <div>
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
              {createTableBodyRows()}
            </TableBody>
          </Table>
        </div>
        <RaisedButton
          onClick={() => this.handleSaveChange()}
          label="はい"
        />
        <RaisedButton
          onClick={() => this.handleSaveChange()}
          label="いいえ"
        />
      </div>
    );
  }
}

export default GoodManage;
