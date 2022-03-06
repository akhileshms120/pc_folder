import React, { Component } from 'react'
import { Text, View ,ImageBackground,StyleSheet,Image,TextInput } from 'react-native'

export default class AboutUs extends Component {
    render() {
        return (
            <View style={styles.container}>
                
                
                <Text style={styles.aboutusText}>  This is the App I Firstly Made</Text>
                
                
                
                
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        
    },
    aboutusText:{
        color:'black'
    }
    
    
    
})
