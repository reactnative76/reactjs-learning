import React from 'react';
import { StyleSheet, Text, View, Pressable, ToastAndroid } from 'react-native';
import { Topics } from '../utils/topics';
import { Button } from 'react-native-paper';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import WhatIsReact from '../components/Topics/WhatIsReact';
import Virtualdom from '../components/Topics/Virtualdom';
import ReactAdvantages from '../components/Topics/ReactAdvantages';
import Spa from '../components/Topics/Spa';

const TopicsScreen = ({ navigation }) => {
    const [selectedTopic, setSelectedTopic] = React.useState(null);
    const [pageIncrement, setPageIncrement] = React.useState(0);
    const [topicsLength] = React.useState(4);
    const [isBookmarked, setIsBookmarked] = React.useState(false);

    React.useEffect(() => {
        setSelectedTopic(pageIncrement);
    }, [pageIncrement]);

    React.useEffect(() => {
        const validateBookmark = async () => {
            const existingItems = await AsyncStorage.getItem('BookmarkedItem');

            let itemsArr = [];

            if (existingItems) {
                itemsArr = [...JSON.parse(existingItems)];
                if (itemsArr?.includes(Topics[pageIncrement]?.question)) {
                    setIsBookmarked(true);
                }
                if (!itemsArr?.includes(Topics[pageIncrement]?.question)) {
                    setIsBookmarked(false);
                }
            } else {
                setIsBookmarked(false);
            }
        };

        validateBookmark();

        navigation.setOptions({
            headerRight: () => (
                <Pressable
                    style={{
                        marginRight: 12,
                    }}
                    onPress={async () => {
                        const existingItems = await AsyncStorage.getItem(
                            'BookmarkedItem'
                        );
                        let itemsArr = [];

                        if (!existingItems) {
                            setIsBookmarked(true);
                            itemsArr.push(Topics[pageIncrement]?.question);
                            ToastAndroid.show(
                                'Topic added in the favourite list',
                                ToastAndroid.SHORT
                            );
                            await AsyncStorage.setItem(
                                'BookmarkedItem',
                                JSON.stringify(itemsArr)
                            );
                        }

                        if (existingItems) {
                            itemsArr = await AsyncStorage.getItem(
                                'BookmarkedItem'
                            );
                            let tempArr = [...JSON.parse(itemsArr)];

                            if (
                                tempArr?.includes(
                                    Topics[pageIncrement]?.question
                                )
                            ) {
                                setIsBookmarked(false);
                                tempArr = tempArr.filter(
                                    (val) =>
                                        val !== Topics[pageIncrement]?.question
                                );
                                ToastAndroid.show(
                                    'Topic removed from the favourite list',
                                    ToastAndroid.SHORT
                                );
                            } else {
                                setIsBookmarked(true);
                                tempArr.push(Topics[pageIncrement]?.question);
                                ToastAndroid.show(
                                    'Topic added in the favourite list',
                                    ToastAndroid.SHORT
                                );
                            }

                            await AsyncStorage.setItem(
                                'BookmarkedItem',
                                JSON.stringify(tempArr)
                            );
                        }
                    }}
                >
                    <AntDesignIcons
                        name="star"
                        size={22}
                        color={isBookmarked ? 'yellow' : 'white'}
                    />
                </Pressable>
            ),
        });
    }, [navigation, pageIncrement, isBookmarked]);

    return (
        <View
            style={{
                flex: 1,
            }}
        >
            <View
                style={{
                    flex: 1,
                }}
            >
                {selectedTopic === 0 && <WhatIsReact />}
                {selectedTopic === 1 && <Virtualdom />}
                {selectedTopic === 2 && <ReactAdvantages />}
                {selectedTopic === 3 && <Spa />}
            </View>

            <View
                style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    paddingHorizontal: 20,
                }}
            >
                <View
                    style={{
                        marginTop: 50,
                    }}
                >
                    <Button
                        disabled={selectedTopic === 0}
                        mode="outlined"
                        onPress={() => {
                            setPageIncrement(pageIncrement - 1);
                        }}
                    >
                        Previous
                    </Button>
                </View>
                <View
                    style={{
                        marginTop: 50,
                    }}
                >
                    <Button
                        disabled={selectedTopic === topicsLength - 1}
                        mode="outlined"
                        onPress={() => {
                            setPageIncrement(pageIncrement + 1);
                        }}
                    >
                        Next
                    </Button>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    heading: {
        backgroundColor: '#fff',
    },
});

export default TopicsScreen;
