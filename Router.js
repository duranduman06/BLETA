import * as React from 'react';
import { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomePage from './src/screens/homePage/HomePage';
import MyAccount from './src/myAccount/MyAccount';

const Stack  = createStackNavigator();

const RouterComp = () => {
    return (
      <NavigationContainer>
          <Stack.Navigator name = 'mainStack' initialRouteName = 'homePage'>
            <Stack.Screen name = 'homePage' options = {{headerShown: false}} component = {HomePage}/>
            <Stack.Screen name = 'myAccount' options = {{headerShown: false}} component = {MyAccount}/>
          </Stack.Navigator>
      </NavigationContainer>
    )
  }

  export default RouterComp;