import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native"
import {createDrawerNavigator} from "@react-navigation/drawer"
import 'react-native-gesture-handler';
import Welcome from './sreens/WelcomeScreen';
import AboutScreen from './sreens/AboutScreen';
import BookMarksScreen from './sreens/BookMarksScreen';
import ContactScreen from './sreens/ContactScreen';
import InterviewQuestionsScreen from './sreens/InterviewQuestionsScreen';
import CustomDrawer from './components/CustomDrawer'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FeatherIcons from 'react-native-vector-icons/Feather'
import EntypoIcons from 'react-native-vector-icons/Entypo'
import OcticonsIcons from 'react-native-vector-icons/Octicons'




const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <NavigationContainer>
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}   screenOptions={{
      headerShown: true
    }}>
      <Drawer.Screen name="Welcome" component={Welcome}  options={{
        drawerIcon: ({color}) => (
          <Ionicons name="home-outline" size={22} />
        ),
      }} />
     
      
      <Drawer.Screen name="InterviewQuestions" component={InterviewQuestionsScreen} options={{
        drawerIcon: ({}) => (
          <FeatherIcons name="book" size={22}  />
        ),
      }} />
      <Drawer.Screen name="BookMarks" component={BookMarksScreen} options={{
        drawerIcon: ()=>{
          return (
            <EntypoIcons name="bookmark" size={22}  />
          )
        }
      }} />
      <Drawer.Screen name="Contact" component={ContactScreen} options={{
        drawerIcon: ()=>{
          return (
            <OcticonsIcons name="people" size={22} />
          )
        }
      }} />
      <Drawer.Screen name="About" component={AboutScreen} options={{
        drawerIcon: ()=>{
         return ( <Ionicons name="information-circle"  size={22} />)

        }
      }} />
    </Drawer.Navigator>
    </NavigationContainer>
  );
}


