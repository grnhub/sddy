import React, {Component} from 'react';
import {StyleSheet, Text, View, Platform, TouchableOpacity, ScrollView, FlatList, Alert } from 'react-native';
import Borrowing from '../components/Borrowing';

export default class BorrowingScreen extends Component {

    constructor(props){
        super(props);
        this.state = {
          itemList: [],
          category: "0"
  
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

    setCategory(c) {
      this.setState({category: c});
    }
      
    renderItemList({item, index, separators}) {
      if(item.mystate) {
        if(item.mystate == "대여중") {
          return (
            <Borrowing
                item={item}
                onPress={() => Alert.alert('안내', '반납 신청합니다. 평가를 남기시겠습니까?',
                                      [
                                        {
                                          text: '취소',
                                          onPress: ()=> console.log("cancel")
                                        },
                                        {
                                          text: '네',
                                          onPress: ()=> this.props.navigation.push("EvaluateScreen", {item: item}),
                                          style: 'cancel'
                                        }
                                        
                                      ])
                        }
            />
          )
        } else if(item.mystate == "대여완료") {
          return(
          <Borrowing
                item={item}
                onPress={() => console.log("대여완료")}
            />
          )
        }
      }
    
     }

     bottomColorStyle = function(index) {
        if(index == this.state.category) {
          return {
            borderBottomWidth: 2,
            borderBottomColor: '#4630eb'
          }
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