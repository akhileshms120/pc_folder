import React, { Component } from "react";
import {View,Text,StyleSheet} from 'react-native'
import SearchBar from "../screen/SearchBar";

export default class Videos extends Component{
    render(){
        return(
            <View style={styles.container}>
            <Text style={styles.text}>Videos</Text>
            </View>
        )
    }
}


const styles=StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:'blue',
            alignContent:'center',
            justifyContent:'center'

        },
        text:{
            // alignContent:'center'
            paddingLeft:150,
            fontWeight:'bold',
            fontSize:24


        }

    }
)














