/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Splash from './components/Splash'
import Login from './components/Login'
import New from './components/New'
import Customers from './components/Customers'

const Stack=createStackNavigator()
export default class App extends Component {
  componentDidMount(){
    
  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Splash}/>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="New" component={New} />
          <Stack.Screen name="Customers" component={Customers} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

