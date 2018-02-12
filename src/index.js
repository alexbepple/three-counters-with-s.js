import * as React from 'react'
import {render} from 'react-dom'
import s from 's-js'

const signal = s.data(0)

const App = () => <div>
  <h2>Count: {signal()}</h2>
  <button onClick={() => signal(signal() + 1)}>+</button>
</div>

s.root(() => s.on(
  [signal],
  () => render(<App />, document.getElementById('root'))
))
