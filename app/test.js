import React from 'react'
import { render } from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import Main from './components/test/test'

injectTapEventPlugin()

render(
      <div>
        <Main/>
      </div>, document.getElementById('app'));
