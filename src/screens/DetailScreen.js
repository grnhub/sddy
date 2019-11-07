import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, Alert, ScrollView} from 'react-native';

export default class DetailScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product: this.props.navigation.getParam("item")
        }
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
                        <Text style={styles.productName}>{this.state.product.name}</Text>
                        <Text style={styles.price}>{this.state.product.price}원/일</Text>
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
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate("HistoryScreen", {history: this.state.product})}
                                            style={styles.button}>
                            <Text style={styles.buttonText}>히스토리</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate("TradeApplyScreen", {history: this.state.product})}
                                            style={styles.button}>
                            <Text style={styles.buttonText}>렌탈신청</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.middle}>
                        <Text style={styles.gray}>대여가능기간</Text>
                        <Text style={styles.date}>{this.state.product.startDate} ~ {this.state.product.endDate}</Text>
                        <Text style={styles.gray}>제품 설명</Text>
                        <Text style={styles.content}>{this.state.product.content}</Text>
                    </View>
                    
                    
                </ScrollView>
            </View>
        )
    }
}

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
    productName: {
        fontSize: 32,
        marginTop: 8,
        marginBottom: 8
    },
    price: {
        color: '#F15F5F',
        fontSize: 24,
        alignSelf: "flex-end",
        marginRight: 32
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
        //alignItems: 'left',
        marginTop: 8,
        marginLeft: 16,
        marginRight: 16,
        marginBottom: 8,
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