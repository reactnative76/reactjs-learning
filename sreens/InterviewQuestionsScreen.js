import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, TextInput, FlatList, StatusBar } from 'react-native';
import {questionsList} from '../utils/interviewQuestions'
import { ActivityIndicator, MD2Colors, List  } from 'react-native-paper';

const InterviewQuestionsScreen = ()=>{

  const [searchQuery, setSearchQuery] = React.useState('')
  const [isLoading, setIsLoading] = React.useState(false)
  const [data, setData] = React.useState([])
  const [expanded, setExpanded] = React.useState(false);
 

  React.useEffect(()=>{
    setIsLoading(true)
    setTimeout(()=>{
      fetchData()
    }, 0)
   

  },[])


  const fetchData = ()=>{
    setData(questionsList)
    setIsLoading(false)
  }
  const handlePress = () => setExpanded(!expanded);

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
      <React.Fragment>
  
    <View style={{
      flex: 1, marginTop: 20, marginHorizontal: 20,  marginBottom: 0
    }}>
    <TextInput placeholder='Search'  autoCapitalize='none' autoCorrect={false} style={{
      paddingHorizontal: 20, paddingVertical: 10, borderColor: "#ccc", borderWidth: 1, borderRadius: 8,
    }} onChange={(value)=>{
      setSearchQuery(value)
    }} />
    
    </View>
    <SafeAreaView style={
      {
        flex: 1,
        marginTop: 10,
      }
    }>
    <FlatList data={data} keyExtractor={(item)=> item?.index} renderItem={({item})=>{
      return (
        <View key={item.key} style={{
          flex: 1,
          marginVertical:8
        }}>
        <List.Section key={item.key} style={{
          flex: 1,
        
        }}>
        <List.Accordion
        style={{
          flexWrap: "wrap",
          flex: 1,
          alignItems: "flex-start"
        }}
          key={item.key}
          title={item?.question}
          left={props => <List.Icon {...props} icon="folder" />}
          expanded={expanded}
          onPress={()=>{
            handlePress()
          }}>
          <List.Item titleNumberOfLines={40} title={item.answer}   />
        </List.Accordion>
      </List.Section>
        </View>
      )
    }} />
    </SafeAreaView>
 
        </React.Fragment>
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