import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Platform, TouchableOpacity } from 'react-native';
import List from '../components/List';

export default class CategoryScreen extends Component {

    constructor(props){
        super(props);
        this.state = {
          itemList: this.props.navigation.getParam("item"),
          mockList: this.props.navigation.getParam("mockitem")
        };
        console.log("Category Screen");
    }

    render() {
        return (   
            <View style={{paddingTop:5, paddingBottom: 50, width: "100%", height: "100%"}}>
                <List itemList={this.state.itemList} toNavigate="DetailScreen" {...this.props}></List>
            </View>
        )
    }
}
