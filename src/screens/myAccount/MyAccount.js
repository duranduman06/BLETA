import { SafeAreaView, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from '../myAccount/styles'
import { useNavigation, useRoute } from '@react-navigation/native';
import BottomBar from '../../components/BottomBar';


export default function MyAccount() {
  const route = useRoute();
  const navigation = useNavigation();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // useState(true);

  useEffect(() => {
    if (route.params?.isLoggedIn) {
      setIsLoggedIn(route.params.isLoggedIn);
    }
  }, [route.params?.isLoggedIn]);

  const goToHomePage = () => {
    navigation.navigate("homePage");
  };

  const goToLogin = () => {
    navigation.navigate("login");
  };

  const logOutFunc = () => {
    setIsLoggedIn(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        {isLoggedIn ?
          (<>
            <ScrollView style={styles.accountContainer}>

              <View style={styles.namePhotoContainer}>
                <Image
                  source={require('../../assets/icons/user1.png')}
                  style={{ width: 120, height: 120, marginBottom: 15 }}
                />
                <Text style={styles.accNameText}>Duran Duman</Text>
              </View>

              <View style={styles.accInfoContainer}>
                <TouchableOpacity style={styles.accOption}>
                  <Text style={styles.accInfoText}>Account Details</Text>
                  <Image
                    source={require('../../assets/icons/next.png')}
                    style={styles.leftArrow}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.accOption}>
                  <Text style={styles.accInfoText}>Change my password</Text>
                  <Image
                    source={require('../../assets/icons/next.png')}
                    style={{ width: 25, height: 25, }}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.accInfoContainer}>
                <Text style={styles.accInfoHeader}>Payment Options</Text>
                <TouchableOpacity style={styles.accOption}>
                  <Text style={styles.accInfoText}>Add credit card</Text>
                  <Image
                    source={require('../../assets/icons/next.png')}
                    style={{ width: 25, height: 25, }}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.accInfoContainer}>
                <Text style={styles.accInfoHeader}>Help</Text>
                <TouchableOpacity style={styles.accOption}>
                  <Text style={styles.accInfoText}>Give service</Text>
                  <Image
                    source={require('../../assets/icons/next.png')}
                    style={{ width: 25, height: 25, }}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.accOption}>
                  <Text style={styles.accInfoText}>Recommend to your friends</Text>
                  <Image
                    source={require('../../assets/icons/next.png')}
                    style={{ width: 25, height: 25, }}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.accOption}>
                  <Text style={styles.accInfoText}>Rate bleta</Text>
                  <Image
                    source={require('../../assets/icons/next.png')}
                    style={{ width: 25, height: 25, }}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.accOption}>
                  <Text style={styles.accInfoText}>Help Center</Text>
                  <Image
                    source={require('../../assets/icons/next.png')}
                    style={{ width: 25, height: 25, }}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.accOption}>
                  <Text style={styles.accInfoText}>Contact bleta</Text>
                  <Image
                    source={require('../../assets/icons/next.png')}
                    style={{ width: 25, height: 25, }}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.accOption}>
                  <Text style={styles.accInfoText}>Data and privacy</Text>
                  <Image
                    source={require('../../assets/icons/next.png')}
                    style={{ width: 25, height: 25, }}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.accOption} onPress={logOutFunc}>
                  <Text style={styles.accInfoText}>Log out</Text>
                  <Image
                    source={require('../../assets/icons/next.png')}
                    style={{ width: 25, height: 25, }}
                  />
                </TouchableOpacity>
              </View>
            </ScrollView>
          </>) :
          (<>
            <View style={styles.textContainer}>
              <Text style={styles.myAccountText}>My Account</Text>
              <Text style={styles.descText}>
                When you log in or create a new service request, you can edit your profile here.
              </Text>
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
      <BottomBar />
    </SafeAreaView>
  )
}
