import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

const style = {
  display: 'inline-block',
  margin: '16px 32px 16px 0',
};

const MangerApp = ({ store }) => (
  <Provider store={store}>
    <div>
      <Paper style={style}>
        <Menu>
          <MenuItem primaryText="Maps" />
          <MenuItem primaryText="Books" />
          <MenuItem primaryText="Flights" />
          <MenuItem primaryText="Apps" />
        </Menu>
      </Paper>
    </div>
  </Provider>
)

MangerApp.propTypes = {
  store: PropTypes.object.isRequired,
}

export default MangerApp
