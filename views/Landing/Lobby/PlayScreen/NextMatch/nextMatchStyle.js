import { StyleSheet } from 'react-native'

const nextMatchStyle = StyleSheet.create({
    backgroundTinted:{
        flex:1,
        backgroundColor: '#00cbcc',
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
    },
    nextMatchText:{
        color: 'white',
        fontFamily: 'Prompt-Medium',
        fontSize: 20,
        marginTop: 10
    },
    nextMatchTextOther:{
        color: 'white',
        fontFamily: 'Prompt-MediumItalic',
        fontSize: 15
    }
  });

export default nextMatchStyle