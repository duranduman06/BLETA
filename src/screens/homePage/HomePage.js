import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from '../homePage/styles'

export default function HomePage() {
  return (
    <SafeAreaView style = {styles.container}>
      <Text style = {styles.myText}>burası benim anasayfam</Text>
    </SafeAreaView>
  )
}
