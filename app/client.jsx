import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { browserHistory, Router, Route, IndexRoute, Redirect } from 'react-router'
import { syncReduxAndRouter } from 'redux-simple-router'
import configureStore from './store/configureStore'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import routes from './routes.jsx'
injectTapEventPlugin()


// const store = configureStore();//配置store
// const history = createBrowserHistory();

// syncReduxAndRouter(history, store);

render(
  <MuiThemeProvider>
    <Router history={browserHistory}>
      {routes}
    </Router>
  </MuiThemeProvider>, document.getElementById('app'));
