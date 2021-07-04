import { useState, useEffect } from 'react'
import en from '../../ui/lang/en.json'
import sq from '../../ui/lang/sq.json'

const useLanguage = (languageParam = "en") => {

    const [lang, setCurrentLang] = useState(null);

    useEffect(() => {
        switch(languageParam){
            case "sq":
                setCurrentLang(sq)
                break;
            default:
                setCurrentLang(en)
                break;
        }
    }, [])

    return lang

}

export default useLanguage