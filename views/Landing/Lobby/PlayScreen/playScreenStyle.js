import { StyleSheet } from 'react-native'

const playScreenStyle = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
    },
    layout: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    nextMatchBkg:{
        flex:1,
        alignSelf: 'stretch',
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems:'center'
    }
  });

export default playScreenStyle