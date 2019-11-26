import React, {Component} from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import historyCss from '../css/HistoryStyle';

export default class HistoryComp extends Component {

    constructor(props) {
        super(props);
        //console.log(this.props.history);
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
 
    render() {
        return(
            <View style={{}}>
                <View style={historyCss.row}>
                    <View style={historyCss.s1}><Image source={require('../images/location1.png')} style={historyCss.location}></Image></View>
                    <View style={historyCss.s2}><Text>대여자 {this.props.history.lender}</Text></View>
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