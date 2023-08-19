import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';


const AboutScreen = ({navigation})=>{

  useFocusEffect(()=>{

    console.log('I am removing in about screen')
    const destroyItem = async()=>{
      await AsyncStorage.removeItem('BookmarkedItem')

    }

    destroyItem()
  })

    return(
        <View style={styles.container}>
            <Text>About us Screen</Text>
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

export default AboutScreen