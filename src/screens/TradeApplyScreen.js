import React, {Component} from 'react';
import {Text, View, ScrollView, TouchableOpacity, Image, CheckBox, DatePickerAndroid} from 'react-native';
import historyCss from '../css/HistoryStyle';
import { StateUpdate } from '../apis/Product';
import {DatePicker} from 'native-base';
import moment from 'moment';
export default class TradeApplyScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            option1: false,
            history: this.props.navigation.getParam("history"),
            allowDateStart: null,
            allowDateEnd: null,
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
        var m = this.state.history.price * ((this.state.allowDateEnd-this.state.allowDateStart)/86400000+1);
        return m.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    render() {
        console.log((this.state.allowDateEnd-this.state.allowDateStart)/86400000+1)
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
                    <View style={{margin: 16}}>
                        <Text>대여기간</Text>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center'}}>
                            <DatePicker
                                defaultDate={new Date()}
                                minimumDate={new Date(new Date().getFullYear(), (new Date().getMonth()), new Date().getDay())}
                                maximumDate={new Date(2022, 12, 31)}
                                locale={"ko"}
                                timeZoneOffsetInMinutes={undefined}
                                modalTransparent={false}
                                animationType={"slide"}
                                androidMode={"default"}
                                placeHolderText="시작날짜 선택"
                                textStyle={{ color: "#4630eb" }}
                                placeHolderTextStyle={{ color: "#d3d3d3" }}
                                onDateChange={(value) => this.setState({allowDateStart: value})}
                                disabled={false}
                                formatChosenDate={value => {return moment(value).format('YYYY-MM-DD');}}
                            />
                            <Text>부터</Text>
                            <DatePicker
                                defaultDate={new Date(new Date().getFullYear(), (new Date().getMonth()), new Date().getDay())}
                                minimumDate={new Date()}
                                maximumDate={new Date(2022, 12, 31)}
                                locale={"ko"}
                                timeZoneOffsetInMinutes={undefined}
                                modalTransparent={false}
                                animationType={"slide"}
                                androidMode={"default"}
                                placeHolderText="마지막날짜 선택"
                                textStyle={{ color: "#4630eb" }}
                                placeHolderTextStyle={{ color: "#d3d3d3" }}
                                onDateChange={(value) => this.setState({ allowDateEnd: value })}
                                disabled={false}
                                formatChosenDate={value => {return moment(value).format('YYYY-MM-DD');}}
                            />
                            <Text>까지</Text>
                            
                        </View>
                    </View>
                    <View style={historyCss.topPadding}>
                        <Text>({this.numberWithCommas()}원/일)로 자동계산된 가격</Text>
                    </View>
                    <View style={[historyCss.row, historyCss.bottomPadding]}>
                        <Text style={historyCss.price}>{this.numberWithCommas2()<=0?0:this.numberWithCommas2()}원</Text>
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
