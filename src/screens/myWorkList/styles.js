import { StyleSheet } from 'react-native'
import { PhoneWidth, PhoneHeight } from '../../constants/config'

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    subContainer: {
        flex: 1,
    },

    // NO WORK LIST STYLES START
    noWorkListContainer: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    logoContainer: {
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    logoImg: {
        width: 120,
        height: 120,
    },
    noWorkListBox: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: PhoneHeight * 0.1,
    },
    title: {
        fontSize: 22,
        fontFamily: 'PJMasks-Bold',
        color: 'black',
        marginBottom: 15,
    },
    description: {
        fontSize: 16,
        fontFamily: 'PJMasks-Regular',
        color: 'gray',
        textAlign: 'center',
        paddingHorizontal: PhoneWidth * 0.05,
        marginBottom: 15,
    },
    goToLoginBox: {
        marginBottom: 20,
    },
    loginText: {
        fontSize: 16,
        fontFamily: 'PJMasks-Bold',
        textAlign: 'center',
        color: 'black',
    },
    getServiceButton: {
        backgroundColor: '#a800ff',
        height: PhoneHeight * 0.045,
        width: PhoneWidth * 0.3,
        borderRadius: PhoneWidth * 0.01,
        justifyContent: 'center',
        alignItems: 'center',
    },
    getServiceText: {
        fontSize: 14,
        fontFamily: 'Library 3 am',
        color: 'white',
        alignItems: 'center',
    },
    // NO WORK LIST STYLES END

    // WORK LIST CATEGORY STYLES START
    workListBox: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: PhoneHeight * 0.04,
    },
    categoryContainer: {
        backgroundColor: 'lightgray',
        width: PhoneWidth * 0.8,
        height: PhoneHeight * 0.05,
        borderRadius: PhoneWidth * 0.01,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    focusCategoryButton: {
        paddingVertical: PhoneHeight * 0.004,
        paddingHorizontal: PhoneWidth * 0.08,
        borderRadius: PhoneWidth * 0.01,
        backgroundColor: 'white',
    },
    unfocusCategoryButton: {
        paddingVertical: PhoneHeight * 0.004,
        paddingHorizontal: PhoneWidth * 0.08,
        borderRadius: PhoneWidth * 0.01,
        backgroundColor: 'lightgray',
    },
    unfocusCategoryText: {
        fontSize: 16,
        fontFamily: 'PJMasks-Regular',
        color: 'gray',
        textAlign: 'center',
    },
    focusCategoryText: {
        fontSize: 16,
        fontFamily: 'PJMasks-Regular',
        color: 'black',
        textAlign: 'center',
    },
    // WORK LIST CATEGORY STYLES END

    // OLD WORKS STYLES START
    flatListContainer: {
        width: '100%',
        paddingTop: PhoneHeight * 0.02,
    },
    oldWorkCard: {
        marginHorizontal: PhoneWidth * 0.05,
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: PhoneWidth * 0.01,
        borderColor: 'white',
        elevation: 1,
        padding: PhoneWidth * 0.04,
        marginBottom: PhoneHeight * 0.02,
    },
    oldWorkServiceName: {
        fontSize: 18,
        fontFamily: 'PJMasks-Regular',
        color: 'black',
        paddingBottom: 5,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
        marginBottom: 10,
    },
    oldServiceGivenByText: {
        fontSize: 16,
        fontFamily: 'PJMasks-Regular',
        color: 'gray',
    },
    oldWorkDateText: {
        fontSize: 16,
        fontFamily: 'PJMasks-Regular',
        color: 'gray',
        marginTop: PhoneHeight * 0.005,
    },
    // OLD WORKS STYLES END

    // WORKS STYLES START
    workCard: {
        marginHorizontal: PhoneWidth * 0.05,
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: PhoneWidth * 0.01,
        borderColor: 'white',
        elevation: 1,
        padding: PhoneWidth * 0.04,
        marginBottom: PhoneHeight * 0.02,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        marginTop: PhoneHeight * 0.01,
        width: 60,
        height: 60,
        borderRadius: 30,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',

    },
    userImage: {
        width: 40,
        height: 40,
    },
    workServiceName: {
        fontSize: 20,
        fontFamily: 'PJMasks-Regular',
        color: 'black',
    },
    serviceGivenByText: {
        fontSize: 16,
        fontFamily: 'PJMasks-Regular',
        color: 'black',
        marginTop: PhoneHeight * 0.005,
    },
    workDateText: {
        fontSize: 16,
        fontFamily: 'PJMasks-Regular',
        color: 'gray',
        marginTop: PhoneHeight * 0.005,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
        marginBottom: 10,
    },
    commentButton: {
        marginTop: PhoneHeight * 0.015,
        backgroundColor: '#a800ff',
        borderRadius: PhoneWidth * 0.01,
        justifyContent: 'center',
        alignItems: 'center',
        height: PhoneHeight * 0.045,
        width: PhoneWidth * 0.6,

    },
    commentButtonText: {
        width: '100%',
        textAlign: 'center',
        fontSize: 12,
        fontFamily: 'Library 3 am',
        color: 'white',
    },
    // WORKS STYLES END
})