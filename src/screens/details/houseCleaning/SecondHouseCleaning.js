import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { PhoneHeight, PhoneWidth } from '../../../constants/config';
import { useNavigation, useRoute } from '@react-navigation/native';

const SecondHouseCleaning = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const navigation = useNavigation();
  const route = useRoute();

  // Get data from the previous screen
  const { houseSize } = route.params || {};

  const buttonData = [
    '1 Bathroom', '2 Bathrooms'
  ];

  const handlePress = (index) => {
    setSelectedIndex(index);
  };

  const handleContinue = () => {
    if (selectedIndex !== null) {
      const selectedBathroom = buttonData[selectedIndex];
      navigation.navigate('thirdHouseCleaning', {
        houseSize,
        bathrooms: selectedBathroom,
      });
    } else {
      alert('Please select the number of bathrooms.');
    }
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
        { color: selectedIndex === index ? 'white' : 'black' }
      ]}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView>
      <Text style={{ alignSelf: 'center', fontFamily: 'PJMasks-Bold' }}>House Cleaning</Text>
      <View style={{ width: PhoneWidth * 0.28, height: 2.5, backgroundColor: 'purple', marginTop: 5 }}></View>
      <View style={styles.timePriceBox}>
        <Text style={{ fontSize: 14, fontFamily: 'PJMasks-Regular' }}>4 Hours per week</Text>
        <Text style={{ fontSize: 14, fontFamily: 'PJMasks-Regular' }}>$ 900</Text>
      </View>
      <View style={styles.bottomBigBox}>
        <Text style={styles.titleBig}>How Many Bathrooms?</Text>
        <Text style={styles.description}>
          We offer detailed cleaning for each bathroom. This includes scrubbing sinks, tubs, and toilets, cleaning mirrors, and ensuring that all surfaces are spotless. Our service also covers the cleaning of floors and tiles, and the removal of any soap scum or mildew.
        </Text>
        <FlatList
          data={buttonData}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.flatListContainer}
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
    borderRadius: 5,
  },
  continueBtnTxt: {
    fontSize: 18,
    fontFamily: 'Library 3 am',
    color: 'white',
  },
});

export default SecondHouseCleaning;
