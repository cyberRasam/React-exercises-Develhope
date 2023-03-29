import React, { Component } from 'react'
import { LanguageContext } from './LanguageContext'

    const Strings = {
        en: {
            Current_lang: "english"
        },
        tr: {
            Current_lang: "Turkish"
        }
    }

export class DisplayLanguage extends Component {
    
    render() {
    return (
      <div>
        
        <LanguageContext.Consumer>
            {(language) => {
                return <div><h1>{Strings[language].Current_lang}</h1></div>
            }}
        </LanguageContext.Consumer>
      </div>
    )
  }
}

export default DisplayLanguage
