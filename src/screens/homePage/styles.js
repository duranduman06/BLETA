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
  headerContainer: {
    borderWidth: 0,
    height: PhoneHeight * 0.15,
    width: PhoneWidth,
    backgroundColor: '#ebedeb',
    alignItems: 'center',
  },
  logoContainer: {
    flexDirection:'row',
    height:PhoneHeight * 0.08,
    width: '100%',
    justifyContent:'center',
    alignItems:'center',
  },
  logoImg: {
    width: 50,
    height: 50,
  },
  logoText: {
    fontSize: 30,
    marginBottom: PhoneHeight * 0.01,
    fontFamily: 'PJMasks-Bold',
    color: 'black',
    alignSelf:'flex-end',
  },
  searchContainer: {
    borderWidth: 0,
    flexDirection: 'row',
    height: PhoneHeight * 0.05,
    width: PhoneWidth * 0.95,
    backgroundColor: '#d7dade',
    borderRadius: 10,
    alignItems: 'center',
    paddingHorizontal: 10
  },
  searchBar: {
    width: '100%',
    height: '100%',
    padding: PhoneWidth * 0.02,
    fontSize: 16,
    fontFamily: 'PJMasks-Regular',
    color: 'black',
  },
  servicesContainer: {
    flex: 1,
  },
})