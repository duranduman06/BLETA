import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from '../myAccount/styles'
import { useNavigation } from '@react-navigation/native';


export default function MyAccount() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigation = useNavigation();

  const goToHomePage = () => {
    navigation.navigate("homePage");
  }

  const goToLogin = () => {
    navigation.navigate("login");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        {isLoggedIn ? <Text> Duran Duman</Text> :
          (<>
            <View style={styles.textContainer}>
              <Text style={styles.myAccountText}>My Account</Text>
              <Text style={styles.descText}>
                When you log in or create a new service request, you can edit your profile here.</Text>
            </View>
            <TouchableOpacity style={styles.loginButton} onPress={goToLogin}>
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.getServiceButton} onPress={goToHomePage}>
              <Text style={styles.getServiceText}>Get Service</Text>
            </TouchableOpacity>
          </>)
        }
      </View>
    </SafeAreaView>
  )
}
