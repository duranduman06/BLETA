import { Image, SafeAreaView, StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { PhoneHeight, PhoneWidth } from '../../../constants/config'
import { useNavigation } from '@react-navigation/native'

export default function HouseCleaning() {
    const navigation = useNavigation();
    const commentData = [
        {
            customerName: "Paul Lee",
            commentTxt: "They did their jobs on time. It was exactly what I wanted. I am very satisfied"
        },
        {
            customerName: "Paul Lee",
            commentTxt: "They did their jobs on time. It was exactly what I wanted. I am very satisfied"
        },
        {
            customerName: "Paul Lee",
            commentTxt: "They did their jobs on time. It was exactly what I wanted. I am very satisfied"
        }
    ]
    const renderCommentBox = ({item}) => {
        return(
            <View style = {styles.commentBox}>
                <Image
                    style = {styles.ratingImage}
                    source={require('../../../assets/icons/rating.png')}
                />
                <Text style = {styles.customerName}>{item.customerName}</Text>
                <Text style = {styles.customerComment}>{item.commentTxt}</Text>
            </View>
        )
    }
  return (
    <SafeAreaView style = {styles.container}>
        <View style = {styles.imageBox}>
            <Image
            style = {styles.image}
                source={require('../../../assets/services/cleaning.jpg')}
            />
        </View>
    <View style = {styles.bottomBox}>
        <View>
        <Text style = {styles.title}>House Cleaning</Text>
        <View style = {styles.line}></View>
        <Text style = {styles.detailTxt}>7.148 house cleaners are ready!</Text>
        <View style = {styles.line}></View>
        <Text style = {styles.detailTxt}>4.5 avg. stars (347.579 approved comments)</Text>
        <View style = {styles.line}></View>
        <Text style = {styles.detailTxt}>158.100 people a year trust Bleta for house cleaning</Text>
        <View style = {styles.line}></View>
        </View>
        <Text style = {styles.commentTitle}>Customer Reviews</Text>
        <View style = {{height: PhoneHeight * 0.17}}>
        <FlatList
            data = {commentData}
            renderItem = {renderCommentBox}
        />
        </View>
        <TouchableOpacity 
            onPress = {() => navigation.navigate('firstHouseCleaning') }
            style = {styles.getServiceBtn}>
            <Text style = {{color: 'white', fontSize: 18, fontWeight:'600'}}>GET 4 QUOTES</Text>
        </TouchableOpacity>
    </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBox: {
        height: PhoneHeight * 0.3,
        width: PhoneWidth,
    },
    image: {
        height: PhoneHeight * 0.3,
        width: PhoneWidth,
    },
    title: {
        fontSize: 24,
        fontFamily: 'PJMasks-Bold',
        color: 'black',
        padding: 15,
    },
    line: {
        width: PhoneWidth * 0.95,
        height: 0.45,
        backgroundColor: 'grey',
        alignSelf: 'center',
    },
    detailTxt: {
        fontFamily: 'PJMasks-Regular',
        padding: 15,
        color: 'gray',
    },
    bottomBox: {
        flex: 1,
        justifyContent: 'space-between',
    },
    infoBox: {
        flexShrink: 0,
    },
    commentTitle: {
        fontFamily: 'PJMasks-Bold',
        color: 'black',
        padding: 10,
        fontSize: 20,
    },
    ratingImage: {
        width: 80,
        height: 20,
    },
    commentBox: {
        padding: 10,
        marginBottom: 10,
    },
    customerName: {
        fontSize: 16,
        fontFamily: 'PJMasks-Regular',
        color: 'black',
    },
    customerComment: {
        fontSize: 16,
        fontFamily: 'PJMasks-Regular',
        color: 'gray',
    },
    commentListContainer: {
        flex: 1,
    },
    buttonContainer: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 20,
    },

    getServiceBtn: {
        alignSelf: 'center',
        backgroundColor: '#b700ff',
        width: PhoneWidth * 0.9,
        height: PhoneHeight * 0.075,
        alignItems: 'center',
        justifyContent: 'center',
    },
    getServiceTxt: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'Library 3 am',
    },
})
