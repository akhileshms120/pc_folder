import React from 'react'
import {View,StyleSheet,Text} from 'react-native'

class Contact extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Contact</Text>
            </View>

        )
    }
}

export default Contact

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"

    }
})