import React, { useState } from 'react';
import Welcome from './Welcome'
import { LanguageContext } from './LanguageContext';
import { Counter } from './Counter';
import { Link, Route, Routes } from 'react-router-dom';
import { ShowGithubUSer } from './ShowGithubUser';
import {GithubUser} from './GithubUser';
import { NotFound } from './NotFound';
import GithubUserList from './GithubUserList'


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
          <Route path='/counter' element={<Counter />} ></Route>
          <Route path='/users' element={<GithubUserList/>}>
            <Route path=':username' element={<GithubUser/>} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
        <br />
        <Link to={"/"}>Home  </Link> 
        <br />
        <Link to={"/counter"}>Counter  </Link> 
        <br />
        <Link to={"/users"}>My Github</Link>
        
      </div>
    );
}

