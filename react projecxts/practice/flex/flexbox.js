import React,{Component} from 'react';

import {
  
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  TouchableHighlight,
  Image
} from 'react-native';

export default class Flexbox extends Component
{
  render()
{
  return(
    <View style={styles.container}>
      <ImageBackground source={require('./img/ig.jpg')} style={styles.backgroundView}>
      <Image source={require('./img/log.png')} style={styles.imgeEdit}></Image>
      <TextInput placeholder='Name' placeholderTextColor='white' style={styles.inputView}></TextInput>
      <TextInput placeholder='Email' placeholderTextColor='white' style={styles.inputView}></TextInput>
      <View style={styles.flexText}>
      <TextInput placeholder='+91' placeholderTextColor='white' style={styles.countryCode}></TextInput>
      <TextInput placeholder='Mobile no' placeholderTextColor='white' style={styles.inputView}></TextInput>
      </View>
      <TextInput placeholder='Password' placeholderTextColor='white' style={styles.textDirection,styles.inputView}></TextInput>
      <TouchableHighlight style={styles.buttonView}> 
          <Text style={styles.buttonText}> 
              Sign Up
          </Text>
      </TouchableHighlight>
      
      </ImageBackground>


    </View>
  )
}}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white'
  },
  backgroundView:{
    height:'100%',
    widht:'100%',
    alignItems:'center',
    justifyContent:'center',
    
  },
  inputView:{
    height:50,
    width:100,
    borderColor:'white',
    borderWidth:2,
    marginTop:20,
    color:'white',
    textAlign:'center'
  },
  
  countryCode:{
    
      height:50,
      width:50,
      borderColor:'white',
    borderWidth:2,
    marginTop:20,
    color:'white',
    textAlign:'center',

  },
  flexText:{

    flexDirection:'row',

  },
  buttonView:{
      borderRadius:8,
      borderWidth:8,
      marginTop:20
  },
  buttonText:{
      fontWeight:'bold',
      color:'white'
  },
  imgeEdit:{
      height:100,
      width:100,
    
  }

})
        
