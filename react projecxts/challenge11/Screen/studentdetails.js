

import React from "react"
import {View,StyleSheet, TouchableOpacity,Text,TextInput,Image} from "react-native"
import Schoolboard from "../Screen/Schoolboard"


class studentdetails extends React.Component{
    
    render(){
        return(
            <View style={styles.maincontainer}>
                <Image source={require("../Image/Capture.png")} style={{marginBottom:10}}/>
                <Image source={require("../Image/logo.png")} style={{height:100,width:100,marginBottom:50}}/>
                <Text style={{fontWeight:"bold",fontSize:20,color:"black"}}>Student details</Text>
                <View style={styles.buttoncontainer}>
                    <View style={{marginBottom:50}}>
                        <TextInput placeholder="Full Name" placeholderTextColor="#1d4152"style={styles.textInputViewMob} />
                        <TextInput placeholder="Email" placeholderTextColor="#1d4152"style={styles.textInputViewMob} />
                        <TextInput placeholder="Select State" placeholderTextColor="#1d4152"style={styles.textInputViewMob} />
                        <TextInput placeholder="Pincode" placeholderTextColor="#1d4152"style={styles.textInputViewMob} />
                    </View>
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate("Schoolboard");}}
                   
                    style={styles.continueButton}>
                        <Text style={{color:"white"}}>
                            Register
                        </Text>
                    </TouchableOpacity>

                </View>

            </View>
        )
    }
    
}

export default studentdetails

const styles=StyleSheet.create({
    maincontainer:{
        flex:1,
        justifyContent:"flex-end",
        alignItems:"center"
    },
    buttoncontainer:{
        height:440,
        width:"100%",
        backgroundColor:"#002333",
        borderRadius:15,
        justifyContent:"center",
        alignItems:"center",
        marginBottom:-11
        
       
    },
    continueButton:{
        height:50,
        width:300,
        backgroundColor:"#00c458",
        borderRadius:5,
        alignItems:"center",
        justifyContent:"center"
    },
    
        
        
    
    textInputViewMob:{
        width:340,
        height:50,
        backgroundColor:"#062e40",
        marginLeft:5,
        borderRadius:5,
        marginTop:20
        
    },
    
    
})