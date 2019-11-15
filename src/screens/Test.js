import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView,Image } from 'react-native';
import { Rating, AirbnbRating,Button } from 'react-native-elements';
import { Container, Header, Content, DatePicker,Textarea, Form } from 'native-base';
import historyCss from '../css/HistoryStyle';
import Stars from 'react-native-stars';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class Test extends Component {
 
    constructor(props) {
        super(props);

        console.log("------------------------------ Test");
        this.getProductList();
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

    ///api/commentDapp post dapp_name=(string)&author=(string)&pwd=(string)&parent_author=(string)&parent_permlink=(string)&permlink=(string)&title=(string)&body=(string)&json_meta=(string)

    async getProductList() {
        url = "http://developer.futurepia.io:3032/api/commentDapp";
        await fetch(url, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            "dapp_name": "blockit",
            "author": "blockit",
            "pwd": "qmffhrdlt",
            "permlink": '20',
            "title":"Hello Hong Ta777777777e",
            "body":"Bye Hong Gyu7777777777n"
          })
        }).then(resp => {
          if (!(200 <= resp.status < 300)) {
            console.warn("Requests 에러");
          }
          console.log('------------------- resp');
          console.log(resp);
        }).then(data => {
            console.log('------------------- data');
            console.log(data);
          //this.setState({itemList: data});
        });    

    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <View style={{flex:2, 
                    flexDirection:"row",
                    marginBottom: 5,
                    paddingBottom: 5,
                    borderBottomWidth: 1,
                    borderBottomColor: "#cbcbcb",
                    paddingRight: 10,
                    paddingLeft: 10,
                    fontSize: 20}}> 
                    <View style={{flex: 2}}>
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

                <View style={{flex: 2,margin:8}}>
                    <Text>상품평가</Text>
                    <View style={{alignItems:'center',borderWidth:1}}>
                        <Stars
                            default={2.5}
                            count={5}
                            half={true}
                            starSize={1000} 
                            fullStar={<MaterialCommunityIcons name={'star'} style={[styles.myStarStyle]}/>}
                            emptyStar={<MaterialCommunityIcons name={'star-outline'} style={[styles.myStarStyle, styles.myEmptyStarStyle]}/>}
                            halfStar={<MaterialCommunityIcons name={'star-half'} style={[styles.myStarStyle]}/>}
                            style={{width:400, height:400}}
                        />
                    </View>   
                </View>
                
                <View style={{flex: 2,margin:8}}>
                    <View><Text>상세평가</Text></View>
                    <Content>
                        <Form>
                            <Textarea rowSpan={3} bordered placeholder="Textarea" />
                        </Form>
                    </Content>
                </View>
                
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        padding: 10,}}>
                    <Button
                    buttonStyle={{alignContent: 'center',
                    justifyContent: 'center',
                    width: 130,
                    backgroundColor: '#cdcdcd'}}
                    onPress={() => console.log('aa')}
                    
                    title='취소하기'
                    />
    
                    <Button
                    buttonStyle={{alignContent: 'center',
                    justifyContent: 'center',
                    width: 130,
                    backgroundColor: '#4630EB'}}
                    onPress={() => console.log('bb')}
                    title='등록하기' 
                    />
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
       },
       myStarStyle: {
        color: 'yellow',
        backgroundColor: 'transparent',
      },
      myEmptyStarStyle: {
        color: 'white',
      }
    }
);