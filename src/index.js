import * as React from 'react'
import {render} from 'react-dom'
import s from 's-js'
import * as r from 'ramda'

const signalLens = r.lens(s => s(), (val, s) => s(val))
const over = r.over(signalLens)

const CounterPresentation = (props) => <div>
  <h2>Count: {props.value}</h2>
  <button onClick={props.onIncrement}>+</button>
</div>

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value: props.signal()}
  }
  componentDidMount() {
    s(() => this.setState({value: this.props.signal()}))
  }
  render() {
    return <CounterPresentation value={this.state.value}
      onIncrement={() => over(r.inc, this.props.signal)} />
  }
}

const App = () => <div>
  <Counter signal={s.data(0)} />
  <Counter signal={s.data(1)} />
</div>

s.root(() =>
  render(<App />, document.getElementById('root'))
)
