import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

const BookMarksScreen = () => {
    const [bookmarkedItems, setBookmarkedItems] = React.useState([]);

    useFocusEffect(() => {
        const viewItems = async () => {
            const existingItems = await AsyncStorage.getItem('BookmarkedItem');
            const tempArr = [...JSON.parse(existingItems)];
            setBookmarkedItems([...tempArr]);
        };

        viewItems();
    });

    return (
        <View style={styles.container}>
            <Text>Bookmarks screen</Text>
            {bookmarkedItems && (
                <View>
                    {bookmarkedItems?.map((item, index) => {
                        return <Text key={index}>{item}</Text>;
                    })}
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default BookMarksScreen;
