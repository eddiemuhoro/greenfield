import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../components/home/Home';
import Login from '../components/Login';
import { Entypo } from '@expo/vector-icons';
import { COLORS } from '../constants';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Explore from '../components/explore/Explore';

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <Tab.Navigator
      initialRouteName='Explore'
      screenOptions={{
        tabBarActiveTintColor: COLORS.green,
        tabBarInactiveTintColor: COLORS.gray,
        tabBarStyle: {
          
         
        },
      }}
    >

      <Tab.Screen name="Hm"
        //hide header
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home"
              size={24}
              color={color}

            />
          ),
          tabBarLabel: () => { return null },

        }}

        component={Home} />

      <Tab.Screen name="Explore"
        //hide header
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="explore"
              size={24}
              color={color}
            />
          ),
          tabBarLabel: () => { return null },

        }}

        component={Explore} />

      <Tab.Screen name="Messages"
        //hide header
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="message"
              size={24}
              color={color}

            />
          ),
          tabBarLabel: () => { return null },

        }}

        component={Home} />

      <Tab.Screen name="Notifications"
        //hide header
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-notifications" size={24} color={color} />
          ),
          tabBarLabel: () => { return null },

        }}

        component={Home} />
      <Tab.Screen name="Profile"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="user"
              size={24}
              color={color}
            />
          ),
          tabBarLabel: () => { return null }

        }}
        component={Login} />
    </Tab.Navigator>
  )
}

export default BottomNav

const styles = StyleSheet.create({})