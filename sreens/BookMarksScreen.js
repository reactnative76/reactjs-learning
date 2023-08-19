import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';


const BookMarksScreen = ()=>{


  useFocusEffect(()=>{

    const viewItems  =async()=>{
      const existingItems = await AsyncStorage.getItem('BookmarkedItem')
      console.log('Items bookmarked are:-', JSON.parse(existingItems))
    }

  


    viewItems()

  })


    return(
        <View style={styles.container}>
            <Text>Bookmarks screen</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default BookMarksScreen