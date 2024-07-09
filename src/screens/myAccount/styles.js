import { StyleSheet} from 'react-native'
import { PhoneWidth, PhoneHeight } from '../../constants/config'


export default StyleSheet.create({
    container:{
       flex: 1,
      },
    subContainer: {
      height: PhoneHeight * 0.9,
      width: PhoneWidth,
      backgroundColor:'white',
      justifyContent: 'center',
      alignItems: 'center',
    },
    textContainer: {
      paddingHorizontal: PhoneWidth * 0.1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    myAccountText:{
      fontSize: 24,
      fontWeight: '500',
      color: 'black',
      textAlign: 'center',
      marginBottom: 15,
    },
    descText: {
      textAlign: 'center',
      fontSize: 17,
      fontWeight: '400',
      marginBottom: 40,
    },
    loginText: {
      color:'black',
      fontSize: 17,
      fontWeight: '600',
      marginBottom: 20,
    },
    getServiceButton: {
      backgroundColor: 'black',
      paddingVertical: PhoneWidth * 0.02,
      paddingHorizontal: PhoneHeight * 0.02,
      borderRadius: PhoneWidth * 0.02,
    },
    getServiceText: {
      color:'white',
      fontSize: 16,
    },

})