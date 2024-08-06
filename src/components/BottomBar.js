import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { PhoneHeight } from '../constants/config'
import { useNavigation } from '@react-navigation/native'

export default function BottomBar() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.bottomBtnContainer} onPress={() => navigation.navigate("homePage")}>
                <Image
                    style={{ width: 25, height: 25 }}
                    source={require('../assets/icons/search.png')}
                />
                <Text style={styles.txt}>Service Search</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottomBtnContainer} onPress={() => navigation.navigate("myWorkList")}>
                <Image
                    style={{ width: 25, height: 25 }}
                    source={require('../assets/icons/briefcase.png')}
                />
                <Text style={styles.txt}>My WorkList</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottomBtnContainer} onPress={() => navigation.navigate("notifications")}>
                <Image
                    style={{ width: 25, height: 25 }}
                    source={require('../assets/icons/notification.png')}
                />
                <Text style={styles.txt}>Notifications</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottomBtnContainer} onPress={() => navigation.navigate("myAccount")}>
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
        width: '25%',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    txt: {
        color: 'black',
        fontSize: 10,
        fontFamily: 'PJMasks-Bold',
    }
})