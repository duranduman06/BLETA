import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import styles from '../serviceWanterDetails/styles';

const ServiceWanterDetails = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { item } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <Image source={item.serviceImage} style={styles.serviceImage} />
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.detailsContainer}>
            <Text style={styles.serviceName}>{item.serviceName}</Text>
            <Text style={styles.serviceWanter}>Requested by: {item.serviceWanter}</Text>
            <Text style={styles.serviceDate}>Date: {item.date}</Text>
            <Text style={styles.phoneNumber}>Phone: {item.phoneNumber}</Text>
            
            <Text style={styles.detailsLabel}>Details:</Text>
            <View style={styles.detailsTextContainer}>
              <Text style={styles.detailsText}>
                House Size: {item.details.houseSize || 'N/A'}
              </Text>
              <Text style={styles.detailsText}>
                Bathrooms: {item.details.bathrooms || 'N/A'}
              </Text>
              <Text style={styles.detailsText}>
                Pets: {item.details.pets || 'N/A'}
              </Text>
              <Text style={styles.detailsText}>
                Additional Details: {item.details.additionalDetails || 'N/A'}
              </Text>
              <Text style={styles.detailsText}>
                Address: {item.details.address || 'N/A'}
              </Text>
              <Text style={styles.detailsText}>
                Date: {item.details.date || 'N/A'}
              </Text>
              <Text style={styles.detailsText}>
                Time: {item.details.time || 'N/A'}
              </Text>
              <Text style={styles.detailsText}>
                Price: {item.details.price || 'N/A'} {item.details.currency || 'N/A'}
              </Text>
            </View>
          </View>
        </ScrollView>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.acceptButton}
            onPress={() => {
              alert('Accepted');
            }}
          >
            <Text style={styles.buttonText}>Accept</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ServiceWanterDetails;
