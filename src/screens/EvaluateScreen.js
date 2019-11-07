import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';
import { Rating, AirbnbRating } from 'react-native-elements';

export default class EvaluateScreen extends Component {
 
    constructor(props) {
        super(props);
    }

    selectStar(index) {
        console.log("================" + index);
        for ( var i = 0 ; i < index ; i++ ) {
            console.log(i);
        }
        return(
            <Text>asdfffsafd</Text>
        )
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <Text style={styles.title}>평가</Text>
                <View style={[styles.rowflex, styles.content1]}> 
                    <Text style={styles.content1_image}>*이미지넣을곳*</Text>
                    <Text style={styles.content_title}>안마의자 | 홍길동</Text>
                </View>
                <View style={styles.content2}>
                    <Text style={styles.content2_text}>평가를 남기시면 SNAC을 드립니다.</Text>
                </View>
                <View style={[styles.rowflex, styles.content3]}>
                    <Text>상품평가</Text>

                </View>
                <AirbnbRating
                    count={5}
                    reviews={["Terrible", "Bad", "Good",  "Very Good",  "Amazing"]}
                    ratingColor='#D4F4FA'
                    defaultRating={0}
                    size={50}
                    ratingTextColor='#D4F4FA'
                    ratingBackgroundColor='#D4F4FA'
                    onPress={()=>console.log("=====")}
                    />
                <View styles={styles.content4}>
                    <Text>상세평가</Text>
                    <TextInput style={styles.textinput} multiline numberOfLines={9}></TextInput>
                </View>
                <View style={styles.rowflex}>
                    <TouchableOpacity style={[styles.button, {backgroundColor: '#cdcdcd'}]}>
                        <Text>취소하기</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, {backgroundColor: '#4630eb', color: 'white'}]}>
                        <Text>등록하기</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create(
    {
       container: {
            flex: 1,
            width: "100%",
            backgroundColor: 'white',
            alignItems: 'center',
            paddingTop: 10,
            paddingBottom: 25
       },
       title: {
           fontSize: 24
       },
       rowflex: {
            flex: 1,
            flexDirection: "row",
            //width: "100%",
            // borderWidth:1
            // paddingTop: 10,
            // paddingLeft: 10,
            // marginTop: 10,
       },
       content1: {
            paddingBottom: 5
       },
       content1_image: {
           width: 210,
           height: 140
       }, 
       content_title: {
            fontSize: 22,
            paddingLeft: 0,
            paddingRight: 30
       },
       content2: {
           backgroundColor: '#D4F4FA',
           width: "100%",
           height: 80,
           justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
       },
       content2_text: {
           color: 'black'
       },
       content3: {

       },
       content4: {
            width: "100%",
            marginBottom: 10
       },
       textinput: {
            width: 400,
            height: 160, 
            borderColor: 'gray', 
            borderWidth: 1
       },
       button: {
           width: 160,
           height: 46,
           borderRadius: 8,
            padding:5,
            margin: 5,
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            marginLeft:22
       }
    }
);