import React, { useState } from 'react'
import NextMatchScheduled from './NextMatchScheduled/NextMatchScheduled';
import NextMatchNotScheduled from './NextMatchNotScheduled/NextMatchNotScheduled';

const NextMatch = ({ navigation }) => {

    const [nextMatch, setNextMatch] = useState([1])

    return(
        (nextMatch.length > 0 ) ? <NextMatchScheduled navigation={navigation} /> : <NextMatchNotScheduled navigation={navigation} />
    )
}

export default NextMatch