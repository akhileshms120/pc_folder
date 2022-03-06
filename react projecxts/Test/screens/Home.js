import React, { Component } from 'react'
import { Text, View ,ImageBackground,StyleSheet,Image,TextInput,TouchableOpacity,TouchableHighlight } from 'react-native'

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../img/bg.jpg')} style={styles.imagBackground}>
                <Image source={require('../img/images.png')} style={styles.imgLogo}></Image>
                <Text> Home </Text>
                <TextInput placeholder='Username' style={styles.userName}></TextInput>
                <TextInput placeholder='Password' style={styles.inputPassword}></TextInput>
                {/* <TouchableOpacity style-={styles.buttonView}
                onPress={()=>this.props.navigation.navigate('Tab')}> */}
                    <Text style={styles.buttonText} >Login</Text>
                {/* </TouchableOpacity> */}
                
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
        height:100,
        width:100,
        borderRadius:50
    },
    userName:{
        borderBottomColor:'black',
        borderWidth:2,
        width:"80%"
    },
    inputPassword:{
        marginTop:20,
        borderBottomColor:'black',
        borderWidth:2,
        width:"80%",
        marginBottom:30
    },
    buttonView:{
        borderRadius:20,
        borderWidth:8,
    },
    buttonText:{
        fontWeight:'bold',
        color:'white',
        backgroundColor:"green",
        paddingTop:15,
        paddingBottom:15,
        paddingLeft:25,
        paddingRight:25
    },
})

