import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import {Topics} from '../utils/topics'
import { Button } from 'react-native-paper';

const TopicsScreen = ()=>{
    const [selectedTopic, setSelectedTopic] = React.useState(null)
    const [pageIncrement, setPageIncrement] = React.useState(0)
    const [topicsLength] = React.useState(4)

    React.useEffect(()=>{
        setSelectedTopic(pageIncrement)
    }, [pageIncrement])

    return(
        <React.Fragment>
        <View style={{
            marginTop: 40,
            paddingLeft: 20
        }}>
            <Text style={{
                fontWeight: "bold", fontSize: 18
            }}>ReactJS Topics</Text>
        </View>
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