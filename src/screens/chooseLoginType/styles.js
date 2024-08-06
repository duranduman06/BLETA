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
      logoContainer: {
        flexDirection:'row',
        height:PhoneHeight * 0.4,
        width: '100%',
        justifyContent:'center',
        alignItems:'center',
      },
      logoImg: {
        width: 90,
        height: 90,
      },
      logoText: {
        fontSize: 40,
        marginTop: PhoneHeight * 0.01,
        fontFamily: 'PJMasks-Bold',
        color: 'black',
        alignSelf:'center',
      },
      chooseText: {
        fontFamily:'PJMasks-Regular',
        fontSize: 18,
        color:'black',
        textAlign:'center',
        marginBottom: PhoneHeight * 0.02,
      },
      loginTypeContainer: {
        width: '100%',
        justifyContent:'center',
        alignItems:'center',
      },
      loginBtn: {
        width:'75%',
        height: PhoneHeight * 0.07,
        marginBottom: PhoneHeight * 0.02,
        borderRadius: PhoneWidth * 0.01,
        backgroundColor:'#a800ff',
        justifyContent:'center',
        alignItems:'center',
      },
      btnText: {
        fontFamily:'Library 3 am',
        fontSize: 14,
        marginBottom: 5,
        color:'white',
        borderBottomWidth: 0.5,
        borderBottomColor: 'white',
      },
      loginText: {
        fontFamily:'Library 3 am',
        fontSize: 12,
        color:'white',
      },
})