import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Heading from '../Heading';

const Virtualdom = () => {
    return (
        <View
            style={{
                padding: 8,
            }}
        >
            <Heading content={'This is related to virtual dom'} />
        </View>
    );
};

export default Virtualdom;
