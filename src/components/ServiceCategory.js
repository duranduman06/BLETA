import React from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import ServiceItem from './ServiceItem';
import { PhoneHeight, PhoneWidth } from '../constants/config';

const ServiceCategory = ({ category, services }) => {
    return (
        <View style={styles.categoryContainer}>
            <Text style={styles.categoryText}>{category}</Text>
            <ScrollView horizontal style={styles.servicesScroll} showsHorizontalScrollIndicator={false}>
                {services.map(service => (
                    <ServiceItem key={service.id} service={service} />
                ))}
            </ScrollView>
        </View>
    );
};

export default ServiceCategory;

const styles = StyleSheet.create({
    categoryContainer: {
        marginVertical: PhoneHeight * 0.015,
        marginHorizontal: PhoneWidth * 0.02,
    },
    categoryText: {
        fontSize: 20,
        fontFamily: 'PJMasks-Bold',
        color:'black',
        marginBottom: PhoneHeight * 0.025
    },
    servicesScroll: {
        flexDirection: 'row',
    },
})