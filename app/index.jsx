import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import injectTapEventPlugin from 'react-tap-event-plugin'
import App from './containers/App'
injectTapEventPlugin()


const store = configureStore();//配置store

render(
    <Provider store={store}>
      <App/>
    </Provider>, document.getElementById('app'))
