/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React,{Component} from 'react';
 import {
 Text,
 View,
 TouchableHighlight,
 TextInput,
 StyleSheet,
 ImageBackground,
 Image
 } from 'react-native';
 export default class Login extends Component{
 
 
 render(){
   return(
     <View style={styles.container}>
       <ImageBackground source={require('./img/ig.jpg')} style={styles.backgroundView}>
         <Image source={require('../src/images.png')} style={styles.logoView}></Image>
         <Text style={styles.textView}>Welcome to Social Media</Text>
         <TextInput placeholder='Username' placeholderTextColor='black' style={styles.inputView}></TextInput>
         <TextInput placeholder='Enter Your Email id' placeholderTextColor='black' style={styles.inputView}></TextInput> 
         <TextInput placeholder='Password' placeholderTextColor='black' secureTextEntry={true}style={styles.inputView}></TextInput>
         
         <TouchableHighlight style={styles.buttonView} underlayColor='white'>
           <Text style={styles.buttonView}>
             Log In
           </Text>
         </TouchableHighlight>
       
     </ImageBackground>
     </View>
   )
 }
 
 
 }
 
 const styles=StyleSheet.create ({
   container:{
     height:'100%',
     width:'100%',
     backgroundColor:'white'
 
   },
   inputView:{
     height:40,
     width:150,
     borderWidth:1,
     color:'black',
     textAlign:'center',
     marginTop:20
 
   },
   textView:{
     fontWeight:'bold',
     marginTop:20
   
   },
   backgroundView:{
     height:'100%',
     widht:'100%',
     alignItems:'center',
     justifyContent:'center'
   },
   logoView:{
     height:'22%',
     width:'35%',
     marginBottom:20
   },
   buttonView:{
     height:25,
     width:80,
     backgroundColor:'#8f64f2',
     borderRadius:10,
      marginTop:20,
     alignItems:'center',
     justifyContent:'center',
     textAlign:'center'
   },
   buttonText:
   {
     fontWeight:'bold',
   }
 
 }
 )