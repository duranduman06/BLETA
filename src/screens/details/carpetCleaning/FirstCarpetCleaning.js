import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { PhoneHeight, PhoneWidth } from '../../../constants/config';

const FirstCarpetCleaning = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const buttonData = [
    'Pick up and deliver from address', 'Clean carpet at home', 'Clean carpet at office'
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
      <Text style={{ alignSelf: 'center', fontFamily: 'PJMasks-Bold' }}>Carpet Cleaning</Text>
      <View style={{ width: PhoneWidth * 0.2, height: 2.5, backgroundColor: 'purple', marginTop: 5 }}></View>
      <View style={styles.timePriceBox}>
        <Text style={{ fontSize: 14, fontFamily: 'PJMasks-Regular', }}>4 Hours per week</Text>
        <Text style={{ fontSize: 14, fontFamily: 'PJMasks-Regular', }}>$ 200</Text>
      </View>
      <View style={styles.bottomBigBox}>
        <Text style={styles.titleBig}>Where would you like your carpet to be cleaned?</Text>
        <Text style={styles.description}>
          We offer comprehensive carpet cleaning services. Our services include pickup and delivery, home cleaning, and office cleaning, using high-quality materials and equipment.
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

export default FirstCarpetCleaning;