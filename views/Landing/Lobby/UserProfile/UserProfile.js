import React, { useState } from 'react'
import { Layout, Text, Avatar } from '@ui-kitten/components';
import styles from './userProfileStyle'
import LoggedIn from './LoggedIn/LoggedIn';
import LoggedOut from './LoggedOut/LoggedOut';


const UserProfile = () => {

    const [currentUser, setCurrentUser] = useState([])

    return (currentUser) ? <LoggedIn /> : <LoggedOut />
}

export default UserProfile