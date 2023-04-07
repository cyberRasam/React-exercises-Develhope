import React, { Component, useContext } from 'react'
import { LanguageContext } from './LanguageContext'

export default function DisplayLanguage (){
   const language = useContext(LanguageContext)

    return (
      <div>
        <h1>{`Current Language is ${language}`}</h1>
      </div>
    )
  }

