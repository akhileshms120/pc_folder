import { useLinkProps } from "@react-navigation/native"
import React ,{Component} from "react"
import {View,TexInput,StyleSheet,StatusBar} from 'react-native'
import { TextInput } from "react-native-gesture-handler"

function Screen({children}){
    return(
        <View styles={styles.container}> 
            {children}
        </View>
    )
}


const styles=StyleSheet.create({
    container:{
        marginTop:StatusBar.currentHeight,
        paddingHorizontal:15
    }
})

export default Screen;