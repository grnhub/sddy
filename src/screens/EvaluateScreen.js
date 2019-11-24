import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView,Image,Platform } from 'react-native';
import { Rating, AirbnbRating,Button } from 'react-native-elements';
import { Container, Header, Content, DatePicker,Textarea, Form } from 'native-base';
import historyCss from '../css/HistoryStyle';
import Stars from 'react-native-stars';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { addHistory } from '../apis/HistoryAdd';
import { StateUpdate } from '../apis/Product';

export default class EvaluateScreen extends Component {
 
    constructor(props) {
        super(props);
        this.state = {
            product : this.props.navigation.getParam("item"),
            userMemo: '', 
            Default_Rating: 0,
            //To set the default Star Selected
            Max_Rating: 5,
            //To set the max number of Stars
        }
        //Filled Star. You can also give the path from local
        this.Star = 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';

        //Empty Star. You can also give the path from local
        this.Star_With_Border = 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';
    }

    UpdateRating(key) {
        this.setState({ Default_Rating: key });
        //Keeping the Rating Selected in state
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

    getDateNow() {
        var date = new Date();
        var mm = date.getMonth() + 1; // getMonth() is zero-based
        var dd = date.getDate();
      
        return [date.getFullYear(),
                (mm>9 ? '' : '0') + mm,
                (dd>9 ? '' : '0') + dd
               ].join('-');
    };

    async updateFuturpia() {
        console.log(this.state.Default_Rating);
        var pid = this.state.product.pid;

        var bodyObj = {
            id: pid,
            userMemo : this.state.userMemo,
            rentDate : '2019-01-05',
            returnDate : this.getDateNow(),
            lender : '앙마균태',
            rentalDays : "10"
        };

        console.log(pid);

        addHistory(pid, bodyObj);   // 히스토리 추가
        StateUpdate(this.state.product._id);           // mystate 변경 (대여중, 대여완료 )
        this.props.navigation.popToTop();
    }


    changeUserMemo(txt) {
        this.setState({
            userMemo: txt
        });
    }

    ///api/commentDapp post dapp_name=(string)&author=(string)&pwd=(string)&parent_author=(string)&parent_permlink=(string)&permlink=(string)&title=(string)&body=(string)&json_meta=(string)

    render() {
        let React_Native_Rating_Bar = [];
        //Array to hold the filled or empty Stars
        for (var i = 1; i <= this.state.Max_Rating; i++) {
        React_Native_Rating_Bar.push(
            <TouchableOpacity
            activeOpacity={0.7}
            key={i}
            onPress={this.UpdateRating.bind(this, i)}>
            <Image
                style={styles.StarImage}
                source={
                i <= this.state.Default_Rating
                    ? { uri: this.Star }
                    : { uri: this.Star_With_Border }
                }
            />
            </TouchableOpacity>
        );
        }
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
                        <Image source={{uri: this.state.product.image}} style={{width: "100%", 
                        height: '90%',
                        margin: 5,
                        padding: 5,
                        resizeMode: 'cover',
                        borderRadius: 15}}></Image>
                    </View>
                    <View style={historyCss.namebox}>
                        <Text style={historyCss.name}>{this.state.product.nickname}</Text>
                        <Text style={historyCss.productName}>{this.state.product.pname}</Text>
                    </View>
                </View>
                <View style={styles.content2}>
                    <Text style={styles.content2_text}>평가를 남기시면 SNAC을 드립니다.</Text>
                </View>

                <View style={{flex: 1,margin:8}}>
                    <Text>상품평가</Text>
                    <View style={{alignItems:'center'}}>
                        <View style={styles.childView}>{React_Native_Rating_Bar}</View>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={styles.button}
                            onPress={() => alert(this.state.Default_Rating)}>
        
                        </TouchableOpacity>
                    </View>
                </View> 
                
                <View style={{flex: 2,margin:8}}>
                    <View><Text>상세평가</Text></View>
                    <Content>
                        <Form>
                            <Textarea rowSpan={3} bordered placeholder="" onChangeText={(text) => this.changeUserMemo(text)} />
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
                        onPress={() => this.props.navigation.goBack()}
                        title='취소하기'
                    />
    
                    <Button
                        buttonStyle={{alignContent: 'center',
                        justifyContent: 'center',
                        width: 130,
                        backgroundColor: '#4630EB'}}
                        onPress={() => this.updateFuturpia()}
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
      },
      MainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Platform.OS === 'ios' ? 20 : 0,
      },
      childView: {
        justifyContent: 'center',
        flexDirection: 'row',
      },
      button: {
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#8ad24e',
      },
      StarImage: {
        width: 40,
        height: 40,
        resizeMode: 'cover',
      },
      textStyle: {
        textAlign: 'center',
        fontSize: 23,
        color: '#000',
      },
      textStyleSmall: {
        textAlign: 'center',
        fontSize: 16,
        color: '#000',
      },
    }
);