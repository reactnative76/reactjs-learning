import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import FontistoIcons from 'react-native-vector-icons/Fontisto';

const ContactScreen = () => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../assets/menu-bg.jpeg')}
                style={{ padding: 0, height: 200, position: 'relative' }}
            ></ImageBackground>
            <View
                style={{
                    position: 'absolute',
                    top: 150,
                    left: '35%',
                }}
            >
                <Image
                    source={require('../assets/user-profile.jpg')}
                    style={{
                        height: 120,
                        width: 120,
                        borderRadius: 80,
                    }}
                />
            </View>
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Text
                    style={{
                        fontWeight: '500',
                        fontSize: 32,
                    }}
                >
                    Timber Wolves
                </Text>
                <View
                    style={{
                        marginVertical: 40,
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}
                    >
                        <FontistoIcons name="email" size={22} />
                        <Text
                            style={{
                                marginLeft: 4,
                                fontWeight: '500',
                                fontSize: 16,
                            }}
                        >
                            reactnative76@gmail.com
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default ContactScreen;
