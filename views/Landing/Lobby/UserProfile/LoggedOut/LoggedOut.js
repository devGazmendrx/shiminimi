import React from 'react'
import { Layout, Text, Avatar } from '@ui-kitten/components';
import styles from './loggedOutStyle'

const temp_avatar_src = {uri: 'https://media.istockphoto.com/vectors/missing-image-of-a-person-placeholder-vector-id1288129985?k=6&m=1288129985&s=612x612&w=0&h=V3wDE1mcLUtlaLUi4yeEp9civuxgB4RA60JehnQdaOY='}

export default () => {
    return(
        <Layout style={styles.container}>

            <Layout style={styles.layout} level='4'>
                <Avatar style={styles.avatar} size='giant' source={temp_avatar_src}/>
                <Text>You are not logged in!</Text>
            </Layout>
        
      </Layout>
    )
}