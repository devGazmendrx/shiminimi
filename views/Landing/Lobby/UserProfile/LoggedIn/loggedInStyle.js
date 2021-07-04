import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      
    },
    layout: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    defaultText: {
        fontFamily: 'Prompt-Medium',
        fontSize: 20
    },
    avatar:{
        margin:10,
        width:100,
        height:100
    }
  });