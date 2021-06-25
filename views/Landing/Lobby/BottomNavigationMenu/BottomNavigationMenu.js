import React from 'react'
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';
import PersonIcon from '../../../../ui/icons/PersonIcon';
import ListIcon from '../../../../ui/icons/ListIcon';
import PlayIcon from '../../../../ui/icons/PlayIcon';

const BottomNavigationMenu = ({navigation, state}) => {
    return(
        <BottomNavigation selectedIndex={state.index} onSelect={index => navigation.navigate(state.routeNames[index])}>
            <BottomNavigationTab title='Play' icon={PlayIcon}/>
            <BottomNavigationTab title='Profile' icon={PersonIcon}/>
            <BottomNavigationTab title='History' icon={ListIcon}/>
        </BottomNavigation>
    )
}

export default BottomNavigationMenu