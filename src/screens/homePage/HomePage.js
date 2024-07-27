import { SafeAreaView, TextInput, Text, View, FlatList, Image} from 'react-native'
import React from 'react'
import styles from '../homePage/styles'
import ServiceCategory from '../../components/ServiceCategory';
import { PhoneHeight } from '../../constants/config';
import BottomBar from '../../components/BottomBar';

const data = [ // ŞİMDİLİK KULLANILACAK OLAN SABİT DATA
  {
    id: 1,
    category: 'Trending Services',
    services: [
      {
        id: 1,
        serviceName: 'House Cleaning',
        image : require('../../assets/services/cleaning.jpg'),
      },
      {
        id: 2,
        serviceName: 'Intercity Moving',
        image : require('../../assets/services/intercitymoving.jpg'),
      },
      {
        id: 3,
        serviceName: 'Sofa Cleaning',
        image : require('../../assets/services/sofacleaning.jpg'),
      },
    ],
  },
  {
    id: 2,
    category: 'Transportation and Storage',
    services: [
      {
        id: 4,
        serviceName: 'Sofa Moving',
        image : require('../../assets/services/sofacleaning.jpg'),

      },
      {
        id: 5,
        serviceName: 'Intercity Moving',
        image : require('../../assets/services/intercitymoving.jpg'),
      },
      {
        id: 6,
        serviceName: 'Fridge Moving',
        image : require('../../assets/services/fridgemoving.jpg'),
      },
    ],
  },
  {
    id: 3,
    category: 'Cleaning',
    services: [
      {
        id: 7,
        serviceName: 'House Cleaning',
        image : require('../../assets/services/cleaning.jpg'),
      },
      {
        id: 8,
        serviceName: 'Sofa Cleaning',
        image : require('../../assets/services/sofacleaning.jpg'),
      },
      {
        id: 9,
        serviceName: 'Carpet Cleaning',
        image : require('../../assets/services/carpetcleaning.jpg'),
      },
    ],
  },
];


export default function HomePage() {
  const renderItem = ({ item }) => {
    return (
      <ServiceCategory category={item.category} services={item.services}
      />
    )
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.headerContainer}>
          <View style={styles.logoContainer}> 
            <Image
              style={styles.logoImg}
              source={require('../../assets/icons/bleta_logo.png')} />
            <Text style={styles.logoText}>bleta</Text>
          </View>
          <View style = {styles.searchContainer}>
            <Image 
              style = {{width: 20, height: 20}}
              source = {require('../../assets/icons/search.png')}/>
            <TextInput
              style={styles.searchBar}
              placeholder=" Which service do you need?"
              placeholderTextColor={'black'}
            />
          </View>
        </View>
        <View style={styles.servicesContainer}>
          <FlatList
            data={data}
            keyExtractor={item => item.id.toString()}
            renderItem={renderItem}
          />
        </View>
      </View>
      <BottomBar/>
    </SafeAreaView>
  )
}
