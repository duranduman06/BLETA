import { StyleSheet} from 'react-native'
import { PhoneWidth, PhoneHeight } from '../../constants/config'


export default StyleSheet.create({
    container:{
       flex: 1,
      },
      subContainer: {
        flex: 1,
        width: PhoneWidth,
        backgroundColor:'white',
      },
      credentialsContainer: {
        paddingHorizontal: PhoneWidth * 0.1,
        paddingVertical: PhoneHeight * 0.2,
      },
      credentials: {
        marginBottom: 15,
        borderColor:'transparent',
        backgroundColor:'lightgrey',
        borderRadius: PhoneWidth * 0.01,
        padding: 10,
        fontSize: 18,
        fontFamily:'PJMasks-Regular',
        color: 'black',
        width: PhoneWidth * 0.8,
        height: PhoneHeight * 0.06,
      },
      loginText: {
        fontSize: 24,
        fontFamily:'PJMasks-Bold',
        color: 'black',
        textAlign: 'center',
        marginBottom: PhoneHeight * 0.08,
      },
      focused: {
        backgroundColor:'#f2f2f0',
      },
      showPasswordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: PhoneHeight * 0.03,
      },
      showPasswordButton:{
        borderWidth:1,
        height: 20,
        width: 20,
        borderRadius: 20,
        padding: 2.5,
        marginRight: 5,
      },
      showPasswordDot: {
        flex:1,
        backgroundColor:'black',
        borderRadius: 20,
      },
      dontShowPasswordDot: {
        flex:1,
        backgroundColor:'transparent',
        borderRadius: 20,
      },
      showPasswordText: {
        fontSize: 14,
        color:'black',
        fontFamily:'PJMasks-Regular',
      },
      dontShowPasswordText: {
        fontSize: 14,
        color:'grey',
        fontFamily:'PJMasks-Regular',
      },
      loginButton: {
        borderWidth:1,
        borderColor:'#a800ff',
        height: PhoneHeight * 0.06,
        width: PhoneWidth * 0.8,
        borderRadius: PhoneWidth * 0.01,
        backgroundColor:'#a800ff',
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        marginBottom: 10,
      },
      loginButtonText: {
        fontSize: 18,
        fontFamily: 'Library 3 am',
        color:'white',
      },
      errorText: {
        fontSize: 17,
        fontFamily:'PJMasks-Regular',
        color:'grey',
        textAlign:'center',

      },
})