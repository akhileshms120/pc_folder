import React,{Component} from "react";
import {NavigationContainer} from "@react-navigation/native"
import { createDrawerNavigator } from "@react-navigation/drawer"
import Home from "./screen/Home";
import Profile from "../challenge/screen/Profile"
import WalletBalance from "../challenge/screen/WalletBalance"
import Records from "../challenge/screen/Records"
import Settings  from "../challenge/screen/Settings"
import AboutUs from "../challenge/screen/AboutUs"
import Help from  "../challenge/screen/Help"
import DrawerContent from "./screen/DrawerContent";

const Drawer = createDrawerNavigator();





      
      
   

function MyDrawer(){
  return(
    <Drawer.Navigator
    drawerContent={()=> <DrawerContent/>}> 
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile}/>
      <Drawer.Screen name="Wallet Balance" component={WalletBalance}/>
      <Drawer.Screen name="Records" component={Records}/>
      <Drawer.Screen name="Settings" component={Settings}/>
      <Drawer.Screen name="About Us" component={AboutUs}/>
      <Drawer.Screen name="Help" component={Help}/>
    </Drawer.Navigator>
  )
}


   
   


export default class App extends Component{
  render(){
    return(
      <NavigationContainer>
        <MyDrawer/>
      </NavigationContainer>
      
    )
  }
}

 