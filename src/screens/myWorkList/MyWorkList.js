import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import styles from '../myWorkList/styles'
import BottomBar from '../../components/BottomBar'

const MyWorkList = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
      <Text>MyWorkList</Text>
      </View>
      <BottomBar/>
    </SafeAreaView>
  )
}

export default MyWorkList