import React from 'react'
import { render } from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import Main from './components/Search/Search'

injectTapEventPlugin()

render(
      <div>
        <Main/>
      </div>, document.getElementById('app'));
