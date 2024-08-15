import { StyleSheet } from 'react-native'
import { PhoneWidth, PhoneHeight } from '../../constants/config'

export default StyleSheet.create({
container: {
        flex: 1,
    },
    subContainer: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: PhoneWidth * 0.04,
        paddingVertical: PhoneHeight * 0.03,
    },
    title: {
        fontSize: 20,
        color: 'black',
        fontFamily: 'PJMasks-Bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    selectContainer: {
        borderWidth: 1,
        borderColor: 'lightgray',
        padding: 15,
        borderRadius: PhoneWidth * 0.015,
        elevation: 5,
        backgroundColor: 'white',
        marginBottom: PhoneHeight * 0.03,
    },
    flatList: {
        maxHeight: PhoneHeight * 0.31,
    },
    serviceOptions: {
        width: '100%',
        borderWidth: 1,
        borderColor: 'lightgray',
        marginBottom: 10,
        borderRadius: PhoneWidth * 0.015,
        elevation: 5,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    selectedService: {
        backgroundColor: '#e0e0e0',
    },
    serviceText: {
        fontSize: 16,
        color: 'black',
        fontFamily: 'PJMasks-Regular',
        padding: 15,
    },
    myServiceItem: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        marginBottom: 10,
        borderRadius: PhoneWidth * 0.015,
        borderWidth: 1,
        borderColor: 'lightgray',
        backgroundColor: 'white',
        elevation: 5,
    },
    myServiceText: {
        fontSize: 16,
        color: 'black',
        fontFamily: 'PJMasks-Regular',
    },
    noServiceText: {
        fontSize: 16,
        color: 'gray',
        fontFamily: 'PJMasks-Regular',
    },
    icon: {
        width: 25,
        height: 25,
        marginHorizontal: 10,
    },
    saveButtonContainer: {
        justifyContent: 'flex-end',
        padding: 15,
        backgroundColor: 'white',
    },
    saveButton: {
        backgroundColor: '#a800ff',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: PhoneWidth * 0.01,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    saveButtonText: {
        fontSize: 20,
        color: 'white',
        fontFamily: 'Library 3 am',
    },
})