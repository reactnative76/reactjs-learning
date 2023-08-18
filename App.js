
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import {NavigationContainer} from "@react-navigation/native"
import {createDrawerNavigator} from "@react-navigation/drawer"
import 'react-native-gesture-handler';
import Welcome from './sreens/WelcomeScreen';
import AboutScreen from './sreens/AboutScreen';
import BookMarksScreen from './sreens/BookMarksScreen';
import ContactScreen from './sreens/ContactScreen';
import TopicsScreen from './sreens/TopicsScreen';
import InterviewQuestionsScreen from './sreens/InterviewQuestionsScreen';
import CustomDrawer from './components/CustomDrawer'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FeatherIcons from 'react-native-vector-icons/Feather'
import EntypoIcons from 'react-native-vector-icons/Entypo'
import OcticonsIcons from 'react-native-vector-icons/Octicons'
import AntDesignIcons from 'react-native-vector-icons/AntDesign'
import { PaperProvider } from 'react-native-paper';
import * as SplashScreen from 'expo-splash-screen'




const Drawer = createDrawerNavigator()

export default function App() {

  SplashScreen.preventAutoHideAsync()
  setTimeout(SplashScreen.hideAsync, 2000)

  return (
    <PaperProvider>
    <StatusBar
    backgroundColor="#fff"
    barStyle="dark-content" 
   />
    <NavigationContainer>
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}   screenOptions={{
      headerShown: true,
      headerStyle:{
        backgroundColor: "#800080",
      },
      headerTintColor: "white",
      headerRight:() => (
        <View style={{
          marginRight:12
        }}>
        <AntDesignIcons
          name="star"
          size={22}
          color={"white"}
        />
        </View>
        
      ),
    }}>
      <Drawer.Screen name="Welcome" component={Welcome}  options={{
        drawerIcon: ({color}) => (
          <Ionicons name="home-outline" size={22} />
        ),
      }} />

      <Drawer.Screen name="Topics" component={TopicsScreen}  options={{
        drawerIcon: ({color}) => (
          <Ionicons name="home-outline" size={22} />
        ),
      }} />
     
      
      <Drawer.Screen name="Interview Questions" component={InterviewQuestionsScreen} options={{
        drawerIcon: ({}) => (
          <FeatherIcons name="book" size={22}  />
        ),
      }} />
      <Drawer.Screen name="Book Marks" component={BookMarksScreen} options={{
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
    </PaperProvider>
  );
}


