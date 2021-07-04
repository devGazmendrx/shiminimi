import React from 'react'
import { Layout, Text } from '@ui-kitten/components';
import joinLobbyTabStyle from './joinLobbyTabStyle';
import PlayIcon from '../../../../../ui/icons/PlayIcon';
import { TouchableHighlight } from 'react-native'

const JoinLobby = () => {
    return(
        <TouchableHighlight onPress={() => {console.log(true)}} style={joinLobbyTabStyle.backgroundTinted}>
            <Layout style={joinLobbyTabStyle.backgroundTinted}>
                <PlayIcon width={35} height={35} fill={'white'}/>
                <Text style={joinLobbyTabStyle.joinLobbyText}>Join a Lobby</Text>
            </Layout>
        </TouchableHighlight>
    )
}

export default JoinLobby