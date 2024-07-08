
import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { PhoneHeight, PhoneWidth } from '../constants/config';

const ServiceItem = ({ service }) => {
    return (
        <TouchableOpacity>
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
        height: PhoneHeight * 0.2,
        width:PhoneWidth * 0.5,
        backgroundColor: 'transparent',
        marginRight: 25,
    },
    serviceText: {
        fontSize: 20,
        fontWeight: '500',
        color: 'black',
        textAlign: 'left',
    },
    serviceImage: {
        width: '100%',
        height: '80%',
        borderRadius : 5,
    },
});
