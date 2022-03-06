import React, { Component } from 'react'
import {FlatList, ActivityIndicator,Text, View ,ImageBackground,StyleSheet,Image,TextInput,TouchableOpacity,TouchableHighlight } from 'react-native'

export default class Category extends Component {
    constructor(){
        super();
        this.state={
            loader:false,
            DATA:[]
        }
    }
    getData(){
        this.setState({loader:true})
        fetch('https://api.sampleapis.com/coffee/hot')
        .then((response)=>response.json())
        .then((response)=>{
            if(response.lenght>0){
                this.setState({DATA:response})
            }
            this.setState({loader:false})
    console.log('Your Response is:',response)})
        .catch((error)=>{
            this.setState({loader:false})
            console.log('Error Is:',error)
        })
    }
    componentDidMount(){
        this.getData()
    }

    render() {
        const renderItem = ({item}) => (
            <View style={styles.itemContainer}> 
            <Text>
              {item.title}  
            </Text>
            </View>
        )
        return (
            <View style={styles.container}>
                <ActivityIndicator size='large' color='green' animating={this.state.loader}/>
            
               
                {/* <ImageBackground source={require('../img/bg.jpg')} style={styles.imagBackground}>
                <Image source={require('../img/images.png')} style={styles.imgLogo}></Image> */}
                <Text> Category </Text>
                {/* <TextInput placeholder='Username' style={styles.userName}></TextInput>
                <TextInput placeholder='Password' style={styles.inputPassword}></TextInput>
                <TouchableOpacity style-={styles.buttonView}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                
                </ImageBackground> */}
                <FlatList style ={{width:'95%',marginTop:10}}
                data={this.state.DATA} renderItem={renderItem}/>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#666666',
        alignItems:"center",
        justifyContent:'center'
        
    },
    imagBackground:{
        height:"100%",
        width:'100%',
        alignItems:'center',
        // justifyContent:'cemter',
    },
    imgLogo:{
        marginTop:100,
        // paddingVertical:100,
        height:50,
        width:50,
    },
    userName:{
        borderBottomColor:'black',
        borderWidth:2
    },
    inputPassword:{
        marginTop:20,
        borderBottomColor:'black',
        borderWidth:2
    },
    buttonView:{
        borderRadius:20,
        borderWidth:8,
    },
    buttonText:{
        fontWeight:'bold',
        color:'white'
    },
    itemContainer:{
        width:'100%',
        padding:10,
        backgroundColor:'white'
        }
})
