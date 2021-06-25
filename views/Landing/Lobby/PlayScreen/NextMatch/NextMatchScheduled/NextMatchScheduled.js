import React, { useState } from 'react'
import { Layout, Text } from '@ui-kitten/components';
import nextMatchStyle from '../nextMatchStyle';
import CalendarIcon from '../../../../../../ui/icons/CalendarIcon';
import { TouchableHighlight } from 'react-native'

const NextMatchScheduled = ({ navigation }) => {
    return(
        <TouchableHighlight onPress={() => {navigation.navigate('NextMatchDetails')}} style={nextMatchStyle.backgroundTinted}>
            <Layout style={nextMatchStyle.backgroundTinted}>
                <CalendarIcon width={35} height={35} fill={'white'}/>         
                <Text style={nextMatchStyle.nextMatchText}>Next match on 25/06/2021 @18:00 </Text>
                <Text style={nextMatchStyle.nextMatchTextOther}>(+9 others coming)</Text>
            </Layout>
        </TouchableHighlight>

    )
}

export default NextMatchScheduled