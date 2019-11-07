import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';

export default class CompleteScreen extends Component {
 
    constructor(props) {
        super(props);
        Alert.alert('결제가 정상적으로 완료되었습니다.');
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>결제가 완료됐습니다!</Text>
                <Text style={styles.content}>-결제내역-</Text>
                <Text style={styles.image}>ㅁ상품이미지ㅁ</Text>
                <Text style={styles.content}>로봇청소기</Text>
                <Text style={styles.content}>홍길동</Text>
                <Text style={styles.content}>결제금액 : 5,000원</Text>
                <Text style={styles.content}>대여기간 : ~2019.11.15</Text>
                <Text style={styles.content}>거래현황 : 배송준비중</Text>
                <TouchableOpacity onPress={()=>this.props.navigation.popToTop()} style={styles.button}>
                    <Text style={styles.buttonText}>메인화면으로</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create(
    {
       container: {
            flex: 1,
            width: "100%",
            padding: 10,
            backgroundColor: 'white',
            alignItems: 'center'
       },
       title: {
           fontSize: 24
       },
       content: {
           fontSize: 18
       },
       image: {
            height: 300,
            paddingTop: 15,
            paddingBottom: 15
       },
       button: {
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            width: "97%",
            height: 46,
            backgroundColor: '#4630eb',
            borderRadius: 8,
            padding:5,
            margin: 5
       },
       buttonText: {
           color: 'white',
       }
    }
);