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
import HouseCleaning from './src/screens/details/houseCleaning/HouseCleaning';
import IntercityMoving from './src/screens/details/intercityMoving/IntercityMoving';
import CarpetCleaning from './src/screens/details/carpetCleaning/CarpetCleaning';
import FridgeMoving from './src/screens/details/fridgeMoving/FridgeMoving';
import SofaCleaning from './src/screens/details/sofaCleaning/SofaCleaning';
import SofaMoving from './src/screens/details/sofaMoving/SofaMoving';
import FirstHouseCleaning from './src/screens/details/houseCleaning/FirstHouseCleaning';
import SecondHouseCleaning from './src/screens/details/houseCleaning/SecondHouseCleaning';
import ThirdHouseCleaning from './src/screens/details/houseCleaning/ThirdHouseCleaning';
import FourthHouseCleaning from './src/screens/details/houseCleaning/FourthHouseCleaning';
import FifthHouseCleaning from './src/screens/details/houseCleaning/FifthHouseCleaning';
import SixthHouseCleaning from './src/screens/details/houseCleaning/SixthHouseCleaning';
import SeventhHouseCleaning from './src/screens/details/houseCleaning/SeventhHouseCleaning';
import FirstCarpetCleaning from './src/screens/details/carpetCleaning/FirstCarpetCleaning';
import FirstSofaCleaning from './src/screens/details/sofaCleaning/FirstSofaCleaning';
import FirstFridgeMoving from './src/screens/details/fridgeMoving/FirstFridgeMoving';
import FirstSofaMoving from './src/screens/details/sofaMoving/FirstSofaMoving';
import FirstIntercityMoving from './src/screens/details/intercityMoving/FirstIntercityMoving';
import ServiceProviderLogin from './src/screens/serviceProviderLogin/ServiceProviderLogin';
import ServiceProviderAccount from './src/screens/serviceProviderAccount/ServiceProviderAccount';
import ServiceProviderManagement from './src/screens/serviceProviderManagement/ServiceProviderManagement';
import ServiceProviderAccountInfos from './src/screens/serviceProviderAccountInfos/ServiceProviderAccountInfos';
import ServiceProviderServices from './src/screens/serviceProviderServices/ServiceProviderServices';
import ServiceWanterDetails from './src/screens/serviceWanterDetails/ServiceWanterDetails';

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
        <Stack.Screen name='serviceProviderLogin' options={{ headerShown: false}} component={ServiceProviderLogin} />
        <Stack.Screen name='serviceProviderAccount' options={{ headerShown: false}} component={ServiceProviderAccount} />
        <Stack.Screen name='serviceProviderManagement' options={{ headerShown: false}} component={ServiceProviderManagement} />
        <Stack.Screen name='serviceProviderAccountInfos' options={{ headerShown: false}} component={ServiceProviderAccountInfos} />
        <Stack.Screen name='serviceProviderServices' options={{ headerShown: false}} component={ServiceProviderServices} />
        <Stack.Screen name='ServiceWanterDetails' options={{ headerShown: false}} component={ServiceWanterDetails} />
        <Stack.Screen name='houseCleaning' options={{ headerShown: false}} component={HouseCleaning} />
        <Stack.Screen name='intercityMoving' options={{ headerShown: false}} component={IntercityMoving} />
        <Stack.Screen name='carpetCleaning' options={{ headerShown: false}} component={CarpetCleaning} />
        <Stack.Screen name='fridgeMoving' options={{ headerShown: false}} component={FridgeMoving} />
        <Stack.Screen name='sofaCleaning' options={{ headerShown: false}} component={SofaCleaning} />
        <Stack.Screen name='sofaMoving' options={{ headerShown: false}} component={SofaMoving} />
        <Stack.Screen name='firstHouseCleaning' options={{ headerShown: false}} component={FirstHouseCleaning} />
        <Stack.Screen name='secondHouseCleaning' options={{ headerShown: false}} component={SecondHouseCleaning} />
        <Stack.Screen name='thirdHouseCleaning' options={{ headerShown: false}} component={ThirdHouseCleaning} />
        <Stack.Screen name='fourthHouseCleaning' options={{ headerShown: false}} component={FourthHouseCleaning} />
        <Stack.Screen name='fifthHouseCleaning' options={{ headerShown: false}} component={FifthHouseCleaning} />
        <Stack.Screen name='sixthHouseCleaning' options={{ headerShown: false}} component={SixthHouseCleaning} />
        <Stack.Screen name='seventhHouseCleaning' options={{ headerShown: false}} component={SeventhHouseCleaning} />
        <Stack.Screen name='firstCarpetCleaning' options={{ headerShown: false}} component={FirstCarpetCleaning} />
        <Stack.Screen name='firstSofaCleaning' options={{ headerShown: false}} component={FirstSofaCleaning} />
        <Stack.Screen name='firstFridgeMoving' options={{ headerShown: false}} component={FirstFridgeMoving} />
        <Stack.Screen name='firstSofaMoving' options={{ headerShown: false}} component={FirstSofaMoving} />
        <Stack.Screen name='firstIntercityMoving' options={{ headerShown: false}} component={FirstIntercityMoving} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RouterComp;