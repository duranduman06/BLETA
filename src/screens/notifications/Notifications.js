import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import styles from '../notifications/styles'
import BottomBar from '../../components/BottomBar'

const Notifications = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
      <Text>Notifications</Text>
      </View>
      <BottomBar/>
    </SafeAreaView>
  )
}

export default Notifications