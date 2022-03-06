
import React from "react"

import {View} from "react-native"
import TopBar from "./Screen/TopBar"

import { NavigationContainer } from "@react-navigation/native"
import Search from "../search/Screen/Search"








export default class App extends React.Component{
  render(){
    return(
      <NavigationContainer>
   <View style={{flex:1}}>
          
          <View><Search/></View>
      
 </View>
      </NavigationContainer>
      
        
    )
  }
}
