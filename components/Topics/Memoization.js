import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Heading from '../Heading';
import Subheading from '../Subheading';

const Memoization = () => {
    return (
        <View
            style={{
                padding: 8,
            }}
        >
            <ScrollView>
                <Heading content={'What is Memoization in Reactjs'} />
                <Text
                    style={{
                        paddingHorizontal: 8,
                    }}
                >
                    Memoization is a performance optimization technique used in
                    ReactJS to improve the rendering efficiency of functional
                    components. It involves caching the results of expensive
                    function calls and reusing those cached results when the
                    same inputs occur again. In the context of React,
                    memoization is often used to prevent unnecessary re-renders
                    of functional components.
                </Text>
                <Subheading
                    content={[
                        'Defining a Memoized Component:The React.memo() function accepts a functional component as its argument and returns a new memoized component. This memoized component will only re-render when its props have changed.',
                        'Props Comparison:When a memoized component receives new props, React compares the new props with the previous ones. If the props have not changed (based on a shallow comparison), React reuses the previously rendered result and skips the rendering of the component.',
                    ]}
                />
            </ScrollView>
        </View>
    );
};

export default Memoization;
