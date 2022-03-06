

import React from "react"
import {View,StyleSheet, TouchableOpacity,Text,TextInput,Image} from "react-native"



class Home extends React.Component{
    constructor(){
        super();
        this.state={
            mobile:null
        }
    }
    updateValue(mobilenumber){
         this.setState({mobile:mobilenumber
        })
    }
    render(){
        return(
            <View style={styles.maincontainer}>
                
                <Image source={require("../Image/Capture.png")} style={{marginBottom:100}}/>
                <Text style={{fontWeight:"bold",fontSize:20,color:"black"}}>Enter Your Mobile Number</Text>
                <Text style={{marginBottom:20}}>We will send You OTP to Verify </Text>
                <View style={styles.buttoncontainer}>
                    <View style={{flexDirection:"row",marginBottom:10,}}>
                        <TextInput placeholder="+91" placeholderTextColor="#e0e5e7" style={styles.textInputView91}/>
                        <TextInput placeholder="Mobile Number" placeholderTextColor="#1d4152"style={styles.textInputViewMob} onChangeText={(mobilenumber)=>this.updateValue(mobilenumber)}/>
                    </View>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate("Otp",{mobilenumber:this.state.mobile})} style={styles.continueButton}>
                        <Text>
                            Continue
                        </Text>
                    </TouchableOpacity>

                </View>

            </View>
        )
    }
    
}

export default Home

const styles=StyleSheet.create({
    maincontainer:{
        flex:1,
        justifyContent:"flex-end",
        alignItems:"center"
    },
    buttoncontainer:{
        height:350,
        width:"100%",
        backgroundColor:"#002333",
        borderRadius:15,
        justifyContent:"center",
        alignItems:"center",
        marginBottom:-80
        
       
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
        width:40,
        height:40,
        backgroundColor:"#062e40",
        borderRadius:5,
        
        
    },
    textInputViewMob:{
        width:250,
        height:40,
        backgroundColor:"#062e40",
        marginLeft:5,
        borderRadius:5
        
    },
    
    
})