import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { PhoneHeight, PhoneWidth } from '../../../constants/config';

const FirstHouseCleaning = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const buttonData = [
    '1+0', '1+1', '2+1', '3+1', '4+1', '5+1'
  ];

  const handlePress = (index) => {
    setSelectedIndex(index);
  };

  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      onPress={() => handlePress(index)}
      style={[
        styles.button,
        { borderColor: selectedIndex === index ? '#b700ff' : 'gray' },
        { backgroundColor: selectedIndex === index ? 'rgba(183, 0, 255, 0.4)' : 'white' }

      ]}
    >
      <Text style={[
        styles.buttonText,
        { color: selectedIndex === index ? 'white' : 'black' },
      ]}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView>
      <Text style={{ alignSelf: 'center', fontFamily: 'PJMasks-Bold' }}>House Cleaning</Text>
      <View style={{ width: PhoneWidth * 0.2, height: 2.5, backgroundColor: 'purple', marginTop: 5 }}></View>
      <View style={styles.timePriceBox}>
        <Text style={{ fontSize: 14, fontFamily: 'PJMasks-Regular', }}>4 Hours per week</Text>
        <Text style={{ fontSize: 14, fontFamily: 'PJMasks-Regular', }}>$ 200</Text>
      </View>
      <View style={styles.bottomBigBox}>
        <Text style={styles.titleBig}>How Big Your House?</Text>
        <Text style={styles.description}>
          We clean and organize the house in detail. Within the scope of our services, cleaning the floor and windows, dusting, emptying the garbage and kitchen cleaning using the materials at home.
        </Text>
        <FlatList
          data={buttonData}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.flatListContainer}
        />
      </View>
      <View style={styles.continueBox}>
        <TouchableOpacity style={styles.continueBtn}>
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
    borderColor: 'red',
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
  flatListContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  button: {
    borderWidth: 1,
    borderRadius: 0,
    padding: 10,
    marginVertical: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'PJMasks-Regular',
  },
  continueBox: {
    // other styles,
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
    fontFamily: 'PJMasks-Bold',
  },
  continueBtnTxt: {
    fontSize: 18,
    fontFamily: 'Library 3 am',
    color: 'white',
  }
});

export default FirstHouseCleaning;
