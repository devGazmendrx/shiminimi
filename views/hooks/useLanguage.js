import { useState, useEffect } from 'react'
import en from '../../ui/lang/en.json'
import sq from '../../ui/lang/sq.json'

const useLanguage = (languageParam = "en") => {

    switch(languageParam){
        case "sq":
            return sq
            break
        default:
            return en
    }
}

export default useLanguage