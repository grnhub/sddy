import React, {Component} from 'react';
import {Text, View, ScrollView, TouchableOpacity, Image, CheckBox, DatePickerAndroid} from 'react-native';
import historyCss from '../css/HistoryStyle';
import { StateUpdate } from '../apis/Product';

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
            StateUpdate(this.state.history._id);
            this.props.navigation.navigate("CompleteScreen", {item: this.state.history});
        }
        else {
            console.log("*");
        }
    }

    numberWithCommas() {
        var m = this.state.history.price;
        return m.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    numberWithCommas2() {
        var m = this.state.history.price * 5;
        return m.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
                            <Text style={historyCss.name}>{this.state.history.nickname}</Text>
                            <Text style={historyCss.productName}>{this.state.history.pname}</Text>
                            <Text style={historyCss.priceDetail}>{this.numberWithCommas()}원/일</Text>
                        </View>
                    </View>
                    <View style={historyCss.topPadding}>
                        <Text>대여기간</Text>
                    </View>
                    <View style={[historyCss.row, historyCss.bottomPadding]}>
                        <Text style={historyCss.intervalDate}>{this.state.history.allowDateStart.substring(0,10)} 부터 {this.state.history.allowDateEnd ? this.state.history.allowDateEnd.substring(0,10) : "2099-12-12" } 까지</Text>
                    </View>
                    <View style={historyCss.topPadding}>
                        <Text>({this.numberWithCommas()}원/일)로 자동계산된 가격</Text>
                    </View>
                    <View style={[historyCss.row, historyCss.bottomPadding]}>
                        <Text style={historyCss.price}>{this.numberWithCommas2()}원</Text>
                    </View>
                    <View style={historyCss.topPadding}>
                        <Text>대여 신청정보</Text>
                        <Text style={historyCss.privacy}>앙마태균 010-1234-1234</Text>
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