import React from 'react'
import {View,StyleSheet,Text} from 'react-native'

class Profile extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Profile</Text>
            </View>

        )
    }
}

export default Profile

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"

    }
})