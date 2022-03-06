import React from "react"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import Videos from "../challenge1/screen/Videos"
import Chapter from "../challenge1/screen/Chapter"
import Resource from "../challenge1/screen/Resource"
import { NavigationContainer } from "@react-navigation/native"
import QNBank from "./screen/QN Bank"
import SearchBar from "./screen/SearchBar"
import  Screen  from "react-native-screens"
import {View,StyleSheet,TextInput} from "react-native"
import { Searchbar } from 'react-native-paper';

import Search from "../challenge1/Search"









const Tab =createMaterialTopTabNavigator();

function MyTab(){
    return(
      
          
     
      <View style={{flex:1}}>
        
        <View>
        <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
        </View>
        <View></View>
        
      <Tab.Navigator>
        
        
        
    
        <Tab.Screen name="Video" component={Videos} />  
        <Tab.Screen name="Chapter" component={Chapter}/>
        <Tab.Screen name="Resource" component={Resource}/>
        <Tab.Screen name="QN Bank" component={QNBank}/>
      </Tab.Navigator>
      </View>
      
      
      
    )
  }
  
  
  
  export default class App extends React.Component{
    render(){
      return(
        
        <NavigationContainer>
          
         
         <MyTab/>
         
         
          
        </NavigationContainer>
       
        
      )
    }
  }

  const styles=StyleSheet.create({
    container:{
      flex:1,
        width:100,
      height:50,
        backgroundColor:"white",
        
     paddingHorizontal:100,
      justifyContent:'center',
      alignContent:'center',
    },
    searchInput:{
      width:300,
      height:40,
      paddingLeft:8,
      fontSize:16,
      borderColor:'black',
      borderWidth:1,
      // marginVertical:30,
      marginHorizontal:50,
      borderRadius:8,
      // paddingVertical:30
    },
    placeHolder:{
      width:100,
        height:40,
        backgroundColor:"white",
        borderRadius:8,
        // paddingHorizontal:10
        justifyContent:'center'
    },
    searchBar:{
      height:10,
      width:'100%'

    }

  })