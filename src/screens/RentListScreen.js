import React, {Component} from 'react';
import {StyleSheet, Text, View, Platform, TouchableOpacity, ScrollView, FlatList, Alert } from 'react-native';
import Item from '../components/Item';

export default class RentListScreen extends Component {

    constructor(props){
        super(props);
        this.state = {
          itemList: []
        };
        this.getProductList();
      }

    async getProductList() {
        url = "http://ec2-52-79-239-153.ap-northeast-2.compute.amazonaws.com:3000/product";
        await fetch(url, {
            method: "GET"
        }).then(resp => {
            if (!(200 <= resp.status < 300)) {
            console.warn("Requests 에러");
            }
            return resp.json();
        }).then(data => {
            //console.log(data);
            this.setState({itemList: data});
        });
    }

      
    renderItemList({item, index, separators}) {
      if(item.mystate == "대여중") {
          return (
            <Item
                item={item}
                onPress={() => this.props.navigation.push("DetailScreen", {item: item}) }
            />
          )
      }
     }

    render() {
        return (
            
          <View style={ styles.overall }>
            <FlatList
                    data = {this.state.itemList}
                    renderItem={this.renderItemList.bind(this)}
                    ItemSeparatorComponent={item => {
                      return <View></View>
                    }}
                    keyExtractor={(item, index)=> index.toString()}
            ></FlatList>
        </View>
        )
    }
}

const styles = StyleSheet.create(
  {
    overall: {
      width: "100%",
      height: "100%"
    },
     container:
     {
        flex: 1,
        justifyContent: 'center'
     },
  
     scrollViewHolder:
     {
        borderBottomWidth: 1,
        borderTopColor: 'rgba(0,0,0,0.5)',
        borderBottomColor: 'rgba(0,0,0,0.5)'
     }, 
     item:
     {
        paddingTop: 5,
        paddingBottom: 5,
        paddingRight: 16,
        paddingLeft: 16,
        color: 'black',
        fontSize: 16
     },
     separator:
     {
        backgroundColor: 'rgba(0,0,0,0.5)',

     },
     selectTab: {
       borderBottomColor: '#4630eb',
       borderBottomWidth: 1,
     },
  });