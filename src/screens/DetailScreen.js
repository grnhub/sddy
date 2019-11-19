import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, Alert, ScrollView, PickerIOSComponent} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class DetailScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product: this.props.navigation.getParam("item")
        }
        console.log(this.state.product);
    }

    numberWithCommas() {
        var m = this.state.product.price;
        return m.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    
    async likeCountIncrease() {
        //console.log(this.state.product._id);
        url = "http://ec2-52-79-239-153.ap-northeast-2.compute.amazonaws.com:3000/product/" + this.state.product._id;
        await fetch(url, {
          method: "PUT"
        }).then(function(response) {
            //console.log(response);
            //return response.json();
          }).then(function(data) {
            //console.log(data);
        });

    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView  >
                    <View style={styles.top}>
                        <Image source={{uri: this.state.product.image}}
                            style={styles.image} />
                    </View>
                    <View style={styles.middle}>
                        <View style={styles.flexsetting}>
                            <Text style={styles.productName}>{this.state.product.pname}</Text>
                            <View style={styles.interest}>
                                <TouchableOpacity onPress={()=>Alert.alert('관심목록', '관심목록에 추가하시겠습니까?',
                                        [
                                            {
                                                text: '취소',
                                                onPress: () => console.log('Cancel Pressed'),
                                                style: 'cancel',
                                            },
                                            {   text: '예', 
                                                onPress: () => this.likeCountIncrease()},
                                        ],
                                        {cancelable: false}
                                    )}>
                                    <MaterialCommunityIcons name="heart-outline" size={32}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Text style={styles.price}>{this.numberWithCommas()}원/일</Text>
                    </View>
                    <View style={styles.bottom}>
                        <TouchableOpacity onPress={()=> Alert.alert('채팅신청',
                                                '채팅을 신청하시겠습니까?',
                                                [
                                                {
                                                    text: '취소',
                                                    onPress: () => console.log('Cancel Pressed'),
                                                    style: 'cancel',
                                                },
                                                {text: '예', onPress: () => this.props.navigation.navigate("ChattingScreen")},
                                                ],
                                                {cancelable: false}
                                            )
                            }
                                            style={styles.button}>
                            <Text style={styles.buttonText}>채팅</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=> Alert.alert('히스토리',
                                                    '어떤 화면으로?',
                                                    [
                                                    {
                                                        text: '그냥',
                                                        onPress: ()=>this.props.navigation.navigate("HistoryScreen", {history: this.state.product}),
                                                        style: 'cancel',
                                                    },
                                                    {   text: '등록자 버전', 
                                                        onPress: ()=>this.props.navigation.navigate("HistoryScreen_registrant", {history: this.state.product})
                                                    },
                                                    ],
                                                    {cancelable: false}
                                                    )
                                                }
                                            style={styles.button}>
                            <Text style={styles.buttonText}>히스토리</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate("TradeApplyScreen", {history: this.state.product})}
                                            style={styles.button}>
                            <Text style={styles.buttonText}>렌탈신청</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.middle}>
                        <View style={{flexDirection:'row',width:'100%'}}>
                            <View>
                                <Text style={styles.gray}>대여가능기간</Text>
                                <Text style={styles.date}>{this.state.product.allowDateStart.substring(0,10)} ~ {this.state.product.allowDateEnd ? this.state.product.allowDateEnd.substring(0,10) : "2099-12-12" }</Text>
                            </View>
                        </View>
                        <Text style={styles.gray}>제품 설명</Text>
                        <Text style={styles.content}>{this.state.product.content}</Text>
                    </View> 
                    
                    
                </ScrollView>
            </View>
        )
    }
}
// Platform.select({
//     ios: {

//     },
//     android: {

//     }
//   });

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
      backgroundColor: 'white'

    },
    image: {
        width: "100%", 
        height: "100%",
        margin: 20,
        padding: 5,
        resizeMode: 'contain'
    },
    date: {
        fontSize: 20,
        marginBottom: 5
    },
    content: {
        fontSize: 20
    },
    top: {
        width:'100%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5
    },
    middle: {
        width:'100%',
        justifyContent: 'center',
        marginTop: 8,
        marginLeft: 16,
        marginRight: 24,
        marginBottom: 8,
    },
    flexsetting: {
        display: 'flex',
        flexDirection: 'row'
    },
    productName: {
        flex: 8,
        fontSize: 32,
        marginTop: 8,
        marginBottom: 8,
        
        
    },
    interest: {
        flex: 2,
        justifyContent:'center',
        alignItems:'center',
        marginRight:15
        
    },
    price: {
        flex: 0,
        color: '#F15F5F',
        fontSize: 24,
        alignSelf: "flex-end",
        marginRight: 32
    },
    bottom: {
        width:'100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    gray: {
        fontSize: 16,
        color: '#8c8c8c',
        marginTop: 10,
    },
    button: {
        width: "30%",
        height: 36,
        backgroundColor: '#4630eb',
        borderRadius: 8,
        padding:5,
        margin: 5
    },
    buttonText: {
        paddingTop: 5,
        fontSize: 18,
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    scrollview: {
        width: "100%",
        height: "100%",
    }
});