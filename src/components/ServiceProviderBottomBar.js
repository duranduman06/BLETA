import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { PhoneHeight } from '../constants/config'
import { useNavigation } from '@react-navigation/native'

export default function ServiceProviderBottomBar() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.bottomBtnContainer} onPress={() => navigation.navigate("serviceProviderManagement")}>
                <Image
                    style={{ width: 25, height: 25 }}
                    source={require('../assets/icons/clipboard.png')}
                />
                <Text style={styles.txt}>Service Management</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottomBtnContainer} onPress={() => navigation.navigate("serviceProviderAccount")}>
                <Image
                    style={{ width: 25, height: 25 }}
                    source={require('../assets/icons/user.png')}
                />
                <Text style={styles.txt}>My Profile</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: PhoneHeight * 0.085,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderTopWidth: 0.5,
        borderTopColor: 'gray',
        paddingTop: 7.5
    },
    bottomBtnContainer: {
        borderWidth: 0,
        width: '50%',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    txt: {
        color: 'black',
        fontSize: 10,
        fontFamily: 'PJMasks-Bold',
    }
})