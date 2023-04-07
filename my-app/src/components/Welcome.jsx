import React from 'react';
import { Age } from './Age';
import DisplayLanguage from './DisplayLanguage';


export default function Welcome(props) {
  return <div>
    {props.name && <h2>Welcome {props.name}</h2>}
    {!props.name && <h2>Welcome Guest</h2>}
  </div>
}

