import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomePage from './src/screens/homePage/HomePage';
import MyAccount from './src/screens/myAccount/MyAccount';
import Login from './src/screens/login/Login';
import AccountInfos from './src/screens/accountInfos/AccountInfos';
import MyWorkList from './src/screens/myWorkList/MyWorkList';
import Notifications from './src/screens/notifications/Notifications';
import ChooseLoginType from './src/screens/chooseLoginType/ChooseLoginType';
import FirstHouseCleaning from './src/screens/details/houseCleaning/FirstHouseCleaning';
import HouseCleaning from './src/screens/details/houseCleaning/HouseCleaning';
import IntercityMoving from './src/screens/details/intercityMoving/IntercityMoving';
import CarpetCleaning from './src/screens/details/carpetCleaning/CarpetCleaning';
import FridgeMoving from './src/screens/details/fridgeMoving/FridgeMoving';
import SofaCleaning from './src/screens/details/sofaCleaning/SofaCleaning';
import SofaMoving from './src/screens/details/sofaMoving/SofaMoving';

const Stack = createStackNavigator();

const RouterComp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator name='mainStack' initialRouteName='homePage'>
        <Stack.Screen name='homePage' options={{ headerShown: false, animationEnabled:false }} component={HomePage} />
        <Stack.Screen name='myWorkList' options={{ headerShown: false,  animationEnabled:false}} component={MyWorkList} />
        <Stack.Screen name='notifications' options={{ headerShown: false,  animationEnabled:false}} component={Notifications} />
        <Stack.Screen name='myAccount' options={{ headerShown: false,  animationEnabled:false}} component={MyAccount} />
        <Stack.Screen name='login' options={{ headerShown: false}} component={Login} />
        <Stack.Screen name='accountInfos' options={{ headerShown: false}} component={AccountInfos} />
        <Stack.Screen name='chooseLoginType' options={{ headerShown: false}} component={ChooseLoginType} />
        <Stack.Screen name='firstHouseCleaning' options={{ headerShown: false}} component={FirstHouseCleaning} />
        <Stack.Screen name='houseCleaning' options={{ headerShown: false}} component={HouseCleaning} />
        <Stack.Screen name='intercityMoving' options={{ headerShown: false}} component={IntercityMoving} />
        <Stack.Screen name='carpetCleaning' options={{ headerShown: false}} component={CarpetCleaning} />
        <Stack.Screen name='fridgeMoving' options={{ headerShown: false}} component={FridgeMoving} />
        <Stack.Screen name='sofaCleaning' options={{ headerShown: false}} component={SofaCleaning} />
        <Stack.Screen name='sofaMoving' options={{ headerShown: false}} component={SofaMoving} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RouterComp;