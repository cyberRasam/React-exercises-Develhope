import React, { useState } from 'react';
import Welcome from './Welcome'
import { LanguageContext } from './LanguageContext';

export default function App() {

  const [language, setLanguage] = useState('en')
  

function handleLangChange  (event)  {
  const lang = event.target.value
    setLanguage(lang)    
}

    return (
      <div>
        <select value={language} onChange={handleLangChange}>
          <option value="English">English</option>
          <option value="Turkish">Turkish</option>
        </select>

        <LanguageContext.Provider value={language}>
          <Welcome>

          </Welcome>
        </LanguageContext.Provider>
      </div>
    );
}

