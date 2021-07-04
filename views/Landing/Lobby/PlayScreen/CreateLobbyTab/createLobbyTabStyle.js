import { StyleSheet } from 'react-native'

const createLobbyTabStyle = StyleSheet.create({
    backgroundTinted:{
        flex:1,
        backgroundColor: '#00b2cc',
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
    },
    createLobbyText:{
        color: 'white',
        fontFamily: 'Prompt-Medium',
        fontSize: 20,
        marginTop: 10
    },
  });

export default createLobbyTabStyle