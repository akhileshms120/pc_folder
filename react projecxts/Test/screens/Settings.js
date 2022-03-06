import React, { Component } from 'react'
import { Text, View ,ImageBackground,StyleSheet,Image,TextInput } from 'react-native'

export default class settings extends Component {
    render() {
        return (
            <View style={styles.container}>
                
                
                <Text style={styles.aboutusText}>  This is the settings Page</Text>
                
                
                
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'green'
        
    },
    settingsText:{
        color:'black'
    }
    
    
})
