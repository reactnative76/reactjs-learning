import React from 'react'
import { StyleSheet, Text, View, Pressable , ToastAndroid} from 'react-native';
import {Topics} from '../utils/topics'
import { Button } from 'react-native-paper';
import AntDesignIcons from 'react-native-vector-icons/AntDesign'
import AsyncStorage from '@react-native-async-storage/async-storage';

const TopicsScreen = ({navigation})=>{
    const [selectedTopic, setSelectedTopic] = React.useState(null)
    const [pageIncrement, setPageIncrement] = React.useState(0)
    const [topicsLength] = React.useState(4)


    

    React.useEffect(()=>{
        navigation.setOptions({
            title:  Topics[pageIncrement]?.question,
          })
        setSelectedTopic(pageIncrement)
    }, [pageIncrement])

    React.useEffect(() => {
        navigation.setOptions({
            headerRight:() => (
                <View style={{
                  marginRight:12
                }}>
                <AntDesignIcons
                    onPress={async()=>{
                        console.log('star is pressed:-', pageIncrement)
                        const existingItems = await AsyncStorage.getItem('BookmarkedItem')
                        let itemsArr = []

                        if(!existingItems) {
                            itemsArr.push(Topics[pageIncrement]?.question)
                            ToastAndroid.show('Topic added in the favourite list', ToastAndroid.SHORT);
                            await AsyncStorage.setItem('BookmarkedItem', JSON.stringify(itemsArr))
                        }

                        if(existingItems){
                            itemsArr = await AsyncStorage.getItem('BookmarkedItem')
                            let tempArr = [...JSON.parse(itemsArr)]


                            if(tempArr?.includes(Topics[pageIncrement]?.question)){
                                tempArr = tempArr.filter(val => val !== Topics[pageIncrement]?.question)
                                ToastAndroid.show('Topic removed from the favourite list', ToastAndroid.SHORT);
                            } else {
                                tempArr.push(Topics[pageIncrement]?.question)
                                ToastAndroid.show('Topic added in the favourite list', ToastAndroid.SHORT);
                            }


                           
                            console.log('Temp array and the new item is:-', tempArr, Topics[pageIncrement]?.question)
                            await AsyncStorage.setItem('BookmarkedItem', JSON.stringify(tempArr))
                        }

                      
                    }}
                  name="star"
                  size={22}
                  color={"white"}
                  
                />
                </View>
                
              ),
        });
      }, [navigation, pageIncrement]);

    return(
        <React.Fragment>
       
        <View>
               <Text>{ Topics[selectedTopic]?.question}</Text>
        </View>
        <View style={{
            justifyContent: "space-between",
            flexDirection: "row",
            paddingHorizontal: 20

        }}>
      <View style={{
            marginTop: 50,
        }}>
        <Button disabled={selectedTopic === 0}   mode="outlined" onPress={() => {
           
            setPageIncrement(pageIncrement - 1)
          
        }}>
            Previous
        </Button>
        </View>
      <View style={{
            marginTop: 50,
        }}>
        <Button disabled={selectedTopic === topicsLength -1}  mode="outlined" onPress={() => {
           
            setPageIncrement(pageIncrement + 1)
           
        }}>
            Next
        </Button>
        </View>
      
        </View>
        
        </React.Fragment>
    )

}

const styles = StyleSheet.create({
    heading: {
      backgroundColor: '#fff',
    },
  });

export default TopicsScreen