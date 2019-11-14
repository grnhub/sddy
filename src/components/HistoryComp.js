import React, {Component} from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import historyCss from '../css/HistoryStyle';

export default class HistoryComp extends Component {

    constructor(props) {
        super(props);
        console.log(this.props.history);
    }

    static defaultProps = {
        history: {
            userMemo: '',
            rentDate: '',
            returnDate: '',
            repairMemo: '',
            repairDate: '',
            lender: '',
            rentalDays: ''
        }

    }

    // 어차피 우리는 mongoose를 가지고 노는게 중요한게 아니라 
    // 블록체인 기술을 사용한다는 것이 중요하기 때문에
    // product 에 다 때려쳐박자
    // 빨리 끝내야하니깐 ^_^ ..;
    // 싕스쌤이 잘 해결해주었지만 사용하지 않을 것..
    // 언넝 web3 



    render() {
        return(
            <View>
                <View style={historyCss.row}>
                    <View style={historyCss.s1}><Image source={require('../images/location1.png')} style={historyCss.location}></Image></View>
                    <View style={historyCss.s2}><Text>대여</Text></View>
                    <View style={historyCss.s2}><Text>{this.props.history.rentDate ? this.props.history.rentDate.substring(0,10) : "-"}</Text></View>
                </View>
                <View style={historyCss.row2}>
                    <View style={historyCss.s1}><Image source={require('../images/location1.png')} style={historyCss.location}></Image></View>
                    <View style={historyCss.s2}><Text>반납</Text></View>
                    <View style={historyCss.s2}><Text>{this.props.history.returnDate ? this.props.history.returnDate.substring(0,10) : "-"}</Text></View>
                </View>
                <View style={historyCss.row}>
                    <View style={historyCss.s1}></View>
                    <Text style={[historyCss.s3, historyCss.memo]}>{this.props.history.userMemo}</Text>
                </View>
                <View style={historyCss.row2}>
                    <View style={historyCss.s1}><Image source={require('../images/location1.png')} style={historyCss.location}></Image></View>
                    <View style={historyCss.s2}><Text>수리</Text></View>
                    <View style={historyCss.s2}><Text>{this.props.history.repairDate ? this.props.history.repairDate.substring(0,10) : "-"}</Text></View>
                </View>
                <View style={historyCss.row}>
                    <View style={historyCss.s1}></View>
                    <View style={[historyCss.s3, historyCss.memo]}><Text>{this.props.history.repairMemo}</Text></View>
                </View>
            </View>
        )
    }
}