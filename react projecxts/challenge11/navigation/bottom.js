import React from 'react'
import {View} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs' 
import { NavigationContainer } from '@react-navigation/native'
import Home1 from '../Screen/Home1'
import Recent from "../Screen/Recent"
import Exam from "../Screen/Exam"
import Profile from "../Screen/Profile"
import Contact from "../Screen/Contact"
const BottomTab =createBottomTabNavigator()
import  Icon  from 'react-native-vector-icons/MaterialIcons'
 

function MyBottom(){
    return(
       <BottomTab.Navigator 
       screenOptions={{
           tabBarLabelStyle:{fontSize:12},
           tabBarItemStyle:{width:100},
           tabBarstyle:{backgroundColor:"white"}
       }}>
           <BottomTab.Screen name="Home" component={Home1} options={{
               headerShown:false,
               tabBasrActiveTintColor:"green",
               tabBarInactiveTintColor:"gray",
               tabBarIcon:({focused})=>
               focused ? <Icon name="Home" fontSize={24} color='green'/>:<Icon name="Home" fontSize={24} color='gray'/>
           }}/>
           <BottomTab.Screen name="Recent" component={Recent} options={{
                headerShown:false,
                tabBasrActiveTintColor:"green",
                tabBarInactiveTintColor:"gray",
                tabBarIcon:({focused})=>
               focused ? <Icon name="play_arrow" fontSize={24} color='green'/>:<Icon name="play_arrow" fontSize={24} color='gray'/>
           }}/>
           <BottomTab.Screen name="Exam" component={Exam} options={{
               headerShown:false,
               tabBarActiveTintColor:"green",
               tabBarInactiveTintColor:"gray",
               tabBarIcon:({focused})=>
               focused ? <Icon name="description" fontSize={24} color="green"/>:<Icon name="description" fontSize={24} color='gray'/>
           }}
           />
           <BottomTab.Screen name="Profile" component={Profile} options={{
               headerShown:false,
               tabBarActiveTintColor:"green",
               tabBarInactiveTintColor:"gray",
               tabBarIcon:({focused})=>
               focused ? <Icon name="person" fontSize={24} color="green"/>:<Icon name="person"  fontSize={24} color="gray"/>
           }}/>
           <BottomTab.Screen name="Contact" component={Contact} options={{
               headerShown:false,
               tabBarActiveTintColor:"green",
               tabBarInactiveTintColor:"gray",
               tabBarIcon:({focused})=>
               focused ? <Icon name="mail" fontSize={24} color="green"/>:<Icon name="mail" fontSize={24} color="gray"/>
           }}/>
       </BottomTab.Navigator>
    )
}

export default class Bot extends React.Component{
    render(){
        return(
            <NavigationContainer>
                <MyBottom/>
            </NavigationContainer>
        )
    }
}
