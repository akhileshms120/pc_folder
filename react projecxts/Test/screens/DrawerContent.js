import React , {Component} from "react";
import {View,StyleSheet,Text,Image, ImageBackground}from 'react-native'

export default class DrawerContent extends Component {
    render(){
        return(
           <View style={styles.container}>
               <View style={styles.profilContainer}>
               <ImageBackground source={require('../img/img.jpg')} style={styles.drawerBg}>
                   <View style={styles.profileIcon}>
                  
                       <Image source={require('../img/images.png')}  style={styles.profileImage} ></Image>
                   </View>
                   <View style={styles.profileContent} >
                      <Text style={styles.profileText}>Tom Joseph</Text> 
                      <Text style={styles.profileText}>tom@gmail.com</Text>
                      <Text style={styles.profileText}>04712343063</Text>
                   </View>
                   </ImageBackground>   
               </View>
               <Text style={styles.menuText}
                onPress={()=>this.props.navigation.navigate('Home')}> Home</Text>
               <Text style={styles.menuText} 
               onPress={()=>this.props.navigation.navigate('Profile')}>Profile</Text>
               <Text style={styles.menuText}
               onPress={()=>this.props.navigation.navigate('AboutUs')}>AboutUs</Text>
               <Text style={styles.menuText}
               onPress={()=>this.props.navigation.navigate('Settings')}>Settings</Text>

           </View> 
        )
    }
}
    const styles=StyleSheet.create({
        container:{
            flex:1,
            // backgroundColor:'white',
        },
        menuText:{
            fontSize:18,
            marginTop:10,
            marginLeft:10,
            color:'#369',
            fontWeight:'bold',

        },
        profilContainer:{

            height:'25%',
            widht:'100%',
            // backgroundColor:'red',
            // flexDirection:'row',
            // alignItems:'center'

        },
        profileIcon:{
            height:80,
            width:80,
            backgroundColor:'#bbbbbb',
            borderRadius:70,
            marginTop:10,
            marginLeft:10,
            
        },
        profileContent:{
            paddingLeft:50,
            paddingTop:5,
        },
        profileText:{
            paddingTop:5,
            color:'green',
            fontWeight:'bold',
            
            

        },
        profileImage:{
            height:'100%',
            width:'100%',
            borderRadius:40,
            marginBottom:100

        },
        drawerBg:{
           hegiht:'100%',
           width:'100%',
           justifyContent:'center',
           alignItems:'center',
           flexDirection:'row',
           paddingTop:50
        }
            
            

    })
