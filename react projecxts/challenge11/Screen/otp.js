

import React from "react"
import {View,StyleSheet, TouchableOpacity,Text,TextInput,Image} from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons"
import studentdetails from "./studentdetails"


class Otp extends React.Component{
    render(){
        return(
            <View style={styles.maincontainer}>
                <Image source={require("../Image/Capture.png")} style={{position:"absolute",top:1}}/>
                <Icon name="call" size={100} color="green"style={{position:"absolute",top:200}}/>
                <Text style={{fontWeight:"bold",fontSize:20,color:"black"}}>Verification code</Text>
                <Text style={{marginBottom:20}}>Please type the verification code sent to </Text>
                {/* <Text>{this.props.route.params.mobilenumber}</Text> */}
                <View style={styles.buttoncontainer}>
                    <View style={{flexDirection:"row",marginBottom:10 ,}}>
                        <TextInput  style={styles.textInputView91}/>
                        <TextInput  style={styles.textInputView91}/>
                        <TextInput  style={styles.textInputView91}/>
                        <TextInput  style={styles.textInputView91}/>
                        <TextInput  style={styles.textInputView91}/>
                        <TextInput  style={styles.textInputView91}/>
                       
                    </View>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('studentdetails')}
                    style={styles.continueButton}>
                        <Text style={{color:"white"}}>
                            Resend OTP
                        </Text>
                    </TouchableOpacity>
                    <Text style={{color:"#2b4b5a"}}>Resend after 28s</Text>
                    <Text style={{color:"#009b4e",marginTop:20}}>
                        <Icon name="call" size={15}/>
                        Contact Us</Text>
                

                </View>
                

            </View>
        )
    }
    
}

export default Otp

const styles=StyleSheet.create({
    maincontainer:{
        flex:1,
        justifyContent:"flex-end",
        alignItems:"center"
    },
    buttoncontainer:{
        height:250,
        width:"100%",
        backgroundColor:"#002333",
        borderRadius:1,
        justifyContent:"center",
        alignItems:"center",
        
       
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
        marginRight:5
        
    },
    textInputViewMob:{
        width:250,
        height:35,
        backgroundColor:"#062e40",
        marginLeft:5,
        borderRadius:5
        
    },
    
    
})