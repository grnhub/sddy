import React, {Component} from 'react';
import {Text, View, ScrollView, TouchableOpacity, Image, CheckBox, DatePickerAndroid} from 'react-native';
import historyCss from '../css/HistoryStyle';

export default class TradeApplyScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            option1: false,
            history: this.props.navigation.getParam("history")
        }
    }

    pay() {
        if(this.state.option1) {
            this.props.navigation.navigate("CompleteScreen");
        }
        else {
            console.log("*");
        }
    }

    render() {
        return (
            <View style={historyCss.container}>
                <ScrollView>
                    <View style={historyCss.row}> 
                        <View style={{flex: 3}}>
                            <Image source={{uri: this.state.history.image}} style={historyCss.image}></Image>
                        </View>
                        <View style={historyCss.namebox2}>
                            <Text style={historyCss.name}>홍길동</Text>
                            <Text style={historyCss.productName}>{this.state.history.name}</Text>
                            <Text style={historyCss.priceDetail}>2,000원/일</Text>
                        </View>
                    </View>
                    <View style={historyCss.topPadding}>
                        <Text>대여기간</Text>
                    </View>
                    <View style={[historyCss.row, historyCss.bottomPadding]}>
                        <Text style={historyCss.intervalDate}>2019.10.15부터 2019.10.21까지</Text>
                    </View>
                    <View style={historyCss.topPadding}>
                        <Text>(2,000원/일)로 자동계산된 가격</Text>
                    </View>
                    <View style={[historyCss.row, historyCss.bottomPadding]}>
                        <Text style={historyCss.price}>14,000원</Text>
                    </View>
                    <View style={historyCss.topPadding}>
                        <Text>대여 신청정보</Text>
                        <Text style={historyCss.privacy}>홍길동 010-1234-1234</Text>
                        <View style={historyCss.checkbox}>
                            <CheckBox onValueChange={value => this.setState({option1: value})}/>
                            <Text style={historyCss.notice}>연락처 정보 노출 동의</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={()=>this.pay()} style={historyCss.payButton}>
                        <Text style={historyCss.payText}>결제하기</Text>                       
                    </TouchableOpacity>

                </ScrollView>
            </View>
        )
    }
}