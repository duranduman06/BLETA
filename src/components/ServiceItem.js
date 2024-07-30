
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { PhoneHeight, PhoneWidth } from '../constants/config';
import { useNavigation } from '@react-navigation/native';

const ServiceItem = ({ service }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={()=> navigation.navigate(service.navigation)}>
            <View style={styles.serviceItem}>
                <Image source={service.image} style={styles.serviceImage} resizeMode='cover' />
                <Text style={styles.serviceText}>{service.serviceName}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default ServiceItem;

const styles = StyleSheet.create({
    serviceItem: {
        height: PhoneHeight * 0.18,
        width:PhoneWidth * 0.38,
        backgroundColor: 'transparent',
        marginRight: 10,
        marginBottom: 10,
    },
    serviceText: {
        fontSize: 15,
        fontFamily: 'PJMasks-Regular',
        color: 'black',
        textAlign: 'left',
    },
    serviceImage: {
        width: '100%',
        height: '80%',
        borderRadius : 5,
        marginBottom: 5,
    },
});
