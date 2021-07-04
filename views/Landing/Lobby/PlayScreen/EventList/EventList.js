import React from 'react'
import { StyleSheet } from 'react-native'
import { Layout, Divider , Button, Text, useTheme, Icon, Avatar, List, ListItem } from '@ui-kitten/components';
import AlertIcon from '../../../../../ui/icons/AlertIcon';
import useLanguage from '../../../../hooks/useLanguage';

const data = new Array(8).fill({
    title: 'Title for Item',
    description: 'Description for Item',
});

const eventList = data;
const temp_avatar_src = {uri: 'https://scontent.fskp1-1.fna.fbcdn.net/v/t1.6435-9/117444543_10223903824244892_1574607092153464339_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=A1GRlVjuMeAAX9LpmYM&_nc_ht=scontent.fskp1-1.fna&oh=edaee2222a4d5b5374afc0bd715814a1&oe=60E5576C'}

export default () => {

    const theme = useTheme()
    const lang = useLanguage('en')

    const renderSignUpButton = (props) => (
        <Button size='small'>{lang['sign-up-event-text'].toUpperCase()}</Button>
    );

    const renderUserAvatar = (props) => (
        <Avatar style={styles.avatar} size='small' source={temp_avatar_src}/>
    );

    const renderItem = ({ item, index }) => (
        <ListItem
            title={`${item.title} ${index + 1}`}
            description={`${item.description} ${index + 1}`}
            accessoryLeft={renderUserAvatar}
            accessoryRight={renderSignUpButton}
            style={{backgroundColor: '#fafafa'}}
        />
    );

    return (eventList.length > 0) ? 
        <List
            style={styles.container}
            data={data}
            renderItem={renderItem}
        /> :
        <Layout style={styles.layout} level='4'>
            <AlertIcon width={35} height={35} fill={theme['color-primary-default']}/>
            <Text style={styles.noEventsText}>{lang['no-events-found-text']}</Text>
        </Layout>
}

const styles = StyleSheet.create({
    container: {
        width:400,
        maxHeight:350,
    },
    layout:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        width:400,
        maxHeight:350
    },
    noEventsText:{
        fontFamily: 'Prompt-Light',
        fontSize: 20,
        margin: 15
    }
  });