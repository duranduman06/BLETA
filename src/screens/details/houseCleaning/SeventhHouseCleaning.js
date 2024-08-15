import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { PhoneHeight, PhoneWidth } from '../../../constants/config';
import { useNavigation, useRoute } from '@react-navigation/native';

const SeventhHouseCleaning = () => {
  const navigation = useNavigation();
  const route = useRoute();

  // Get data from the previous screen (SixthHouseCleaning)
  const {
    houseSize,
    bathrooms,
    pet,
    additionalDetails,
    address,
    date,
    time,
  } = route.params || {};

  const AcceptedFunc = () => {
    Alert.alert('Your Reservation Successfully Finalized');
    navigation.navigate('homePage');
  };

  return (
    <SafeAreaView>
      <Text style={{ alignSelf: 'center', fontFamily: 'PJMasks-Bold' }}>House Cleaning</Text>
      <View style={{ width: PhoneWidth, height: 2.5, backgroundColor: 'purple', marginTop: 5 }}></View>
      <View style={styles.timePriceBox}>
        <Text style={{ fontSize: 14, fontFamily: 'PJMasks-Regular' }}>4 Hours per week</Text>
        <Text style={{ fontSize: 14, fontFamily: 'PJMasks-Regular' }}>$ 900</Text>
      </View>
      <View style={styles.bottomBigBox}>
        <Text style={styles.titleBig}>Finalize Your Reservation</Text>
        <Text style={styles.description}>
          Please confirm the details you provided before completing the process. Make sure the date and time are correct for scheduling your house cleaning service.
        </Text>
        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>Provided Info from You,</Text>
          <Text style={styles.infoText}>House Size: {houseSize}</Text>
          <Text style={styles.infoText}>Number of Bathrooms: {bathrooms}</Text>
          <Text style={styles.infoText}>Do You Have Pets?: {pet}</Text>
          <Text style={styles.infoText}>Additional Details: {additionalDetails}</Text>
          <Text style={styles.infoText}>Place: {address}</Text>
          <Text style={styles.infoText}>Date: {date}</Text>
          <Text style={styles.infoText}>Time: {time}</Text>
        </View>
      </View>
      <View style={styles.buttonBox}>
        <TouchableOpacity style={styles.button} onPress={AcceptedFunc}>
          <Text style={styles.buttonText}>Finalize and Accept</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  timePriceBox: {
    width: PhoneWidth,
    height: PhoneHeight * 0.075,
    borderBottomWidth: 0.5,
    shadowColor: "#ededed",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  bottomBigBox: {
    width: PhoneWidth,
    height: PhoneHeight * 0.75,
    padding: 10,
  },
  titleBig: {
    fontSize: 20,
    fontFamily: 'PJMasks-Bold',
    color: 'black',
    alignSelf: 'center',
  },
  description: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'PJMasks-Regular',
    marginTop: 10,
  },
  infoBox: {
    borderRadius: PhoneWidth * 0.01,
    padding: 15,
    marginTop: 20,
    backgroundColor: 'white',
    elevation: 3,
  },
  infoTitle: {
    fontSize: 18,
    fontFamily: 'PJMasks-Bold',
    color: 'black',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    fontFamily: 'PJMasks-Regular',
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray',
    paddingBottom: 5,
    marginBottom: 10,
  },
  buttonBox: {
    borderWidth: 0,
    borderColor: '#b700ff',
    height: PhoneHeight * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#b700ff',
    width: '90%',
    height: '80%',
    borderRadius: PhoneWidth * 0.01,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Library 3 am',
    color: 'white',
  }
});

export default SeventhHouseCleaning;
