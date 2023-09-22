import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Heading from '../Heading';
import { Image } from 'expo-image';

const Routing = () => {
    return (
        <View
            style={{
                padding: 8,
            }}
        >
            <ScrollView>
                <Heading content={'What is Routing in Reactjs'} />
                <Text
                    style={{
                        paddingHorizontal: 8,
                        marginBottom: 8,
                    }}
                >
                    Routing in ReactJS allows you to create navigation and
                    handle different views or pages within a Single Page
                    Application (SPA). React doesn't include its own routing
                    mechanism out of the box, but there are several third-party
                    libraries that you can use to implement routing in your
                    React applications. One of the most popular routing
                    libraries is React Router. Below, I'll provide an overview
                    of how to set up routing using React Router.
                </Text>
                <Heading content={'Install React Router:'} />
                <View
                    style={{
                        width: '100%',
                        height: 100,
                        paddingHorizontal: 8,
                    }}
                >
                    <Image
                        source={require('../../assets/install.jpg')}
                        style={{
                            resizeMode: 'contain',
                            width: '100%',
                            height: '100%',
                        }}
                    />
                </View>
                <Heading content={'Set up Routing'} />
                <View
                    style={{
                        width: '100%',
                        height: 100,
                        paddingHorizontal: 8,
                    }}
                >
                    <Image
                        source={require('../../assets/import.jpg')}
                        style={{
                            resizeMode: 'contain',
                            width: '100%',
                            height: '100%',
                        }}
                    />
                </View>
                <View
                    style={{
                        width: '100%',
                        height: 100,
                        paddingHorizontal: 0,
                    }}
                >
                    <Image
                        source={require('../../assets/routing-wrapper.jpg')}
                        style={{
                            resizeMode: 'contain',
                            width: '100%',
                            height: '100%',
                        }}
                    />
                </View>
                <View
                    style={{
                        width: '100%',
                        height: 100,
                        paddingHorizontal: 0,
                        mb: 8,
                    }}
                >
                    <Image
                        source={require('../../assets/define-router.jpg')}
                        style={{
                            resizeMode: 'contain',
                            width: '100%',
                            height: '100%',
                        }}
                    />
                </View>
            </ScrollView>
        </View>
    );
};

export default Routing;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        flex: 1,
        width: '100%',
        backgroundColor: '#0553',
    },
});
