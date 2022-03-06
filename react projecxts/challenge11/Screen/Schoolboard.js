

import React from "react"
import {View,StyleSheet, TouchableOpacity,Text,TextInput,Image} from "react-native"


class Schoolboard extends React.Component{
    
    render(){
        return(
            <View style={styles.maincontainer}>
                <Image source={require("../Image/Capture.png")} style={{marginBottom:10}}/>
                <Image source={require("../Image/logo.png")} style={{height:100,width:100,marginBottom:150}}/>
                <Text style={{fontWeight:"bold",fontSize:20,color:"black"}}>Select you school board</Text>
                <View style={styles.buttoncontainer}>
                    <View style={{marginBottom:50}}>
                        <TextInput placeholder="Select board" placeholderTextColor="#1d4152"style={styles.textInputViewMob} />
                        <TextInput placeholder="Select Class" placeholderTextColor="#1d4152"style={styles.textInputViewMob} />
                        
                    </View>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate("Apptour")}
                     style={styles.continueButton}>
                        <Text style={{color:"white"}}>
                            Continue
                        </Text>
                    </TouchableOpacity>

                </View>

            </View>
        )
    }
    
}

export default Schoolboard

const styles=StyleSheet.create({
    maincontainer:{
        flex:1,
        justifyContent:"flex-end",
        alignItems:"center"
    },
    buttoncontainer:{
        height:300,
        width:"100%",
        backgroundColor:"#002333",
        borderRadius:20,
        justifyContent:"center",
        alignItems:"center",
        marginBottom:-16


        
       
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

