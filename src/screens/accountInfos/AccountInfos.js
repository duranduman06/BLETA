import React, { useState,useRef} from 'react';
import { Text, View, SafeAreaView, ScrollView, TextInput, Image, TouchableOpacity, Modal, TouchableWithoutFeedback, FlatList, Alert } from 'react-native';
import styles from '../accountInfos/styles';

const AccountInfos = () => {
    const scrollViewRef = useRef(null); // ŞEHİR VEYA İLÇE SEÇİMİNDEN SONRA SAYFAYI EN ALTA İNDİRSİN.

    const [tempAccData, setTempAccData] = useState({
        name: 'Duran',
        surname: 'Duman',
        email: 'duranduman06@gmail.com',
        phoneNum: '+90 5550294788',
        bidderCallChecked: false,
        privateNumberChecked: true,
        city: null,
        district: null,
        neighborhood: null,
    });

    const [focusedInput, setFocusedInput] = useState(null);
    const [bidderCallChecked, setBidderCallChecked] = useState(tempAccData.bidderCallChecked);
    const [privateNumberChecked, setPrivateNumberChecked] = useState(tempAccData.privateNumberChecked);

    const [openCityModal, setOpenCityModal] = useState(false);
    const [openDistrictModal, setOpenDistrictModal] = useState(false);
    const [openNeighborhoodModal, setOpenNeighborhoodModal] = useState(false);

    const [selectedCity, setSelectedCity] = useState(tempAccData.city);
    const [selectedDistrict, setSelectedDistrict] = useState(tempAccData.district);
    const [selectedNeighborhood, setSelectedNeighborhood] = useState(tempAccData.neighborhood);

    const locations = {
        "Ankara": {
            "Çankaya": ["Bahçelievler", "Kavaklıdere"],
            "Keçiören": ["Etlik", "Ovacık"]
        },
        "İstanbul": {
            "Beşiktaş": ["Bebek", "Levent"],
            "Kadıköy": ["Moda", "Fenerbahçe"]
        },
        "İzmir": {
            "Konak": ["Alsancak", "Göztepe"],
            "Karşıyaka": ["Bostanlı", "Mavişehir"]
        }
    };

    const getInputStyle = (inputName) => {
        return focusedInput === inputName ? styles.infoInputFocus : styles.infoInput;
    };

    const getCheckboxStyle = (isChecked) => {
        return isChecked ? null : styles.checkBoxButtonChecked;
    };

    const handleCitySelect = (city) => {
        setSelectedCity(city);
        setSelectedDistrict(null);
        setSelectedNeighborhood(null);
        setOpenCityModal(false);
        scrollViewRef.current.scrollToEnd();
    };

    const handleDistrictSelect = (district) => {
        setSelectedDistrict(district);
        setSelectedNeighborhood(null);
        setOpenDistrictModal(false);
        scrollViewRef.current.scrollToEnd();
    };

    const handleNeighborhoodSelect = (neighborhood) => {
        setSelectedNeighborhood(neighborhood);
        setOpenNeighborhoodModal(false);
        scrollViewRef.current.scrollToEnd();
    };

    const renderCityItem = ({ item }) => (
        <TouchableOpacity onPress={() => handleCitySelect(item)}>
            <Text style={styles.options}>{item}</Text>
        </TouchableOpacity>
    );

    const renderDistrictItem = ({ item }) => (
        <TouchableOpacity onPress={() => handleDistrictSelect(item)}>
            <Text style={styles.options}>{item}</Text>
        </TouchableOpacity>
    );

    const renderNeighborhoodItem = ({ item }) => (
        <TouchableOpacity onPress={() => handleNeighborhoodSelect(item)}>
            <Text style={styles.options}>{item}</Text>
        </TouchableOpacity>
    );

    const handleSave = () => { //VALIDASYONLAR BURADA YAPILACAK
        if (!tempAccData.email || !tempAccData.email.includes('@')) {
            Alert.alert('Invalid Email', 'Please enter a valid email address.');
            return;
        }
        Alert.alert('Success', 'Account information saved successfully.');
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.subContainer}>
                <ScrollView ref={scrollViewRef}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>My Account Informations</Text>
                    </View>

                    <View style={styles.allInfoContainer}>
                        <View style={styles.anInfoBox}>
                            <Text style={styles.infoText}>Name</Text>
                            <TextInput
                                style={getInputStyle('name')}
                                value={tempAccData.name}
                                onChangeText={(text) => setTempAccData({ ...tempAccData, name: text })}
                                onFocus={() => setFocusedInput('name')}
                                onBlur={() => setFocusedInput(null)}
                            />
                        </View>
                        <View style={styles.anInfoBox}>
                            <Text style={styles.infoText}>Surname</Text>
                            <TextInput
                                style={getInputStyle('surname')}
                                value={tempAccData.surname}
                                onChangeText={(text) => setTempAccData({ ...tempAccData, surname: text })}
                                onFocus={() => setFocusedInput('surname')}
                                onBlur={() => setFocusedInput(null)}
                            />
                        </View>
                        <View style={styles.anInfoBox}>
                            <Text style={styles.infoText}>Email</Text>
                            <TextInput
                                style={getInputStyle('email')}
                                value={tempAccData.email}
                                onChangeText={(text) => setTempAccData({ ...tempAccData, email: text })}
                                onFocus={() => setFocusedInput('email')}
                                onBlur={() => setFocusedInput(null)}
                            />
                        </View>
                        <View style={styles.anInfoBox}>
                            <Text style={styles.infoText}>Phone Number</Text>
                            <View style={styles.phoneBox}>
                                <Text style={styles.phoneText}>{tempAccData.phoneNum}</Text>
                                <TouchableOpacity style={{ flexDirection: 'row' }}>
                                    <Image source={require('../../assets/icons/edit.png')}
                                        style={{ height: 20, width: 20, marginRight: 10 }} />
                                    <Text style={styles.phoneText}>Change</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.checkBoxContainer}>
                            <View style={styles.checkBoxItem}>
                                <TouchableOpacity onPress={() => setBidderCallChecked(!bidderCallChecked)}>
                                    <View style={styles.checkBoxButton}>
                                        <View style={getCheckboxStyle(bidderCallChecked)} />
                                    </View>
                                </TouchableOpacity>
                                <Text style={styles.checkBoxText}>The bidder may call</Text>
                            </View>

                            <View style={styles.checkBoxItem}>
                                <TouchableOpacity onPress={() => setPrivateNumberChecked(!privateNumberChecked)}>
                                    <View style={styles.checkBoxButton}>
                                        <View style={getCheckboxStyle(privateNumberChecked)} />
                                    </View>
                                </TouchableOpacity>
                                <Text style={styles.checkBoxText}>may call, but my number should be kept private</Text>
                            </View>
                        </View>

                        <View style={styles.adressContainer}>
                            <Text style={styles.infoText}>City</Text>
                            <TouchableOpacity style={styles.adressBox} onPress={() => setOpenCityModal(true)}>
                                <Text style={styles.optionTexts}>{selectedCity || 'Select City'}</Text>
                                <Image source={require('../../assets/icons/down-arrow.png')}
                                    style={{ height: 20, width: 20, marginRight: 10 }} />
                            </TouchableOpacity>
                        </View>

                        {selectedCity == null ? null :
                            <View style={styles.adressContainer}>
                                <Text style={styles.infoText}>District</Text>
                                <TouchableOpacity style={styles.adressBox} onPress={() => setOpenDistrictModal(true)}>
                                    <Text style={styles.optionTexts}>{selectedDistrict || 'Select District'}</Text>
                                    <Image source={require('../../assets/icons/down-arrow.png')}
                                        style={{ height: 20, width: 20, marginRight: 10 }} />
                                </TouchableOpacity>
                            </View>
                        }

                        {selectedDistrict == null ? null :
                            <View style={styles.adressContainer}>
                                <Text style={styles.infoText}>Neighborhood</Text>
                                <TouchableOpacity style={styles.adressBox} onPress={() => setOpenNeighborhoodModal(true)}>
                                    <Text style={styles.optionTexts}>{selectedNeighborhood || 'Select Neighborhood'}</Text>
                                    <Image source={require('../../assets/icons/down-arrow.png')}
                                        style={{ height: 20, width: 20, marginRight: 10 }} />
                                </TouchableOpacity>
                            </View>
                        }

                        {/* CITY MODAL */}
                        <Modal
                            animationType="fade"
                            onRequestClose={() => setOpenCityModal(false)}
                            visible={openCityModal}
                            transparent={true}
                        >
                            <TouchableWithoutFeedback onPress={() => setOpenCityModal(false)}>
                                <View style={styles.modalOverlay}>
                                    <View style={styles.modalContent}>
                                        <FlatList
                                            data={Object.keys(locations)}
                                            keyExtractor={(item) => item}
                                            renderItem={renderCityItem}
                                        />
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                        </Modal>

                        {/* DISTRICT MODAL */}
                        <Modal
                            animationType="fade"
                            onRequestClose={() => setOpenDistrictModal(false)}
                            visible={openDistrictModal}
                            transparent={true}
                        >
                            <TouchableWithoutFeedback onPress={() => setOpenDistrictModal(false)}>
                                <View style={styles.modalOverlay}>
                                    <View style={styles.modalContent}>
                                        <FlatList
                                            data={selectedCity ? Object.keys(locations[selectedCity]) : []}
                                            keyExtractor={(item) => item}
                                            renderItem={renderDistrictItem}
                                        />
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                        </Modal>

                        {/* NEIGHBORHOOD MODAL */}
                        <Modal
                            animationType="fade"
                            onRequestClose={() => setOpenNeighborhoodModal(false)}
                            visible={openNeighborhoodModal}
                            transparent={true}
                        >
                            <TouchableWithoutFeedback onPress={() => setOpenNeighborhoodModal(false)}>
                                <View style={styles.modalOverlay}>
                                    <View style={styles.modalContent}>
                                        <FlatList
                                            data={selectedDistrict ? locations[selectedCity][selectedDistrict] : []}
                                            keyExtractor={(item) => item}
                                            renderItem={renderNeighborhoodItem}
                                        />
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                        </Modal>

                    </View>
                </ScrollView>
            </View>
            <View style={styles.saveButtonContainer}>
                <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                    <Text style={styles.saveButtonText}>Save</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}
export default AccountInfos;
