import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Heading from '../Heading';

const Spa = () => {
    return (
        <View
            style={{
                padding: 8,
            }}
        >
            <Heading
                content={'This is related to react single page application'}
            />
        </View>
    );
};

export default Spa;
