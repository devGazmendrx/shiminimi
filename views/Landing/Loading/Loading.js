import React from 'react';
import { Layout, Spinner, Divider } from '@ui-kitten/components';
import landingStyle from '../landingStyle';

const Loading = () => {
    
    return (    
        <Layout style={landingStyle.container}>
            <Layout style={landingStyle.layout} level="1">
                <Spinner size='giant'/>
                <Divider/>
            </Layout>
        </Layout>
    )
}

export default Loading