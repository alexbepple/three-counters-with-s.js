import * as React from 'react'
import {render} from 'react-dom'
import s from 's-js'
import * as r from 'ramda'

const signal = s.data(0)
const signalLens = r.lens(s => s(), (val, s) => s(val))
const over = r.over(signalLens)

const App = () => <div>
  <h2>Count: {signal()}</h2>
  <button onClick={() => over(r.inc, signal)}>+</button>
</div>

s.root(() => s.on(
  [signal],
  () => render(<App />, document.getElementById('root'))
))
