import React from 'react'
import { Layout, Text } from '@ui-kitten/components';
import createLobbyStyle from './createLobbyStyle';
import PlusIcon from '../../../../../ui/icons/PlusIcon';
import { TouchableHighlight } from 'react-native'

const CreateLobby = () => {
    return(
        <TouchableHighlight onPress={() => {console.log(true)}} style={createLobbyStyle.backgroundTinted}>
            <Layout style={createLobbyStyle.backgroundTinted}>
                <PlusIcon width={35} height={35} fill={'white'}/>
                <Text style={createLobbyStyle.createLobbyText}>Create a Lobby</Text>
            </Layout>
        </TouchableHighlight>
    )
}

export default CreateLobby