import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { PhoneHeight, PhoneWidth } from '../../../constants/config';
import { useNavigation, useRoute } from '@react-navigation/native';

const FifthHouseCleaning = () => {
  const [address, setAddress] = useState('');
  const navigation = useNavigation();
  const route = useRoute();

  // Get data from the previous screen (FourthHouseCleaning)
  const { houseSize, bathrooms, pet, additionalDetails } = route.params || {};

  const handleContinue = () => {
    if (!address.trim()) {
      // Show alert if address is empty
      Alert.alert(
        'Missing Information',
        'Please enter the address where the cleaning will take place.',
        [{ text: 'OK' }]
      );
    } else {
      navigation.navigate('sixthHouseCleaning', {
        houseSize,
        bathrooms,
        pet,
        additionalDetails,
        address,
      });
    }
  };

  return (
    <SafeAreaView>
      <Text style={{ alignSelf: 'center', fontFamily: 'PJMasks-Bold' }}>House Cleaning</Text>
      <View style={{ width: PhoneWidth * 0.68, height: 2.5, backgroundColor: 'purple', marginTop: 5 }}></View>
      <View style={styles.timePriceBox}>
        <Text style={{ fontSize: 14, fontFamily: 'PJMasks-Regular' }}>4 Hours per week</Text>
        <Text style={{ fontSize: 14, fontFamily: 'PJMasks-Regular' }}>$ 900</Text>
      </View>
      <View style={styles.bottomBigBox}>
        <Text style={styles.titleBig}>Where will the cleaning take place?</Text>
        <Text style={styles.description}>
          Please enter the address where the cleaning will be performed. Providing accurate address details will help us ensure that we send our team to the correct location.
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter address..."
          multiline
          numberOfLines={4}
          value={address}
          onChangeText={setAddress}
        />
      </View>
      <View style={styles.continueBox}>
        <TouchableOpacity style={styles.continueBtn} onPress={handleContinue}>
          <Text style={styles.continueBtnTxt}>Continue</Text>
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
  },
  bottomBigBox: {
    borderWidth: 0,
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
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
    textAlignVertical: 'top',
    height: PhoneHeight * 0.15,
  },
  continueBox: {
    borderWidth: 0,
    borderColor: '#b700ff',
    height: PhoneHeight * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  continueBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#b700ff',
    width: '90%',
    height: '80%',
    borderRadius: 5,
  },
  continueBtnTxt: {
    fontSize: 18,
    fontFamily: 'Library 3 am',
    color: 'white',
  },
});

export default FifthHouseCleaning;
