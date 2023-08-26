import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import Heading from '../Heading';
import Subheading from '../Subheading';

const WhatIsReact = () => {
    return (
        <View
            style={{
                padding: 8,
                flex: 1,
            }}
        >
            <ScrollView>
                <View
                    style={{
                        padding: 8,
                        flexDirection: 'column',
                    }}
                >
                    <Heading content={'What is ReactJS'} />
                    <Subheading
                        content={
                            'Today, front-end frameworks and libraries are becoming an essential part of the modern web development stack. React.js is a front-end library that has gradually become the go-to framework for modern web development within the JavaScript community.'
                        }
                    />
                    <Heading content={'History of ReactJS Version'} />
                    <Subheading
                        content={[
                            'React 15.6',
                            'React 16.0',
                            'React 16.1',
                            'React 16.2',
                            'React 16.3',
                            'React 16.4',
                            'React 16.5',
                            'React 16.6',
                            'React 16.7',
                            'React 16.8',
                            'React 16.9',
                            'React 16.10',
                            'React 16.11',
                            'React 16.12',
                        ]}
                    />
                </View>
            </ScrollView>
        </View>
    );
};

export default WhatIsReact;
