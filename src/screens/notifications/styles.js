import { StyleSheet } from 'react-native'
import { PhoneWidth, PhoneHeight } from '../../constants/config'

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    subContainer: {
        backgroundColor: 'white',
        flex: 1,

    },
    noNotifContainer: {
        flex:1,
        backgroundColor: 'white',
        justifyContent:'flex-end',
        alignItems:'center',
    },
    noNotifBox:{
        width: '100%',
        justifyContent:'center',
        alignItems:'center',
        paddingVertical: PhoneHeight * 0.1,
    },
    title: {
        fontSize: 22,
        fontWeight: '700',
        color:'black',
        marginBottom: 15,
    },
    description: {
        fontSize: 16,
        fontWeight: '500',
        color:'gray',
        textAlign:'center',
        paddingHorizontal: PhoneWidth * 0.05,
        marginBottom: 20,
    },
    getServiceButton: {
        backgroundColor:'#a800ff',
        height: PhoneHeight * 0.045,
        width: PhoneWidth * 0.3,
        borderRadius: PhoneWidth * 0.01,
        justifyContent: 'center',
        alignItems: 'center',
    },
    getServiceText: {
        fontSize: 16,
        fontWeight: '500',
        color:'white',
        alignItems:'center',
    },
})