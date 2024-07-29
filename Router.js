import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomePage from './src/screens/homePage/HomePage';
import MyAccount from './src/screens/myAccount/MyAccount';
import Login from './src/screens/login/Login';
import AccountInfos from './src/screens/accountInfos/AccountInfos';
import MyWorkList from './src/screens/myWorkList/MyWorkList';
import Notifications from './src/screens/notifications/Notifications';
import FirstHouseCleaning from './src/screens/details/houseCleaning/FirstHouseCleaning';
import HouseCleaning from './src/screens/details/houseCleaning/HouseCleaning';

const Stack = createStackNavigator();

const RouterComp = () => {
  return (
    <NavigationContainer>

      <Stack.Navigator name='mainStack' initialRouteName='houseCleaning'>
        <Stack.Screen name='homePage' options={{ headerShown: false, animationEnabled:false }} component={HomePage} />
        <Stack.Screen name='myWorkList' options={{ headerShown: false,  animationEnabled:false}} component={MyWorkList} />
        <Stack.Screen name='notifications' options={{ headerShown: false,  animationEnabled:false}} component={Notifications} />
        <Stack.Screen name='myAccount' options={{ headerShown: false,  animationEnabled:false}} component={MyAccount} />
        <Stack.Screen name='login' options={{ headerShown: false}} component={Login} />
        <Stack.Screen name='accountInfos' options={{ headerShown: false}} component={AccountInfos} />
        <Stack.Screen name='firstHouseCleaning' options={{ headerShown: false}} component={FirstHouseCleaning} />
        <Stack.Screen name='houseCleaning' options={{ headerShown: false}} component={HouseCleaning} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RouterComp;