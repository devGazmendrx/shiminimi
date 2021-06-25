import React, { useState }from 'react';
import Lobby from './Lobby/Lobby';
import Loading from './Loading/Loading';

const Landing = () => {

    const [isLoading, setIsLoading] = useState(true)
    setTimeout(() => {
        setIsLoading(false)
    }, 3500)

    return (
        (isLoading) ? <Loading /> : <Lobby />
    )
}

export default Landing