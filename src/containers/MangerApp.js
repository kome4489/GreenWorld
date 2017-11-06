import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import SvgIcon from 'material-ui/SvgIcon';

const MangerApp = ({ store }) => (
  <Provider store={store}>
    <div>
      <SvgIcon>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    </div>
  </Provider>
)

MangerApp.propTypes = {
  store: PropTypes.object.isRequired,
}

export default MangerApp
