import React, { Component } from 'react'
import { Text, View ,ImageBackground,StyleSheet,Image,TextInput,TouchableOpacity,TouchableHighlight } from 'react-native'

export default class StackHome extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/* <ImageBackground source={require('../img/bg.jpg')} style={styles.imagBackground}>
                <Image source={require('../img/images.png')} style={styles.imgLogo}></Image> */}
                <Text> Stack Home </Text>
                {/* <TextInput placeholder='Username' style={styles.userName}></TextInput>
                <TextInput placeholder='Password' style={styles.inputPassword}></TextInput>
                <TouchableOpacity style-={styles.buttonView}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                
                </ImageBackground> */}
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
        borderBottomColor:'black',
        borderWidth:2
    },
    inputPassword:{
        marginTop:20,
        borderBottomColor:'black',
        borderWidth:2
    },
    buttonView:{
        borderRadius:20,
        borderWidth:8,
    },
    buttonText:{
        fontWeight:'bold',
        color:'white'
    },
})
