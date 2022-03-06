import React, { Component } from 'react'
import { Text, View ,ImageBackground,StyleSheet,Image,TextInput } from 'react-native'

export default class Profile extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../img/ig.jpg')} style={styles.imagBackground}>
                <Image source={require('../img/images.png')} style={styles.imgLogo}></Image>
                <Text> Profile </Text>
                <TextInput placeholder='Username' style={styles.userName}></TextInput>
                <TextInput placeholder='Password' style={styles.inputPassword}></TextInput>
                
                
                </ImageBackground>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        
    },
    imagBackground:{
        height:"100%",
        width:'100%',
        alignItems:'center',
        // justifyContent:'cemter',
    },
    imgLogo:{
        marginTop:100,
        // paddingVertical:100,
        height:50,
        width:50,
    },
    userName:{
        borderolor:'white',
        borderWidth:2
    },
    inputPassword:{
        marginTop:20,
        borderColor:'white',
        borderWidth:2
    }
})
