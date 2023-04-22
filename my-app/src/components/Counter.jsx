import React, { useCallback, useEffect, useState } from 'react';
import { CounterDisplay } from './CounterDisplay';
import { useCounter } from './useCounter';


export const Counter = ({initialValue = 0}) => {
  
  const [count, increment, decrement, reset] = useCounter(initialValue);

  
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment} >Increment</button>
      <button onClick={decrement} >Decrement</button>
      <button onClick={reset} >Reset</button>
    </div>
  )
}