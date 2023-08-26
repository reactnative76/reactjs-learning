import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
const Heading = ({ content }) => {
    return (
        <View
            style={{
                fontWeight: 'bold',
                backgroundColor: 'lightgray',
                padding: 8,
                marginBottom: 20,
            }}
        >
            <Text
                style={{
                    fontWeight: 'bold',
                }}
            >
                {content}
            </Text>
        </View>
    );
};

export default Heading;
