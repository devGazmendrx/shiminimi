import React from 'react'
import { Layout, Text, Avatar } from '@ui-kitten/components';
import styles from './loggedInStyle'
import StatsBar from './StatsBar/StatsBar';

const temp_avatar_src = {uri: 'https://scontent.fskp1-1.fna.fbcdn.net/v/t1.6435-9/117444543_10223903824244892_1574607092153464339_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=A1GRlVjuMeAAX9LpmYM&_nc_ht=scontent.fskp1-1.fna&oh=edaee2222a4d5b5374afc0bd715814a1&oe=60E5576C'}

export default () => {
    return(
        <Layout style={styles.container}>

            <Layout style={styles.layout} level='4'>
                <Avatar style={styles.avatar} size='giant' source={temp_avatar_src}/>
                <Text style={styles.defaultText}>Gazmend Redzepi</Text>
            </Layout>

            <Layout style={styles.layout} level='4'>
                <StatsBar />
            </Layout>
        
            <Layout style={styles.layout} level='4'>
                <Text>View recent history</Text>
            </Layout>

      </Layout>
    )
}