import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ChatList from '../components/ChatList';

const mockData = [
    {
        name: "홍길동",
        state: "거래중",
        date: "10초 전",
        lastChat: "감사합니다!!",
        profile: "../images/user1.png"
    },
    {
        name: "강원기",
        state: "거래완료",
        date: "26일 전",
        lastChat: "좋은하루되세요!",
        profile: "../images/user7.png"
    }
];


export default class ChattingScreen extends Component {

    constructor(props){
        super(props);
        this.state = {
          chat: mockData
        };
    }
   
    render() {
        return (
            <View>
                <ChatList chatList={this.state.chat} {...this.props}></ChatList>
            </View>
        )
    }
}
