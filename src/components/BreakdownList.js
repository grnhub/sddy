import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import BreakdownContent from "./BreakdownContent";

export default class BreakdownList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mockData : ""
        }
        
    }

    renderChatList({item, index, separators}) {
        return (
            <BreakdownContent
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
                    keyExtractor={data => data.date}
                    ></FlatList>
            </View>
        )
    }
}