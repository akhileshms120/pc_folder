import React,{Component} from "react";
import {NavigationContainer} from "@react-navigation/native"
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./screens/Home";


const Drawer = createDrawerNavigator();

function Mydrawer(){
return(
  <Drawer.Navigator>
    <Drawer.Screen name="Home" component={Home}/>
  </Drawer.Navigator>
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