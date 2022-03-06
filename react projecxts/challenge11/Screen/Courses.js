import React from "react"
import {View,StyleSheet,Text} from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons"

class Course extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={{backgroundColor:"#062e40",height:240}}>
                    <Icon name='chevron_left'/>
                    <Text style={{color:"white",marginLeft:50,marginTop:80,fontSize:30}}>Biology</Text>
                    <View style={{flexDirection:"row"}}>
                        <Icon name="radio_button_checked"/>
                        <Text style={{color:'green',marginLeft:50}}>12 Chapters</Text>
                        <Icon name="radio_button_checked"/>
                        <Text style={{color:'green',marginLeft:10}}>124 hours</Text>
                    </View>
                </View>
            </View>
            
                
        )
    }
}

export default Course

const styles=StyleSheet.create({
    container:{
        flex:1

    },
    header:{
        backgroundColor:"#002333"
    }
})