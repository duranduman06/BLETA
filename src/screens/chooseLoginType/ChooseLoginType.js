import { Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../chooseLoginType/styles'
import { useNavigation } from '@react-navigation/native'


const ChooseLoginType = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.subContainer}>
             
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logoImg}
                        source={require('../../assets/icons/bleta_logo.png')} />
                    <Text style={styles.logoText}>bleta</Text>
                </View>
               
                <Text style={styles.chooseText}> Choose your Login Type</Text>
                <View style={styles.loginTypeContainer}>
                    <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('login')}>
                        <Text style={styles.btnText}> I want to get service </Text>
                        <Text style={styles.loginText}> Login </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('serviceProviderLogin')}>
                        <Text style={styles.btnText}> I want to give service </Text>
                        <Text style={styles.loginText}> Login </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('homePage')}>
                        <Text style={styles.btnText}> I just want to explore</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default ChooseLoginType