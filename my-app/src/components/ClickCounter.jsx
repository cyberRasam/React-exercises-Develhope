import React, { Component, useEffect, useState } from 'react';
import CounterButton from './CounterButton';

export const ClickCounter = () => {
  const [count, setCount] = useState(0)
  function handleCounter() {
    setCount (count + 1)
  
  }
  function onCounterChange(){
    console.log(`current counter is ${count}`)
  }
  useEffect(()=>{
    onCounterChange()
  },[count])
    return (
      <div>
        <h1>{count}</h1>
        <CounterButton onClick= {handleCounter}/>
      </div>
    );
}

export default ClickCounter;
