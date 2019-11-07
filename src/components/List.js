import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import Item from "./Item";

export default class List extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    renderItemList({item, index, separators}) {
        return (
            <Item
                item={item}
                onPress={() => this.props.navigation.push(this.props.toNavigate, {item: item}) }

            />
        )
    }


    render() {
        return (
            <View>
                <FlatList
                    data = {this.props.itemList}
                    renderItem={this.renderItemList.bind(this)}
                    keyExtractor={(item)=> item.pno}
                    ></FlatList>
            </View>
        )
    }
}