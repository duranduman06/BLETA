import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, FlatList, Image } from 'react-native'
import React from 'react'
import styles from '../myWorkList/styles'
import BottomBar from '../../components/BottomBar'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

const MyWorkList = () => {
  const navigation = useNavigation();
  const [isThereWork, setIsThereWork] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('My Works');

  // OLD WORKS TEMP DATA
  const oldWorksData = [
    {
      id: 1,
      serviceName: 'House Cleaning',
      serviceGivenBy: 'George Clinton',
      date: '21.07.2024',
    },
    {
      id: 2,
      serviceName: 'Sofa Cleaning',
      serviceGivenBy: 'Adam Sound',
      date: '21.07.2024',
    },
  ];

  // CURRENT WORKS TEMP DATA
  const currentWorksData = [
    {
      id: 1,
      serviceName: 'Fridge Moving',
      date: '30.07.2024',
      serviceGivenBy: 'George Clinton',
      starOfServiceGiver: 4,
      image: require('../../assets/icons/user.png'),
    },
    {
      id: 2,
      serviceName: 'Carpet Cleaning',
      date: '30.07.2024',
      serviceGivenBy: 'Adam Clinton',
      starOfServiceGiver: 3,
      image: require('../../assets/icons/user.png'),
    },
  ];

  // Kategoriye tıklama.
  const handleCategoryPress = (category) => {
    setSelectedCategory(category);
  };

  const renderOldWorkItem = ({ item }) => (
    <View style={styles.oldWorkCard}>
      <Text style={styles.oldWorkServiceName}>{item.serviceName}</Text>
      <Text style={styles.oldServiceGivenByText}>{item.serviceGivenBy}</Text>
      <Text style={styles.oldWorkDateText}>{item.date}</Text>
    </View>
  );

  const renderWorkItem = ({ item }) => (
    <View style={styles.workCard}>
      <Text style={styles.workDateText}>{item.date}</Text>
      <Text style={styles.workServiceName}>{item.serviceName}</Text>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.userImage} />
      </View>
      <Text style={styles.serviceGivenByText}>{item.serviceGivenBy}</Text>
      <TouchableOpacity style={styles.commentButton}>
        <Text style={styles.commentButtonText}>Add Comment</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>

        {isThereWork == false ?
          <>
            {/* NO WORK LIST START */}
            <View style={styles.noWorkListContainer}>
              <View style={styles.noWorkListBox}>
                <Text style={styles.title}>Work List</Text>
                <Text style={styles.description}>
                  After the service request is created, you can follow it from this screen.
                </Text>
                <TouchableOpacity style={styles.goToLoginBox} onPress={() => navigation.navigate('login')}>
                  <Text style={styles.loginText}> Login </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.getServiceButton} onPress={() => navigation.navigate('homePage')}>
                  <Text style={styles.getServiceText}>Get Service</Text>
                </TouchableOpacity>
              </View>
            </View>
            {/* NO WORK LIST END */}
          </>
          :
          <>
            {/* WORK LIST START */}
            <View style={styles.workListBox}>

              {/* SELECTING CATEGORY START */}
              <View style={styles.categoryContainer}>
                <TouchableOpacity
                  style={
                    selectedCategory === 'My Works'
                      ? styles.focusCategoryButton
                      : styles.unfocusCategoryButton
                  }
                  onPress={() => handleCategoryPress('My Works')}
                >
                  <Text style={
                    selectedCategory === 'My Works'
                      ? styles.focusCategoryText
                      : styles.unfocusCategoryText
                  }>
                    My Works
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={
                    selectedCategory === 'My Old Works'
                      ? styles.focusCategoryButton
                      : styles.unfocusCategoryButton
                  }
                  onPress={() => handleCategoryPress('My Old Works')}
                >
                  <Text style={
                    selectedCategory === 'My Old Works'
                      ? styles.focusCategoryText
                      : styles.unfocusCategoryText
                  }>
                    My Old Works
                  </Text>
                </TouchableOpacity>
              </View>
              {/* SELECTING CATEGORY END */}





              {/* MY WORKS LIST START*/}
              {(selectedCategory === 'My Works') ?
                <>
                  <View style={styles.flatListContainer}>
                    <FlatList
                      data={currentWorksData}
                      keyExtractor={(item) => item.id}
                      renderItem={renderWorkItem}
                    />
                  </View>
                </>
                : null
              }
              {/* MY WORKS LIST END*/}

              {/* OLD WORKS LIST START*/}
              {(selectedCategory === 'My Old Works') ?
                <>
                  <View style={styles.flatListContainer}>
                    <FlatList
                      data={oldWorksData}
                      keyExtractor={(item) => item.id}
                      renderItem={renderOldWorkItem}
                    />
                  </View>
                </>
                : null
              }
              {/* OLD WORKS LIST END*/}
            </View>
            {/* WORK LIST END */}
          </>
        }
      </View>
      <BottomBar />
    </SafeAreaView>
  )
}

export default MyWorkList