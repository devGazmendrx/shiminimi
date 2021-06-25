import React, { useState } from 'react'
import { Layout, Text } from '@ui-kitten/components';
import nextMatchStyle from '../nextMatchStyle';
import CalendarIcon from '../../../../../../ui/icons/CalendarIcon';
import { TouchableHighlight } from 'react-native'

const NextMatchNotScheduled = ({ navigation }) => {
    return(
        <TouchableHighlight onPress={() => {console.log(true)}} style={nextMatchStyle.backgroundTinted}>
            <Layout style={nextMatchStyle.backgroundTinted}>
                <CalendarIcon width={35} height={35} fill={'white'}/>         
                <Text style={nextMatchStyle.nextMatchText}>You are not signed up for any matches!</Text>
                <Text style={nextMatchStyle.nextMatchTextOther}>(Create your own match or join one!)</Text>
            </Layout>
        </TouchableHighlight>
    )
}

export default NextMatchNotScheduled