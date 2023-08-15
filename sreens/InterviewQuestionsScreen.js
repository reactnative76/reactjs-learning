import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, TextInput, FlatList, StatusBar, ScrollView } from 'react-native';
import {questionsList} from '../utils/interviewQuestions'
import { ActivityIndicator, MD2Colors, List  } from 'react-native-paper';
import filter from 'lodash.filter'

const InterviewQuestionsScreen = ()=>{

  const [searchQuery, setSearchQuery] = React.useState('')
  const [isLoading, setIsLoading] = React.useState(false)
  const [data, setData] = React.useState([])
  const [expanded, setExpanded] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(null)
  const [fullData, setFullData] = React.useState([])
 

  React.useEffect(()=>{
    setIsLoading(true)
    setTimeout(()=>{
      fetchData()
    }, 0)
   

  },[])


  const fetchData = ()=>{
    setData(questionsList)
    setFullData(questionsList)
    setIsLoading(false)
  }
  const handlePress = () => setExpanded(!expanded);

  const contains = (completeQuestion, query)=>{
    if(completeQuestion?.question?.toLowerCase().includes(query)){
      return true
    } 
    else return false
  }

  if(isLoading){
    return (
      <View style={{
        flex: 1, justifyContent: "center", alignItems: "center"
      }}>
      <ActivityIndicator  animating={true} color={MD2Colors.red800} />
      </View>
   
    )
  }

    return(
  
  <View style={{
    backgroundColor: "white",
    flex:1
  }}>

    <View style={{
      flex: 1, marginTop: 20, marginHorizontal: 20,  marginBottom: 0
    }}>
    <TextInput  placeholder='Search'  autoCapitalize='none' autoCorrect={false} style={{
      paddingHorizontal: 20, paddingVertical: 10, borderColor: "#ccc", borderWidth: 1, borderRadius: 8,
    }} onChangeText={(value)=>{
      setSearchQuery(value)
      const formattedQuery = value?.toLowerCase()
      const filteredData = filter(fullData, (completeQuestion)=>{
        return contains(completeQuestion, formattedQuery)
      })
      setData(filteredData)
    }} />
    
    </View>
 <View style={{
  flex:10,
  paddingHorizontal: 10
 
 }}>
    <FlatList  data={data} keyExtractor={(item)=> item?.index} renderItem={({item})=>{
      return (
        <View key={item.key} style={{
          flex: 1,
          marginVertical:8,
        }}>
        <List.Section key={item.key} style={{
          backgroundColor: "white",
          
        }}>
        <List.Accordion style={{
          backgroundColor: "white"
        }}
     
          key={item.key}
          title={item?.question}
          left={props => <List.Icon {...props} icon="folder" />}
          expanded={selectedIndex === item.key ?  expanded : false}
          onPress={()=>{
            setSelectedIndex(item.key)
            handlePress()
          }}>
          <List.Item titleNumberOfLines={40} title={item.answer}   />
        </List.Accordion>
      </List.Section>
        </View>
      )
    }} />
    </View>
   
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

export default InterviewQuestionsScreen