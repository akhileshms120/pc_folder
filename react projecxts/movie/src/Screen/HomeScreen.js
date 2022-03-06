import { StatusBar ,View,Text,ScrollView,StyleSheet,FlatList} from "react-native";
import React from "react"
import GenerCard from "../Components/GenerCard";
import ItemSeprator from "../Components/itemSepratorComponent";

const Geners=["All","Action","Comedy","Romance","Horror","Sci-Fi"]

class HomeScreen extends React.Component{
    render(){
        return(
            <ScrollView contentContainerStyle={styles.container}>
                <StatusBar style="auto" translucent={false}/>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerTitle}>NowPlaying</Text>
                    <Text style={styles.headerSubtitle}>View All</Text>
                </View>
                <View style={styles.generListContiner}>
                <FlatList data={Geners} horizontal
                showsHorizontalScrollIndicator={false}
                 keyExtractor={(item)=>item}
                 ItemSepratorComponent ={()=><ItemSeprator width={20}/>} 
                 ListHeaderComponent={()=><ItemSeprator width={20}/>}
                 renderItem={({item}) => 
                
                        <GenerCard generName={item}/>}
                        />      
                </View>
            </ScrollView>

        )
    }

}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#F5F7FA"

    },
    headerContainer:
    {
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal:20,
        paddingVertical:10

    },
    headerTitle:{
        fontSize:28

    },
    headerSubtitle:{
        fontSize:13,
        color:'#057dfe',
    },
    generListContiner:{
        paddingVertical:10
    }
})


export default HomeScreen