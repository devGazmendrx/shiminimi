import React from 'react'
import { Layout, Text } from '@ui-kitten/components';
import createLobbyTabStyle from './createLobbyTabStyle';
import PlusIcon from '../../../../../ui/icons/PlusIcon';
import { TouchableHighlight } from 'react-native'

const CreateLobby = ({navigation}) => {
    return(
        <TouchableHighlight onPress={() => {navigation.navigate('CreateLobby')}} style={createLobbyTabStyle.backgroundTinted}>
            <Layout style={createLobbyTabStyle.backgroundTinted}>
                <PlusIcon width={35} height={35} fill={'white'}/>
                <Text style={createLobbyTabStyle.createLobbyText}>Create a Lobby</Text>
            </Layout>
        </TouchableHighlight>
    )
}

export default CreateLobby