import React, { Component } from 'react'
import { Text, View,TouchableOpacity } from 'react-native'

export default class Home extends Component {
  render() {
    return (
      <View>
        <Text > Home Page </Text>
        <TouchableOpacity>
            <Text>Login</Text>
        </TouchableOpacity>
      </View>
    )
  }
}