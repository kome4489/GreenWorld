import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MangerApp from './containers/MangerApp'
import configureStore from './store/configureStore'

const store = configureStore()

const muiTheme = getMuiTheme({
})

render(
  <MuiThemeProvider theme={muiTheme}>
    <Provider store={store}>
      <MangerApp />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
)
