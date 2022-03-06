

import React from "react"
import {View,StyleSheet, TouchableOpacity,Text,TextInput,Image} from "react-native"
import Icon from "react-native-vector-icons/Ionicons"

class Apptour extends React.Component{
    render(){
        return(
            <View style={styles.maincontainer}>
                <Image source={require("../Image/logo.png")}></Image>
                <Text style={{fontWeight:"bold",marginBottom:10,fontSize:20}}>App Tour Title</Text>
                <Text style={{marginBottom:10,fontSize:15}}>The app tour discription goes here</Text>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate("Home1")}>
                        <View style={styles.buttoncontainer}>
                         <Icon name="arrow-forward-outline" size={30} color="white"/>
                        </View>  
                    </TouchableOpacity>

                
               
            </View>
        )
    }
    
}

export default Apptour

const styles=StyleSheet.create({
    maincontainer:{
        flex:1,
        justifyContent:"flex-end",
        alignItems:"center"
    },
    buttoncontainer:{
        height:50,
        width:50,
        backgroundColor:"green",
        borderRadius:5,
        marginBottom:50,
        alignItems:"center",
        justifyContent:"center"
        
       
    },
    continueButton:{
        height:50,
        width:300,
        backgroundColor:"#00c458",
        borderRadius:5,
        alignItems:"center",
        justifyContent:"center"
    },
    textInputView91:{
        width:30,
        height:35,
        backgroundColor:"#062e40",
        borderRadius:5,
        
    },
    textInputViewMob:{
        width:250,
        height:35,
        backgroundColor:"#062e40",
        marginLeft:5,
        borderRadius:5
        
    },
    
    
})