import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomNavigationMenu from './BottomNavigationMenu/BottomNavigationMenu';
import UserProfile from './UserProfile/UserProfile';
import MatchHistory from './MatchHistory/MatchHistory';
import PlayScreen from './PlayScreen/PlayScreen';

const { Navigator, Screen } = createBottomTabNavigator();

const Lobby = () => {
    
    return (    
        <Navigator tabBar={props => <BottomNavigationMenu {...props} />}>
            <Screen name='Play' component={PlayScreen} />
            <Screen name='User' component={UserProfile}/>
            <Screen name='MatchHistory' component={MatchHistory}/>
        </Navigator>
    )
}

export default Lobby