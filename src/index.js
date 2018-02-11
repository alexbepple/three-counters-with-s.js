import * as React from 'react'
import {render} from 'react-dom'
import s from 's-js'

const signal = s.data(0)

const App = () => <h2>Count: {signal()}</h2>

s.root(() => s.on(
  [signal],
  () => render(<App />, document.getElementById('root'))
))

setTimeout(() => signal(1), 1000)
