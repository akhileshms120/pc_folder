
import{Text, View,StyleSheet}from 'react-native';
import React,{Component} from 'react';

export default class Home extends Component{
    render(){
        return(
            <View style={styles.container}>  
                <Text> Home Page</Text>

            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#016F7E'
        
    },
    textStyle:{
        color:'black'

    }
})