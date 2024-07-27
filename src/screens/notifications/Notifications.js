import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../notifications/styles'
import BottomBar from '../../components/BottomBar'
import { useNavigation } from '@react-navigation/native'

const Notifications = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        {/* IF THERE IS NO NOTIF SHOW THIS!!!!!!!!*/}
        <View style={styles.noNotifContainer}>
          <View style={styles.noNotifBox}>
            <Text style={styles.title}>Notifications</Text>
            <Text style={styles.description}>
              You can see all notifications and messages regarding your requests from this screen.
            </Text>
            <TouchableOpacity style={styles.getServiceButton} onPress={() => navigation.navigate('homePage')}>
              <Text style={styles.getServiceText}>Get Service</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <BottomBar />
    </SafeAreaView>
  )
}

export default Notifications