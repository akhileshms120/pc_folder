import React from 'react'
import {View,StyleSheet,Text,Image, ImageBackground} from 'react-native'
import Bot from "../navigation/bottom"

class Home1 extends React.Component{
 render(){
     return(
     <View>           
         <View style={styles.topBar}>
             <Image source={require("../Image/Capture.png")} style={{height:100,width:100,marginLeft:50}}></Image>
             <View style={{borderColor:"green",height:40,width:80,borderWidth:1,marginTop:50,marginLeft:100,justifyContent:'center',alignItems:'center',flexDirection:'row',borderRadius:5}}>
                 <View style={{width:20,height:20,borderRadius:150/2,backgroundColor:"green",flexDirection:'row',}}></View>
                 <Text style={{color:"green"}}>Classes</Text>
               </View>
         </View>
         <View style={{marginLeft:50}}>
           <Text style={{fontSize:15,color:"black"}}>Goodmorning</Text> 
           <Text style={{fontWeight:'bold',color:"black",fontSize:20}}>Aron Taylor</Text> 
         </View>
         <View style={{height:60,width:280,borderRadius:5,marginLeft:50,backgroundColor:"#002333",justifyContent:'center',marginTop:40}}>
             <Text style={{color:"white",marginLeft:20}}>Class</Text>
             <Text style={{color:"white",marginLeft:20}}>Plust Two Science</Text>
         </View>
         <View style={{flexDirection:'row',marginLeft:40}}>
             <View style={{borderColor:"green",height:40,width:95,borderWidth:1,marginTop:50,marginLeft:10,justifyContent:'center',alignItems:'center',flexDirection:'row',borderRadius:5}}>
                 <View style={{width:20,height:20,borderRadius:150/2,backgroundColor:"green",flexDirection:'row',}}></View>
                 <Text style={{color:"green"}}>Biology</Text>
              </View>
              <View style={{borderColor:"green",height:40,width:95,borderWidth:1,marginTop:50,marginLeft:10,justifyContent:'center',alignItems:'center',flexDirection:'row',borderRadius:5}}>
                 <View style={{width:20,height:20,borderRadius:150/2,backgroundColor:"green",flexDirection:'row',}}></View>
                 <Text style={{color:"green"}}>Physics</Text>
              </View>
              <View style={{borderColor:"green",height:40,width:95,borderWidth:1,marginTop:50,marginLeft:10,justifyContent:'center',alignItems:'center',flexDirection:'row',borderRadius:5}}>
                 <View style={{width:20,height:20,borderRadius:150/2,backgroundColor:"green",flexDirection:'row',}}></View>
                 <Text style={{color:"green"}}>Chemistry</Text>
              </View>
              <View style={{borderColor:"green",height:40,width:80,borderWidth:1,marginTop:50,marginLeft:10,justifyContent:'center',alignItems:'center',flexDirection:'row',borderRadius:5}}>
                 <View style={{width:20,height:20,borderRadius:150/2,backgroundColor:"green",flexDirection:'row',}}></View>
                 <Text style={{color:"green"}}>Classes</Text>
              </View>    
         </View>
         <Text style={{marginLeft:40,marginTop:20,color:"black"}}>Recent Courses</Text>
         
         <View style={{flexDirection:'row'}} >
             <ImageBackground source={require("../Image/R.png")} style={{height:100,width:200,marginLeft:50,opacity:1}}>
             <View style={styles.child}><Text style={{color:"white",marginBottom:10,marginLeft:40}}>Course Title</Text></View>    
             </ImageBackground>
             <ImageBackground source={require("../Image/OIP.png")} style={{height:100,width:200,marginLeft:30,opacity:1}}>
             <View style={styles.child}><Text style={{color:"white",marginBottom:10,marginLeft:40}}>Course Title</Text></View>    
             </ImageBackground>
          </View>
          <View style={{marginTop:15,flexDirection:'row'}}> 
               <View style={{height:250,width:220,backgroundColor:"#002333",marginLeft:40,justifyContent:'center',alignItems:'center'}}>
                  <View style={{width:120,height:120,borderRadius:350/3,backgroundColor:"0d4e6b",}}></View>
                  <Text style={{color:"white",marginLeft:20,marginBottom:20}}>Tragert Live Classes</Text>
                  <Text>Live classes by best</Text>
                </View>
                <View style={{height:250,width:220,backgroundColor:"#002333",marginLeft:40,justifyContent:'center',alignItems:'center'}}>
                  <View style={{width:120,height:120,borderRadius:350/3,backgroundColor:"0d4e6b",}}></View>
                  <Text style={{color:"white",marginLeft:20,marginBottom:20}}>Tragert Live Classes</Text>
                  <Text>Live classes by best</Text>
                </View>
               
                

          </View>           
     </View> 
         
    

        )
    }
}

export default Home1

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"

    },
    topBar:{
        flexDirection:'row'
    },
    child: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent:'flex-end'
      }
})




{/* <View >
              {/* <Image source={require("../Image/R.jpg")}style={{height:100,width:200,marginLeft:40}}>
                  
              </Image>
              <Text>Course Title</Text> */}
        //   </View>   */}