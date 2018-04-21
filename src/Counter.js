import * as React from 'react'

const CounterPresentation = ({ value, onIncrement }) => (
  <div>
    <h2>Count: {value}</h2>
    <button onClick={onIncrement}>+</button>
  </div>
)

export const Counter = ({ signal }) => (
  <CounterPresentation
    value={signal()}
    onIncrement={() => signal(signal() + 1)}
  />
)
