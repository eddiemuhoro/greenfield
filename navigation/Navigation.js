import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from '../components/Login'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../components/home/Home';

const Stack = createNativeStackNavigator();

const StackNavs = () => {
  return (
   
    <Stack.Navigator>
    <Stack.Screen
      name="Welcome"
      component={Login}
      options={
        {title: 'Welcome'}
    }
    />
    <Stack.Screen name="Home"
    //hide header
    options={{headerShown: false}}
    
     component={Home} />
  </Stack.Navigator>
   
  )
}

export default StackNavs

const styles = StyleSheet.create({})