import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import configureStore from './js/store/configureStore';
import App from './js/containers/App';

injectTapEventPlugin();

const store = configureStore();
const rootElement = document.getElementById('root');

const muiTheme = getMuiTheme({
  palette: {
  },
});

render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  rootElement,
);
