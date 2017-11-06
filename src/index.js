import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Root from './containers/Root'
import configureStore from './store/configureStore'

const store = configureStore()

const muiTheme = getMuiTheme({
})

render(
  <MuiThemeProvider theme={muiTheme}>
    <Router>
      <Root store={store} />
    </Router>
  </MuiThemeProvider>,
  document.getElementById('root')
)
