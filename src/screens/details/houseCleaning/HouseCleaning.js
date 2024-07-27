import { Image, SafeAreaView, StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { PhoneHeight, PhoneWidth } from '../../../constants/config'

export default function HouseCleaning() {
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
        <TouchableOpacity style = {styles.getServiceBtn}>
            <Text style = {{color: 'white', fontSize: 14}}>GET 4 QUOTES</Text>
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
        width: PhoneWidth
    }, 
    image: {
        height: PhoneHeight * 0.3,
        width: PhoneWidth
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        padding: 15,
    },
    line: {
        width: PhoneWidth * 0.95,
        height: 0.45,
        backgroundColor: 'grey',
        alignSelf: 'center'
    },
    detailTxt: {
        fontWeight:'300',
        padding: 15,
    },
    bottomBox:{
        borderWidth: 0,
        borderColor: 'pink',
        height: PhoneHeight * 0.7
    },
    commentTitle: {
        fontWeight: 'bold',
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
    getServiceBtn: {
        alignSelf: 'center',
        backgroundColor: '#b700ff',
        width: PhoneWidth * 0.9,
        height: PhoneHeight * 0.05,
        alignItems: 'center',
        justifyContent:'center'
    }
})