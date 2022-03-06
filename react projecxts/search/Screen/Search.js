import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import {View } from "react-native"
import{createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs"
import {NavigationContainer} from '@react-navigation/native'

import Videos from "../Screen/Video"
import Chapter from "../Screen/Chapter";
import Resource from "../Screen/Resource";
import QnBank from "../Screen/QnBank";

const Tab =createMaterialTopTabNavigator();

function MyTab(){
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  
  return(
   <View style={{flex:1}}>
     <View style={{height:'8%',width:'100%'}}>
     <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
     </View>
     <View style={{height:'92%',width:'100%'}}>
     <Tab.Navigator>
        <Tab.Screen name="Video" component={Videos} />  
        <Tab.Screen name="Chapter" component={Chapter}/>
        <Tab.Screen name="Resource" component={Resource}/>
        <Tab.Screen name="QN Bank" component={QnBank}/>
    </Tab.Navigator>
     </View>
   </View>

  )
 
}

export default function Search(){
  return(
    <NavigationContainer>
      <MyTab/>
    </NavigationContainer>
  )
}
