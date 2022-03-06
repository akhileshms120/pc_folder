import React from 'react'
import {View,StyleSheet,Text} from 'react-native'

class Exam extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Recent</Text>
            </View>

        )
    }
}

export default Exam

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"

    }
})