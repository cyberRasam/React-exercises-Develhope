import React, { Component, useState } from 'react';
import CounterButton from './CounterButton';

export const ClickCounter = () => {
  const [count, setCount] = useState(0)
  function handleCounter() {
    setCount (count + 1)
  }
    return (
      <div>
        <h1>{count}</h1>
        <CounterButton onClick= {handleCounter}/>
      </div>
    );
}

export default ClickCounter;
