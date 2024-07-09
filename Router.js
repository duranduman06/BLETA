import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomePage from './src/screens/homePage/HomePage';
import MyAccount from './src/screens/myAccount/MyAccount';
import Login from './src/screens/login/Login';

const Stack = createStackNavigator();

const RouterComp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator name='mainStack' initialRouteName='myAccount'>
        <Stack.Screen name='homePage' options={{ headerShown: false }} component={HomePage} />
        <Stack.Screen name='myAccount' options={{ headerShown: false }} component={MyAccount} />
        <Stack.Screen name='login' options={{ headerShown: false }} component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RouterComp;