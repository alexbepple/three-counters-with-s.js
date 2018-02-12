import * as React from 'react'
import {render} from 'react-dom'
import s from 's-js'
import * as r from 'ramda'
import * as re from 'recompose'

const signalLens = r.lens(s => s(), (val, s) => s(val))
const over = r.over(signalLens)

const CounterPresentation = (props) => <div>
  <h2>Count: {props.value}</h2>
  <button onClick={props.onIncrement}>+</button>
</div>

const connect = mapOwnProps => re.compose(
  re.withProps(mapOwnProps),
  re.lifecycle({
    componentDidMount() {
      s(() => this.setState(mapOwnProps(this.props)))
    }
  })
)

const Counter = connect(own => ({
  value: own.signal(),
  onIncrement: () => over(r.inc, own.signal)
}))(CounterPresentation)

const s1 = s.data(0)
const s2 = s.data(1)
const App = () => <div>
  <Counter signal={s1} />
  <Counter signal={s2} />
  <Counter signal={s2} />
</div>

s.root(() =>
  render(<App />, document.getElementById('root'))
)
