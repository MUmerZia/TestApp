import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useState, useEffect, startTransition} from 'react';   
import {Text, Platform} from 'react-native'; 
import LoginScreen from '../screens/login';
import HomeScreen from '../screens/home';

const Stack = createNativeStackNavigator(); 

const UserStack = () => {
  return ( 
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="login">
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="home" component={HomeScreen} />
    </Stack.Navigator> 
  );
};
 
 
export  {UserStack}; 
