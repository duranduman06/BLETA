import { StyleSheet} from 'react-native'
import { PhoneWidth, PhoneHeight } from '../../constants/config'

export default StyleSheet.create({
    container:{
       flex: 1,
      },
      subContainer: {
        height: PhoneHeight * 0.9,
        width: PhoneWidth,
        backgroundColor:'white'
      },
      headerContainer:{
        height: PhoneHeight * 0.15,
        width: PhoneWidth,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      },
      headerText: {
        fontSize: 45,
        marginBottom: PhoneHeight * 0.01,
        fontWeight: '700',
        color:'black',
      },
      searchBar:{
        height: PhoneHeight * 0.05,
        width: PhoneWidth * 0.95,
        padding: PhoneWidth * 0.02,
        borderRadius: 10,
        backgroundColor:'#d7dade',
        fontSize: 18,
        color:'black',
      },
      servicesContainer: {
        flex:1,
      },
})