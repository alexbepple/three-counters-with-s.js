import * as React from 'react'

export const Counter = ({ signal }) => (
  <div>
    <h2>Count: {signal()}</h2>
    <button onClick={() => signal(signal() + 1)}>+</button>
  </div>
)
