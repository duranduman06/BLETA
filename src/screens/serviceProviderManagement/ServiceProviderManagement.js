import { Text, View, SafeAreaView, TouchableOpacity, FlatList, Image } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from '../serviceProviderManagement/styles';
import ServiceProviderBottomBar from '../../components/ServiceProviderBottomBar';

const ServiceProviderManagement = () => {
    const navigation = useNavigation();
    const [selectedCategory, setSelectedCategory] = useState('Posts');

    // WORKS TEMP DATA
    const WorksData = [
        {
            id: 1,
            serviceName: 'Intercity Moving',
            serviceGivenTo: 'Park Bo Young',
            date: '21.08.2024',
            status: 'Current',
        },
        {
            id: 2,
            serviceName: 'House Cleaning',
            serviceGivenTo: 'Thaisa Menezes',
            date: '21.07.2024',
            status: 'Cancelled',
        },
        {
            id: 3,
            serviceName: 'Sofa Cleaning',
            serviceGivenTo: 'Thaisa Menezes',
            date: '21.07.2024',
            status: 'Done',
            comment: 'He did a great job, I haven\'t seen my sofa this clean, thanks for everything!',
        },
        {
            id: 4,
            serviceName: 'Fridge Moving',
            serviceGivenTo: 'Ting Zhu',
            date: '30.07.2024',
            status: 'Done',
            comment: 'He was so nice and did a great job, I will definitely take services again from him, thanks!',
        },
    ];

    // WORKS TEMP DATA
    const PostsData = [
        {
            id: 1,
            serviceName: 'House Cleaning',
            serviceImage: require('../../assets/services/cleaning.jpg'),
            serviceWanter: 'Armando Juan',
            date: '13.08.2024',
            phoneNumber: '+905847919887',
            details: {
                houseSize: '1+1',
                bathrooms: '1',
                pets:'Cat',
                additionalDetails: "It's so urgent and my house is so dirty right now! please don't forget to bring masks",
                address: "77, Rruga Aleksandër Moisiu Njësia Bashkiake Nr. 4, Tirana Municipality Tirana County",
                date: '14.08.2024',
                time:'14:00',
                price: '900',
                currency: '$',
            },
        },
        {
            id: 2,
            serviceName: 'House Cleaning',
            serviceImage: require('../../assets/services/cleaning.jpg'),
            serviceWanter: 'Ted Nguyen',
            date: '15.08.2024',
            phoneNumber: '+905555689498',
            details: {
                houseSize: '3+1',
                bathrooms: '2',
                pets: 'Dog',
                additionalDetails: "The house is in need of thorough cleaning, especially in the kitchen and living room. Please ensure that all surfaces are sanitized and bring extra cleaning products if possible.",
                address: "123, Rruga Myslym Shyri, Tirana 1019, Albania",
                date: '15.08.2024',
                time: '16:00',
                price: '900',
                currency: '$',
            },

        },
        {
            id: 3,
            serviceName: 'House Cleaning',
            serviceImage: require('../../assets/services/cleaning.jpg'),
            serviceWanter: 'Toni Lamothe',
            date: '16.08.2024',
            phoneNumber: '+905847919887',
            details: {
                houseSize: '4+1',
                bathrooms: '1',
                pets: "I'don't have",
                additionalDetails: "The house needs a deep clean, especially the bedrooms and bathrooms. Please ensure that all carpets are vacuumed and all windows are cleaned. Also, make sure to use eco-friendly cleaning products if available.",
                address: "45, Rruga e Dajti, Tirana 1023, Albania",
                date: '16.08.2024',
                time: '10:00',
                price: '900',
                currency: '$',
            },
        },
        {
            id: 4,
            serviceName: 'House Cleaning',
            serviceImage: require('../../assets/services/cleaning.jpg'),
            serviceWanter: 'Hachiro Ishimaru',
            date: '17.08.2024',
            phoneNumber: '+905847919887',
            details: {
                houseSize: '5+1',
                bathrooms: '1',
                pets: 'Cat',
                additionalDetails: "The house requires cleaning of multiple rooms, including the attic and basement. Please pay extra attention to the areas around the windows and under the furniture. Use non-toxic cleaning agents due to a cat in the house.",
                address: "78, Rruga e Elbasanit, Tirana 1001, Albania",
                date: '17.08.2024',
                time: '12:00',
                price: '900',
                currency: '$',
            },
        }
        
    ];

    // Kategoriye tıklama.
    const handleCategoryPress = (category) => {
        setSelectedCategory(category);
    };

    const renderPosts = ({ item }) => (
        <View style={styles.postCard}>
           <Image source={item.serviceImage} style={styles.serviceImage}/>
            <Text style={styles.postServiceName}>{item.serviceName}</Text>
            <Text style={styles.postServiceWanter}>{item.serviceWanter}</Text>
            <Text style={styles.postDate}>{item.date}</Text>
            <TouchableOpacity
                style={styles.detailsButton}
                onPress={() => navigation.navigate('ServiceWanterDetails', { item })}
            >
                <Text style={styles.detailsButtonText}>Details</Text>
            </TouchableOpacity>
        </View>
    );

    const renderWorkItem = ({ item }) => (
        <View style={styles.workCard}>
            <Text style={styles.workServiceName}>{item.serviceName}</Text>
            <Text style={styles.serviceGivenToText}>{item.serviceGivenTo}</Text>
            <Text style={styles.workDateText}>{item.date}</Text>
            <Text style={item.status === 'Done' ? styles.statusDone : item.status === 'Cancelled' ?
                styles.statusCancelled : styles.statusCurrent}>
                {item.status}
            </Text>
        </View>
    );

    const renderComments = ({ item }) => (
        item.comment != null ? (
            <View style={styles.commentCard}>
                <Text style={styles.serviceGivenTo}>{item.serviceGivenTo}</Text>
                <Text style={styles.commentServiceName}>{item.date + '   ' + item.serviceName}</Text>
                <Text style={styles.commentText}>{item.comment}</Text>
            </View>
        ) : null
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.subContainer}>
                {/* WORK LIST START */}
                <View style={styles.managementBox}>

                    {/* SELECTING CATEGORY START */}

                    <View style={styles.categoryContainer}>
                        <TouchableOpacity
                            style={
                                selectedCategory === 'Posts'
                                    ? styles.focusCategoryButton
                                    : styles.unfocusCategoryButton
                            }
                            onPress={() => handleCategoryPress('Posts')}
                        >
                            <Text style={
                                selectedCategory === 'Posts'
                                    ? styles.focusCategoryText
                                    : styles.unfocusCategoryText
                            }>
                                Posts
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={
                                selectedCategory === 'MyWorks'
                                    ? styles.focusCategoryButton
                                    : styles.unfocusCategoryButton
                            }
                            onPress={() => handleCategoryPress('MyWorks')}
                        >
                            <Text style={
                                selectedCategory === 'MyWorks'
                                    ? styles.focusCategoryText
                                    : styles.unfocusCategoryText
                            }>
                                My Works
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={
                                selectedCategory === 'Comments'
                                    ? styles.focusCategoryButton
                                    : styles.unfocusCategoryButton
                            }
                            onPress={() => handleCategoryPress('Comments')}
                        >
                            <Text style={
                                selectedCategory === 'Comments'
                                    ? styles.focusCategoryText
                                    : styles.unfocusCategoryText
                            }>
                                Comments
                            </Text>
                        </TouchableOpacity>
                    </View>
                    {/* SELECTING CATEGORY END */}


                    {/* POSTS LIST START */}
                    {(selectedCategory === 'Posts') ?
                        <View style={styles.flatListContainer}>
                            <FlatList
                                data={PostsData}
                                keyExtractor={(item) => item.id.toString()}
                                renderItem={renderPosts}
                            />
                        </View>
                    : null}
                    {/* POSTS LIST END */}

                    {/* MY WORKS LIST START */}
                    {(selectedCategory === 'MyWorks') ?
                        <View style={styles.flatListContainer}>
                            <FlatList
                                data={WorksData}
                                keyExtractor={(item) => item.id.toString()}
                                renderItem={renderWorkItem}
                            />
                        </View>
                    : null}
                    {/* MY WORKS LIST END */}

                    {/* COMMENTS LIST START */}
                    {(selectedCategory === 'Comments') ?
                        <View style={styles.flatListContainer}>
                            <FlatList
                                data={WorksData}
                                keyExtractor={(item) => item.id.toString()}
                                renderItem={renderComments}
                            />
                        </View>
                    : null}
                    {/* COMMENTS LIST END */}
                </View>
            </View>
            <ServiceProviderBottomBar />
        </SafeAreaView>
    );
};

export default ServiceProviderManagement;
