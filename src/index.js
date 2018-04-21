import * as React from 'react'
import { render } from 'react-dom'
import s from 's-js'
import { Counter } from './Counter'

const s1 = s.data(0)
const s2 = s.data(1)
const App = () => (
  <div>
    <h1>Independent counter</h1>
    <Counter signal={s1} />
    <h1>Linked counters</h1>
    <Counter signal={s2} />
    <Counter signal={s2} />
  </div>
)

s.root(() =>
  s.on([s1, s2], () => render(<App />, document.getElementById('root')))
)
