import React,{Component} from "react";
import {NavigationContainer} from "@react-navigation/native"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
// import { createStackNavigator } from "@react-navigation/stack";
import Icon from 'react-native-vector-icons/MaterialIcons'

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import DrawerContent from "./screens/DrawerContent";
import AboutUs from "./screens/AboutUs";
import Settings from "./screens/Settings";
import Cart from "./screens/Tab/Cart";
import Category from "./screens/Tab/Category";
import Order from "./screens/Tab/Order";
import Search from "./screens/Tab/Search";
import Login from "../Test/screens/Stack/Login";
import Calls from "./screens/BottomTab/Calls";
import Chat from "./screens/BottomTab/Chat";
import Status from "./screens/BottomTab/Status";
// import StackHome from "../Test/screens/Stack/StackHome";

const Drawer = createDrawerNavigator();
const Tab = createMaterialTopTabNavigator();
const BottomTab=createBottomTabNavigator();
// const Stack=createStackNavigator();

// function MyStack(){
//   return(
//     <Stack.Navigator>
//        <Stack.Screen name='Home' component={Home}/>
//       <Stack.Screen name='Login' component={Login}/>
//       <Stack.Screen name='Mydrawer' component={Mydrawer}/>
      
//     </Stack.Navigator>
//   )
// }
function MyBottomTab(){
  return(
    <BottomTab.Navigator
    screenOptions={{
      tabBarLabelStyle:{fontSize:12},
      tabBarStyle:{BackgroundColor:'white'},
      tabBarItemStyle:{width:100}
    }}>
      <BottomTab.Screen
      name='Calls' component={Calls}
      options={{
        tabBarActiveTintColor:'blue',
        tabBarInactiveTintColor:'gray',
        tabBarIcon: ({focused})=> 
       focused ? <Icon name='call' size={24} color='blue'/> : <Icon name='call' size={24} color='grey'/>}}/>
      <BottomTab.Screen
      name='Chat' component={Chat}
      options={{ 
        tabBarActiveTintColor:'blue',
        tabBarInactiveTintColor:'gray',
        tabBarIcon:({focused})=>
        focused ? <Icon name='chat' size={24} color='blue'/> : <Icon name='chat' size={24} color='gray'/>}}/>
      <BottomTab.Screen
      name='Status' component={Status}
      options={{
        tabBarActiveTintColor:'blue',
        tabBarInactiveTintColor:'gray',
        tabBarIcon: ({focused})=> 
       focused ? <Icon name='timelapse' size={24} color='blue'/> : <Icon name='timelapse' size={24} color='grey'/>}}/>
      <BottomTab.Screen
      name='Drawer' component={Mydrawer}
      options={{
        tabBarActiveTintColor:'blue',
        tabBarInactiveTintColor:'gray',
        tabBarIcon: ({focused})=> 
       focused ? <Icon name='list' size={24} color='blue'/> : <Icon name='list' size={24} color='grey'/>}}/>
      <BottomTab.Screen
      name='MyTab' component={MyTab}
      options={{
        tabBarActiveTintColor:'blue',
        tabBarInactiveTintColor:'gray',
        tabBarIcon: ({focused})=> 
       focused ? <Icon name='history' size={24} color='blue'/> : <Icon name='history' size={24} color='grey'/>}}/>
      
    </BottomTab.Navigator>
  )
}

function Mydrawer(){
  return(
    <Drawer.Navigator> 
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="AboutUs" component={AboutUs}/>
      <Drawer.Screen name="Settings" component={Settings}/>
      <Drawer.Screen name="Mytab" component={MyTab}/>
    </Drawer.Navigator>
  )
}
function MyTab(){
  return(
    <Tab.Navigator
    screenOptions={{
      tabBarLabelStyle:{fontSize:12},
      tabBarItemStyle:{width:100},
      tabBarStyle:{BackgroundColor:'white'}

    }}>
      <Tab.Screen name="Cart" component={Cart}
      options={{
        tabBarActiveTintColor:'blue',
        tabBarInactiveTintColor:'gray',
        tabBarIcon: ({focused})=> 
       focused ? <Icon name='shopping-cart' size={24} color='blue'/>:<Icon name='shopping-cart' size={24} color='grey'/>
      }}/>
      <Tab.Screen name="Category" component={Category}
      options={{
        tabBarInactiveTintColor:'gray',
        tabBarActiveTintColor:'blue',
        tabBarIcon:({focused})=>
        focused ? <Icon name='category' size={24} color='blue'/> : <Icon name='category' size={24} color='grey'/>
      }}/>
      <Tab.Screen name="Order" component={Order} options={{
        tabBarInactiveTintColor:'gray',
        tabBarActiveTintColor:'blue',
      tabBarIcon: ({focused})=> 
      focused ? <Icon name='shopping-bag' size={24} color='blue'/>:<Icon name='shopping-bag' size={24} color='grey'/>}}/>
      {/* <Tab.Screen name="Search" Component={Search}/> */}
      <Tab.Screen name="Mydrawer" component={Mydrawer}
      options={{
        tabBarInactiveTintColor:'gray',
        tabBarActiveTintColor:'blue',
        tabBarIcon: ({focused})=> 
       focused ? <Icon name='search' size={24} color='blue'/>:<Icon name='search' size={24} color='grey'/>
        
     }}/>
    </Tab.Navigator>
  )
}



export default class App extends Component{
  render(){
    return(
      <NavigationContainer>
        <Mydrawer/>
      </NavigationContainer>
      
    )
  }
}

 