import { Text, View, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { useRoute, useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import styles from '../serviceProviderAccount/styles'
import ServiceProviderBottomBar from '../../components/ServiceProviderBottomBar'

export default function ServiceProviderAccount() {
    const route = useRoute();
    const navigation = useNavigation();
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    useEffect(() => {
      if (route.params?.isLoggedIn) {
        setIsLoggedIn(route.params.isLoggedIn);
      }
    }, [route.params?.isLoggedIn]);

    const logOutFunc = () => {
      setIsLoggedIn(false);
      navigation.navigate("chooseLoginType");
    };

    const GoToMyServices = ()=>{
      navigation.navigate("serviceProviderServices");
    };

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.subContainer}>
              <ScrollView style={styles.accountContainer}>
                <View style={styles.namePhotoContainer}>
                  <Image
                    source={require('../../assets/icons/user1.png')}
                    style={{ width: 120, height: 120, marginBottom: 15 }}
                  />
                  <Text style={styles.accNameText}>Adam Sound</Text>
                </View>
                <View style={styles.accInfoContainer}>
                  <TouchableOpacity style={styles.accOption} onPress={()=>navigation.navigate('serviceProviderAccountInfos')}>
                    <Text style={styles.accInfoText}>Account Informations</Text>
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
                  <TouchableOpacity style={styles.accOption} onPress={GoToMyServices}>
                    <Text style={styles.accInfoText}>My Services</Text>
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
        </View>
        <ServiceProviderBottomBar />
      </SafeAreaView>
    )
  }