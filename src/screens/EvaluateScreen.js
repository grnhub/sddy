import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView,Image } from 'react-native';
import { Rating, AirbnbRating } from 'react-native-elements';
import { Container, Header, Content, DatePicker,Textarea, Form } from 'native-base';
import historyCss from '../css/HistoryStyle';
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
                <View style={{flex:3, 
                    flexDirection:"row",
                    marginBottom: 5,
                    paddingBottom: 5,
                    borderBottomWidth: 1,
                    borderBottomColor: "#cbcbcb",
                    paddingRight: 10,
                    paddingLeft: 10,
                    fontSize: 20}}> 
                    <View style={{flex: 2.5}}>
                        <Image source={{uri: 'http://img.hani.co.kr/imgdb/resize/2018/0209/00500596_20180209.JPG'}} style={historyCss.image}></Image>
                    </View>
                    <View style={historyCss.namebox}>
                        <Text style={historyCss.name}>홍길동</Text>
                        <Text style={historyCss.productName}>'Samsung Galaxy'</Text>
                    </View>
                </View>
                <View style={styles.content2}>
                    <Text style={styles.content2_text}>평가를 남기시면 SNAC을 드립니다.</Text>
                </View>
                <View style={[styles.rowflex, styles.content3]}>
                    <Text>상품평가</Text>
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
                </View>
                
                <View style={{flex: 2}}>
                    <View><Text>상세평가</Text></View>
                    <Content>
                        <Form>
                            <Textarea rowSpan={3} bordered placeholder="Textarea" />
                        </Form>
                    </Content>
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