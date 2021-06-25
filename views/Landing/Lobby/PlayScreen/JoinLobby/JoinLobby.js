import React from 'react'
import { Layout, Text } from '@ui-kitten/components';
import joinLobbyStyle from './joinLobbyStyle';
import PlayIcon from '../../../../../ui/icons/PlayIcon';
import { TouchableHighlight } from 'react-native'

const JoinLobby = () => {
    return(
        <TouchableHighlight onPress={() => {console.log(true)}} style={joinLobbyStyle.backgroundTinted}>
            <Layout style={joinLobbyStyle.backgroundTinted}>
                <PlayIcon width={35} height={35} fill={'white'}/>
                <Text style={joinLobbyStyle.joinLobbyText}>Join a Lobby</Text>
            </Layout>
        </TouchableHighlight>
    )
}

export default JoinLobby