import React from 'react';
import { Age } from './Age';
import DisplayLanguage from './DisplayLanguage';


export default function Welcome({name = "Rasam"}) {
  return <div>
    {name && <h2>Welcome {name}</h2>}
    {!name && <h2>Welcome Guest</h2>}
  </div>
}

