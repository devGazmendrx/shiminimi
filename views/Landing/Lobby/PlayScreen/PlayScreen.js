import React from 'react'
import { Layout, Text } from '@ui-kitten/components';
import NextMatch from './NextMatch/NextMatch';
import CreateLobbyTab from './CreateLobbyTab/CreateLobbyTab';
import playScreenStyle from './playScreenStyle';
import JoinLobbyTab from './JoinLobbyTab/JoinLobbyTab';
import Profile from './Profile/Profile';


const PlayScreen = ({ navigation }) => {

    return(
        <Layout style={playScreenStyle.container}>

            <Layout style={playScreenStyle.layout} level='4'>
                <Profile />
            </Layout>
        
    
            {/* <Layout style={playScreenStyle.layout} level='4'>
                <CreateLobbyTab navigation={navigation} />
            </Layout>
        
            <Layout style={playScreenStyle.layout} level='2'>
                <JoinLobbyTab />
            </Layout> */}
        
      </Layout>
    )
}

export default PlayScreen