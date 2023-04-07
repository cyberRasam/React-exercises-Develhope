import React, { useState } from 'react';
import Welcome from './Welcome'
import { LanguageContext } from './LanguageContext';
import { Counter } from './Counter';
import { Route, Routes } from 'react-router-dom';

export default function App() {

  const [language, setLanguage] = useState('English')
  

function handleLangChange  (event)  {
  const lang = event.target.value
    setLanguage(lang)    
}

    return (
      // <div>
      //   <select value={language} onChange={handleLangChange}>
      //     <option value="English">English</option>
      //     <option value="Turkish">Turkish</option>
      //   </select>

      //   <LanguageContext.Provider value={language}>
      //     <Welcome />
      //   </LanguageContext.Provider>

      //   <Counter initialValue={42} />

      // </div>
      
      <div>
        <Routes>
          <Route path='/' element={<Welcome name={`Rasam`}/>} />
        </Routes>
      </div>
    );
}

