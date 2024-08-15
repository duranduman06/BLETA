import { StyleSheet, Text, SafeAreaView, View, TouchableOpacity, FlatList, Image, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { PhoneWidth, PhoneHeight } from '../../constants/config';
import styles from '../serviceProviderServices/styles'

const services = [
    { id: '1', name: 'House Cleaning' },
    { id: '2', name: 'Intercity Moving' },
    { id: '3', name: 'Sofa Cleaning' },
    { id: '4', name: 'Sofa Moving' },
    { id: '5', name: 'Fridge Moving' },
    { id: '6', name: 'Carpet Cleaning' },
];

const ServiceProviderServices = () => {
    const [selectedServices, setSelectedServices] = useState([]);

    useEffect(() => {
        setSelectedServices(['House Cleaning', 'Fridge Moving', 'Intercity Moving', 'Sofa Cleaning']);
    }, []);

    const toggleService = (service) => {
        if (!selectedServices.includes(service)) {
            setSelectedServices(prev => [...prev, service]);
        }
    };

    const removeService = (service) => {
        setSelectedServices(prev => prev.filter(s => s !== service));
    };

    const handleSave = () => {
        console.log('Saved services:', selectedServices);
        Alert.alert('Saved Successfully!');
    };

    const renderSelectItem = ({ item }) => (
        <TouchableOpacity
            key={item.id}
            style={[
                styles.serviceOptions,
                selectedServices.includes(item.name) && styles.selectedService
            ]}
            onPress={() => {
                if (!selectedServices.includes(item.name)) {
                    toggleService(item.name);
                }
            }}
            disabled={selectedServices.includes(item.name)}
        >
            <Text style={styles.serviceText}>{item.name}</Text>
            <Image source={require('../../assets/icons/plus.png')} style={styles.icon} />
        </TouchableOpacity>
    );

    const renderMyServiceItem = ({ item }) => (
        <View style={styles.myServiceItem}>
            <Text style={styles.myServiceText}>{item}</Text>
            <TouchableOpacity onPress={() => removeService(item)}>
                <Image source={require('../../assets/icons/minus.png')} style={styles.icon} />
            </TouchableOpacity>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.subContainer}>
                <Text style={styles.title}>Select Services</Text>
                <View style={styles.selectContainer}>
                    <FlatList
                        data={services}
                        renderItem={renderSelectItem}
                        keyExtractor={item => item.id}
                        contentContainerStyle={styles.scrollContainer}
                        style={styles.flatList}
                        showsVerticalScrollIndicator={false}
                    />
                </View>

                <Text style={styles.title}>My Services</Text>
                <View style={styles.selectContainer}>
                    {selectedServices.length > 0 ? (
                        <FlatList
                            data={selectedServices}
                            renderItem={renderMyServiceItem}
                            keyExtractor={(item, index) => index.toString()}
                            style={styles.flatList}
                            showsVerticalScrollIndicator={false}
                        />
                    ) : (
                        <Text style={styles.noServiceText}>No services selected</Text>
                    )}
                </View>
            </View>
            <View style={styles.saveButtonContainer}>
                <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                    <Text style={styles.saveButtonText}>Save</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default ServiceProviderServices;
