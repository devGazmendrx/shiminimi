import React from 'react'
import {StyleSheet} from 'react-native'
import { Layout, Text , useTheme } from '@ui-kitten/components';
import StarIcon from '../../../../../../ui/icons/StarIcon';
import AwardIcon from '../../../../../../ui/icons/AwardIcon';
import CalendarIcon from '../../../../../../ui/icons/CalendarIcon';
import useLanguage from '../../../../../hooks/useLanguage';

export default () => {

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
        spointsTab:{
            flex:1,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            borderColor: theme['color-primary-default'],
            borderWidth: 0.3,
            borderStyle: "solid",
            borderRadius: 0.3,
            width:400
        },
        spointsIcon:{
            width:35,
            height:35,
            margin:10
        },
        spointsText: {
            fontFamily: 'Prompt-Medium',
            fontSize: 18,
            margin:10
        },
        spointsTabTextRight: {
            flex:1,
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
        },
        spointsTextRight:{
            fontFamily: 'Prompt-Medium',
            fontSize: 18,
            margin:10,
        }
      });

    return (
        <Layout style={styles.container}>
            <Layout style={styles.layout} level='4'>
                <Layout style={styles.spointsTab} level='4'>
                    <StarIcon style={styles.spointsIcon} fill={theme['color-primary-default']}/>
                    <Text style={styles.spointsText}>{lang["s-points"]}</Text>
                    <Layout style={styles.spointsTabTextRight} level='4'>
                        <Text style={styles.spointsTextRight}>1337</Text>
                    </Layout>
                </Layout>
                <Layout style={styles.spointsTab} level='4'>
                    <CalendarIcon style={styles.spointsIcon} fill={theme['color-primary-default']}/>
                    <Text style={styles.spointsText}>{lang["hosted-events"]}</Text>
                    <Layout style={styles.spointsTabTextRight} level='4'>
                        <Text style={styles.spointsTextRight}>150</Text>
                    </Layout>
                </Layout>
                <Layout style={styles.spointsTab} level='4'>
                    <AwardIcon style={styles.spointsIcon} fill={theme['color-primary-default']}/>
                    <Text style={styles.spointsText}>{lang["participated-events"]}</Text>
                    <Layout style={styles.spointsTabTextRight} level='4'>
                        <Text style={styles.spointsTextRight}>39</Text>
                    </Layout>
                </Layout>
            </Layout>
      </Layout>
    )


}