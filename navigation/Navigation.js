import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from '../components/Login'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../components/home/Home';
import BottomNav from './BottomNav';

const Stack = createNativeStackNavigator();

const StackNavs = () => {
  return (
   
    <Stack.Navigator
    initialRouteName='Home'
    >
    <Stack.Screen
      name="Welcome"
      component={Login}
      options={
        {headerShown: false}
    }
    />
    <Stack.Screen name="Home"
    //hide header
    options={{headerShown: false}}
    
     component={BottomNav} />
  </Stack.Navigator>
   
  )
}

export default StackNavs

const styles = StyleSheet.create({})