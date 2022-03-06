


import React from "react"
import {View,Text,TouchableOpacity} from "react-native"
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from "../Screen/Home"
import Otp from "../Screen/otp"
import studentdetails from "../Screen/studentdetails"
import Schoolboard from "../Screen/Schoolboard"
import Apptour from "../Screen/Apptour"
import Home1 from "../Screen/Home1"

const Stack = createStackNavigator()


function Mystack(){
  return(
    <Stack.Navigator>
      <Stack.Screen
      name='Home'
      component={Home}
      options={{headerShown:false}}
      />
      <Stack.Screen
      name='Otp'
      component={Otp}
      options={{headerShown:false}}
      />
      <Stack.Screen
      name='studentdetails'
      component={studentdetails}
      options={{headerShown:false}}
      />
      <Stack.Screen
      name='Schoolboard'
      component={Schoolboard}
      options={{headerShown:false}}/>
       <Stack.Screen
      name='Apptour'
      component={Apptour}
      options={{headerShown:false}}/>
      <Stack.Screen
      name='Home1'
      component={Home1}
      options={{headerShown:false}}/>
      
      
    </Stack.Navigator>
  )
}


export default function App() {
  return(
    <NavigationContainer>
     <Mystack/>
    </NavigationContainer>
  )
}