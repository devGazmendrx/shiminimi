import React from 'react'
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';
import PersonIcon from '../../../../ui/icons/PersonIcon';
import PlayIcon from '../../../../ui/icons/PlayIcon';

const BottomNavigationMenu = ({navigation, state}) => {
    return(
        <BottomNavigation selectedIndex={state.index} onSelect={index => navigation.navigate(state.routeNames[index])}>
            <BottomNavigationTab title='Profile' icon={PersonIcon}/>
            <BottomNavigationTab title='Play' icon={PlayIcon}/>
        </BottomNavigation>
    )
}

export default BottomNavigationMenu