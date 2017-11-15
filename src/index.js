import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MangerApp from './containers/MangerApp'
import Login from './containers/Login'
import configureStore from './store/configureStore'

const store = configureStore()

const muiTheme = getMuiTheme({
})

render(
  <MuiThemeProvider theme={muiTheme}>
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path='/login' component={Login} />
        <Route path='/home' component={MangerApp} />
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
)
