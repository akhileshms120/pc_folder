
import { Component } from "react";
import{View,StyleSheet,Image, Text,TouchableHighlight}from "react-native"
import React from "react"
import { color } from "react-native-reanimated";
export default class DrawerContent extends Component{
    render(){
        return(
           
              
            <View style={styles.container}>
                
                <View style={styles.profileContainer}>
                <View flexDirection={'row'}>
                <Image source={require("../img/Logo.png")} style={styles.porifleImage}></Image>
                <Text style={styles.profileText}>Favaz</Text> 
                <Text style={styles.goldText}>Gold</Text>
                </View>
                <View flexDirection={'row'}>
                <Text style={styles.buttonText}>Invite</Text>
                <Text style={styles.totalText}>Total Coin</Text>
                <Text style={styles.coinText}>Coin:20000</Text> 
                </View>
                
                
                </View>
                <View marginVertical={50} marginHorizontal={30}>
                <Text style={styles.menu}>Home</Text>
                <View style={styles.line}/>
                <Text style={styles.menu}>Profile</Text>
                <View style={styles.line}/>
                <Text style={styles.menu}>Wallet Balance</Text>
                <View style={styles.line}/>
                <Text style={styles.menu}>Records</Text>
                <View style={styles.line}/>
                <Text style={styles.menu}>Refund and Policies</Text>
                <View style={styles.line}/>
                <Text style={styles.menu}>Settings</Text>
                <View style={styles.line}/>
                <Text style={styles.menu}>About Us</Text>
                <View style={styles.line}/>
                <Text style={styles.menu}>Help</Text>
                <View style={styles.line}/>
                <View alignItems={'center'} justifyContent={'center'} paddingVertical={20}>
                    <Text style
                    ={styles.logOut}>Log Out</Text>
                </View>
                
                
                </View>
               
                {/* <View style={styles.profileContainer}>
                    <View style={styles.profileIcon}>
                    <Image source={require("../img/Logo.png")} style={styles.porifleImage}></Image>
                    </View>        
                   <View>
                   <Text style={styles.profileText}>Favaz</Text> 
                   </View> 
                    <View style={styles.goldView}>
                    <Text style={styles.goldText}>Gold</Text>
                    </View>  
                    <View style={styles.buttonView}>
                        
                    <TouchableHighlight style={styles.touchbleStyle}>
                        <Text style={styles.buttonText}>Invite</Text>
                    </TouchableHighlight>
                    <Text style={styles.totalText}>Total Coin</Text>
                    </View>
                    <View style={styles.coinView}>
                    
                     </View>
                    <Drawer.Section>
                        <DrawerItem>

                        </DrawerItem>
                    </Drawer.Section>
                    
                </View>
                 */}
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        
    },
    menu:{
        fontSize:20,
        color:'black',
        marginTop:30,
        marginLeft:10,
        
    },
    line:{
        borderBottomColor:'black',
        borderWidth:1,
        marginVertical:0,
        // paddingHorizontal:60
    },
    logOut:{
        color:'black'
      
    },
    profileContainer:{
        height:"22%",
        width:"100%",
        backgroundColor:'#2A2728',
        // flexDirection:'row'
      
    },
   
        
    
    porifleImage:{
        height:60,
        width:60,
        marginHorizontal:20,
        marginVertical:5,
        // paddingRight:30
    
        
    },
    profileText:{
        color:'white',
        fontSize:20,
        marginHorizontal:105,
        marginVertical:20,
        
    },
    goldText:{
        // marginRight:250,
        paddingLeft:40,
        // fontSize:15,
        color:'white',
        marginHorizontal:-170,
        borderColor:'#52595D',
        borderRadius:50,
        borderWidth:1,
        textAlign:'center',
        // justifyContent:'center',
        // alignItems:'center',
        backgroundColor:'#52595D',
        marginVertical:60
       
    },
    goldView:{
        width:70,
        height:100,
        marginHorizontal:200,
    },
    buttonView:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginVertical:-50,
        height:20
       
    },
    buttonText:{
        color:'black',
        marginVertical:-30,       
        borderColor:'yellow',
        borderWidth:1,      
        marginBottom:100,       
        backgroundColor:'white',
        borderRadius:10,
        marginHorizontal:20,
        paddingHorizontal:10
    },
    totalText:{
        color:'white',
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal:108,
        marginVertical:-40
    },
    coinText:{
        color:'white',
        marginHorizontal:-180,
        marginVertical:-20
        // textAlign:'left'
    },
    coinView:{
        // paddingVertical:30,
        // paddingHorizontal:100,
        // marginHorizontal:110
        marginVertical:60
        
    },
    touchbleStyle:{
    //     // width:1,
    //     height:20,
        // paddingRight:30,
        // marginRight:5,
        alignItems:'center',
        justifyContent:'center'
    }


})
