import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import ChatContent from "./ChatContent";

export default class ChatList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    renderChatList({item, index, separators}) {
        return (
            <ChatContent
                chat={item}
                //onPress={() => this.props.navigation.push(this.props.toNavigate, {chat: item}) }
                onPress={() => console.log(item.name)}
            />
        )
    }


    render() {
        return (
            <View>
                <FlatList
                    data = {this.props.chatList}
                    renderItem={this.renderChatList.bind(this)}
                    ></FlatList>
            </View>
        )
    }
}