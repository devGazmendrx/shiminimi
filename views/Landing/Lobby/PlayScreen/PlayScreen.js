import React from 'react'
import { StyleSheet } from 'react-native'
import { Layout, Divider , Button, Text, useTheme } from '@ui-kitten/components';
import CalendarIcon from '../../../../ui/icons/CalendarIcon';
import useLanguage from '../../../hooks/useLanguage';
import EventList
 from './EventList/EventList';
const PlayScreen = ({ navigation }) => {

    const theme = useTheme()
    const lang = useLanguage('en')
    

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          flexDirection: 'column',
        },
        layout: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
        button:{
            margin:2,
            width:400
        },
        divider:{
            width:400,
            margin:8,
            backgroundColor: theme['color-primary-default']
        },
        orText:{
            fontFamily: 'Prompt-Light',
            fontSize: 20
        },
        publicEventText:{
            fontFamily: 'Prompt-Medium',
            fontSize: 20,
            margin:10
        }
      });

    return(
        <Layout style={styles.container}>

            <Layout style={styles.layout} level='4'>
                <Button style={styles.button} status='primary' accessoryLeft={CalendarIcon}>
                    {lang['create-event-text']}
                </Button>

                <Divider style={styles.divider} />

                <Text style={styles.orText}>OR</Text>

                <Text style={styles.publicEventText}>Join a public event near you</Text>

                <EventList />
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