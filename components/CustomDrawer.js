import React from 'react'
import {Text, View, StyleSheet, ImageBackground, Image} from 'react-native'
import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer'



const CustomDrawer = (props)=>{

    return (
        <View style={{flex: 1}}>
        <DrawerContentScrollView  {...props} contentContainerStyle={{backgroundColor: "#8200d6",}}>
        <ImageBackground source={require("../assets/menu-bg.jpeg")} style={{padding: 20}} >
        <Image source={require("../assets/user-profile.jpg")} style={{
            height: 80, width: 80, borderRadius: 40, marginBottom: 10
        }} />
        <Text style={{
            color: "white", fontSize: 18
        }}>Learn Reactjs</Text>
        </ImageBackground>
        <View style={{paddingTop: 20, backgroundColor: "white"}}>
        <DrawerItemList  {...props} />
        </View>
            
        </DrawerContentScrollView>
        </View>
    )

}

export default CustomDrawer