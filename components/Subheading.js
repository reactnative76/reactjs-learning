import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { List } from 'react-native-paper';
const Subheading = ({ content }) => {
    return (
        <View
            style={{
                fontWeight: 'bold',
                padding: 8,
                marginBottom: 20,
            }}
        >
            {!Array.isArray(content) && (
                <Text
                    style={{
                        fontWeight: '400',
                    }}
                >
                    {content}
                </Text>
            )}
            {Array.isArray(content) && (
                <View>
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                        {content?.map((item) => {
                            return (
                                <List.Item
                                    key={item}
                                    title={item}
                                    left={(props) => (
                                        <List.Icon {...props} icon="folder" />
                                    )}
                                    titleNumberOfLines={10}
                                />
                            );
                        })}
                    </ScrollView>
                </View>
            )}
        </View>
    );
};

export default Subheading;
