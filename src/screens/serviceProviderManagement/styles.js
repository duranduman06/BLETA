import { StyleSheet } from 'react-native';
import { PhoneWidth, PhoneHeight } from '../../constants/config';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  // CATEGORY SELECTION STYLES START
  managementBox: {
    flex:1,
    alignItems: 'center',
    paddingTop: PhoneHeight * 0.04,
    paddingBottom: 70,
  },
  categoryContainer: {
    backgroundColor: 'lightgray',
    width: PhoneWidth * 0.9,
    height: PhoneHeight * 0.05,
    paddingHorizontal: 5,
    borderRadius: PhoneWidth * 0.01,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: PhoneHeight * 0.02,
    },
  focusCategoryButton: {
    paddingVertical: PhoneHeight * 0.004,
    width: '30%',
    borderRadius: PhoneWidth * 0.01,
    backgroundColor: 'white',
  },
  unfocusCategoryButton: {
    paddingVertical: PhoneHeight * 0.004,
    width: '30%',
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
  // CATEGORY SELECTION STYLES END

  // POSTS STYLES START
  flatListContainer: {
    width: '100%',
  },
  postCard: {
     marginHorizontal: PhoneWidth * 0.05,
     backgroundColor: 'white',
     borderWidth: 1,
     borderRadius: PhoneWidth * 0.01,
     borderColor: 'white',
     elevation: 5,
     padding: PhoneWidth * 0.04,
     marginBottom: PhoneHeight * 0.02,
  },
  serviceImage: {
    width: '100%',
    height: PhoneHeight * 0.2,
     borderRadius: PhoneWidth * 0.01,
     marginBottom: PhoneHeight * 0.01,
  },
   postServiceName: {
     fontSize: 18,
     fontFamily: 'PJMasks-Regular',
     color: 'black',
     paddingBottom: 5,
     borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
   marginBottom: 5,
   },
   postServiceWanter: {
    fontSize: 16,
    fontFamily: 'PJMasks-Regular',
    color: 'gray',
     marginBottom: 5,
   },
   postDate: {
     fontSize: 16,
     fontFamily: 'PJMasks-Regular',
     color: 'gray',
     marginBottom: 10,
   },
   detailsButton: {
     backgroundColor: '#a800ff',
     paddingVertical: PhoneHeight * 0.01,
     borderRadius: PhoneWidth * 0.01,
     alignItems: 'center',
     justifyContent: 'center',
   },
   detailsButtonText: {
     fontSize: 16,
     fontFamily: 'Library 3 am',
     color: 'white',
   },
  // POSTS STYLES END

  // MY WORKS STYLES START
  workCard: {
    marginHorizontal: PhoneWidth * 0.05,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: PhoneWidth * 0.01,
    borderColor: 'white',
    elevation: 5,
    padding: PhoneWidth * 0.04,
    marginBottom: PhoneHeight * 0.02,
  },
  workServiceName: {
    fontSize: 18,
    fontFamily: 'PJMasks-Regular',
    color: 'black',
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    marginBottom: 10,
  },
  serviceGivenToText: {
    fontSize: 16,
    fontFamily: 'PJMasks-Regular',
    color: 'gray',
  },
  workDateText: {
    fontSize: 16,
    fontFamily: 'PJMasks-Regular',
    color: 'gray',
    marginTop: PhoneHeight * 0.005,
  },
  statusDone: {
    textAlign: 'right',
    fontSize: 16,
    fontFamily: 'PJMasks-Regular',
    color: 'green',
    marginTop: PhoneHeight * 0.005,
  },
  statusCancelled: {
    textAlign: 'right',
    fontSize: 16,
    fontFamily: 'PJMasks-Regular',
    color: '#E4003A',
    marginTop: PhoneHeight * 0.005,
  },
  statusCurrent: {
    textAlign: 'right',
    fontSize: 16,
    fontFamily: 'PJMasks-Regular',
    color: '#a800ff',
    marginTop: PhoneHeight * 0.005,
  },
  // MY WORKS STYLES END

  // COMMENTS SECTION START
  commentCard: {
    marginHorizontal: PhoneWidth * 0.05,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: PhoneWidth * 0.01,
    borderColor: 'white',
    elevation: 5,
    padding: PhoneWidth * 0.04,
    marginBottom: PhoneHeight * 0.02,
    justifyContent: 'center',
  },
  serviceGivenTo: {
    fontSize: 18,
    fontFamily: 'PJMasks-Regular',
    color: 'black',
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    marginBottom: 10,
  },
  commentServiceName: {
    fontSize: 16,
    fontFamily: 'PJMasks-Regular',
    color: 'gray',
    marginTop: PhoneHeight * 0.005,
    marginBottom: 10,
  },
  commentText: {
    fontSize: 16,
    fontFamily: 'PJMasks-Regular',
    color: 'black',
    marginTop: PhoneHeight * 0.005,
    marginBottom: 10,
  },
  // COMMENTS SECTION END
});
