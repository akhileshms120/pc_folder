import { StatusBar ,View,Text,StyleSheet,Dimensions} from "react-native";
import React from "react"
const{height,width}=Dimensions.get("screen")
const setWidth = (w)=>(width/100)*w
class GenerCard extends React.Component{
    render(generName){
        return(
            <View style={styles.container}>
                <Text>
                    {generName}

                </Text>
            </View>

        )
    }
}

const styles=StyleSheet.create({
    container:{
       
        justifyContent:"center",
        alignItem:"center",
        borderRadius:5,
        backgroundColor:"white",
        paddingVertical:8,
        elevation:3,
        marginVertical:2,
        width:setWidth(25),



    }

})

export default GenerCard