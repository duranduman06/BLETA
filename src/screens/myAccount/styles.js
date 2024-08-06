import { StyleSheet } from 'react-native'
import { PhoneWidth, PhoneHeight } from '../../constants/config'


export default StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    flex: 1,
    width: PhoneWidth,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    paddingHorizontal: PhoneWidth * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  myAccountText: {
    fontSize: 24,
    fontFamily:'PJMasks-Bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 15,
  },
  descText: {
    textAlign: 'center',
    fontSize: 17,
    fontFamily:'PJMasks-Regular',
    marginBottom: 40,
  },
  loginText: {
    color: 'black',
    fontSize: 17,
    fontFamily:'PJMasks-Bold',
    marginBottom: 20,
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
    color: 'white',
    fontSize: 14,
    fontFamily: 'Library 3 am',
  },
  accountContainer: {
    flex: 1,
    width: '100%',
  },
  namePhotoContainer: {
    width: PhoneWidth,
    height: PhoneHeight * 0.25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  accNameText: {
    fontSize: 22,
    fontFamily:'PJMasks-Bold',
    color: 'black',
  },
  accInfoContainer: {
    width: PhoneWidth,
    paddingHorizontal: PhoneWidth * 0.03,
    marginBottom: 35,
  },
  accOption: {
    flexDirection: 'row',
    width: '100%',
    height: PhoneHeight * 0.07,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderBottomWidth: 0.5,
    borderBottomColor: 'lightgray',
  },
  accInfoHeader: {
    fontSize: 20,
    fontFamily:'PJMasks-Bold',
    color: 'black',
  },
  accInfoText: {
    flex: 1,
    fontSize: 16,
    fontFamily:'PJMasks-Regular',
    color: 'black',
  },
  leftArrow: {
    height: 25,
    width: 25,
  },

})