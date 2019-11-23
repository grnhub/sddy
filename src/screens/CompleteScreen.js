import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Alert, Image} from 'react-native';

export default class CompleteScreen extends Component {
 
    constructor(props) {
        super(props);
        this.state = {
            item: this.props.navigation.getParam("item")
        }
        Alert.alert('결제가 정상적으로 완료되었습니다.');
    }

    numberWithCommas() {
        var m = this.state.item.price;
        return m.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>결제가 완료됐습니다!</Text>
                <Text style={styles.content}>결제내역</Text>
                <Image source={this.state.item.image ? {uri: this.state.item.image } : require('../images/teed.png')}
                            style={styles.image} />
                <Text style={styles.detail}>{this.state.item.pname}</Text>
                <Text style={styles.detail}>결제금액 : {this.numberWithCommas()}원</Text>
                <Text style={styles.detail}>대여기간 : {this.state.item.allowDateStart.substring(0,10)} ~ {this.state.item.allowDateEnd ? this.state.item.allowDateEnd.substring(0,10) : "2019-12-20" }</Text>
                <Text style={styles.detail}>거래현황 : 배송준비중</Text>

                <TouchableOpacity onPress={()=>this.props.navigation.popToTop()} 
                                    style={styles.button}>
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
           width: "100%",
           fontSize: 20,
           backgroundColor: '#4630eb',
           color: '#ffffff',
           textAlign: 'center',
           alignContent: 'center',
           alignItems: 'center'
       },
       image: {
            width: "100%", 
            height: 200,
            margin: 20,
            padding: 5,
            resizeMode: 'contain'
       },
       button: {
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            width: "97%",
            height: 46,
            backgroundColor: '#4630eb',
            borderRadius: 8,
            padding:30,
            marginTop: 50
       },
       buttonText: {
           color: 'white',
       },
       detail: {

       },
       footer: {
        width:'100%',
        height:'20%',
        //backgroundColor: '#1ad657',
      },
    }
);