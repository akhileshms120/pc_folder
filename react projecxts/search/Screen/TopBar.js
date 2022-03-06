import React from "react"
import{createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs"
import {View} from "react-native"
import Videos from "../Screen/Video"
import Chapter from "../Screen/Chapter";
import Resource from "../Screen/Resource";
import QnBank from "../Screen/QnBank";


const Tab =createMaterialTopTabNavigator();

class TopBar extends React.Component{
    render(){
        return(
            <View>
                <Tab.Navigator>
                <Tab.Screen name="Video" component={Videos} />  
                <Tab.Screen name="Chapter" component={Chapter}/>
                <Tab.Screen name="Resource" component={Resource}/>
                 <Tab.Screen name="QN Bank" component={QnBank}/>
                </Tab.Navigator>
            </View>

        )
    }
}

export default TopBar
 
  

