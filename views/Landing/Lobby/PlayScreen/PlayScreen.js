import React from 'react'
import { Layout, Text } from '@ui-kitten/components';
import NextMatch from './NextMatch/NextMatch';
import CreateLobby from './CreateLobby/CreateLobby';
import playScreenStyle from './playScreenStyle';
import JoinLobby from './JoinLobby/JoinLobby';


const PlayScreen = ({ navigation }) => {

    return(
        <Layout style={playScreenStyle.container}>

            <Layout style={playScreenStyle.layout} level='4'>
                <NextMatch navigation={navigation} />
            </Layout>
        
    
            <Layout style={playScreenStyle.layout} level='4'>
                <CreateLobby />
            </Layout>
        
            <Layout style={playScreenStyle.layout} level='2'>
                <JoinLobby />
            </Layout>
        
      </Layout>
    )
}

export default PlayScreen