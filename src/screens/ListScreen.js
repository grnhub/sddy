import React, {Component} from 'react';
import {StyleSheet, Text, View, Platform, TouchableOpacity, ScrollView, FlatList, Alert } from 'react-native';
import Item from '../components/Item';

export default class ListScreen extends Component {

    constructor(props){
        super(props);
        this.state = {
          itemList: [],
          category: '0',
          refreshing: false // 데이터를 가져오는 중인지 판단
        }

        this.getProductList();
      }

      _handleRefresh = () => {
        this.setState({
          refreshing: true,
        }, getProductList() );
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

        this.state.refreshing = false;
      }

    setCategory(c) {
      this.setState({category: c});
    }
      
    renderItemList({item, index, separators}) {
        if(this.state.category == "0") {
          return (
            <Item
                item={item}
                onPress={() => this.props.navigation.push("DetailScreen", {item: item}) }

            />
          )
        }

        if(item.category == this.state.category) {
          return (
            <Item
                item={item}
                onPress={() => this.props.navigation.push("DetailScreen", {item: item}) }

            />
          )
        }
     }

     bottomColorStyle = function(index) {
        if(index == this.state.category) {
          console.log(index);
          return {
            borderBottomWidth: 10,
            borderBottomColor: 'blue',
            borderTopColor: 'red'
          }
      }
    }


    render() {
        return (
            
          <View style={ styles.overall }>
            <View style = { styles.scrollViewHolder }>
                <ScrollView horizontal = { true } showsHorizontalScrollIndicator = { false }>
                  <TouchableOpacity onPress={()=>this.setCategory('0')}>
                    <View style={[this.state.category === '0' ? styles.activeItem: {}]}>
                      <Text style = { [styles.item] }>전체</Text>
                    </View>
                  </TouchableOpacity>
                  <View style = { styles.separator }/>
                  <TouchableOpacity onPress={()=>this.setCategory('1')}>
                    <View style={[this.state.category === '1' ? styles.activeItem: {}]}>
                      <Text style = { [styles.item] }>디지털가전</Text>
                    </View>
                  </TouchableOpacity>
                  <View style = { styles.separator }/>
                  <TouchableOpacity onPress={()=>this.setCategory("2")}>
                    <View style={[this.state.category === '2' ? styles.activeItem: {}]}>
                      <Text style = { [styles.item] }>유아용품</Text>
                    </View>
                  </TouchableOpacity>
                  <View style = { styles.separator }/>
                  <TouchableOpacity onPress={()=>this.setCategory("3")}>
                    <View style={[this.state.category === '3' ? styles.activeItem: {}]}>
                      <Text style = { [styles.item] }>운동기기</Text>
                    </View>
                  </TouchableOpacity>
                  <View style = { styles.separator }/>
                  <TouchableOpacity onPress={()=>this.setCategory("4")}>
                    <View style={[this.state.category === '4' ? styles.activeItem: {}]}>
                      <Text style = { [styles.item] }>뷰티미용</Text>
                    </View>
                  </TouchableOpacity>
                  <View style = { styles.separator }/>
                  <TouchableOpacity onPress={()=>this.setCategory("5")}>
                    <View style={[this.state.category === '5' ? styles.activeItem: {}]}>
                      <Text style = { [styles.item] }>기타</Text>
                    </View>
                  </TouchableOpacity>
              </ScrollView>
            </View>
            <FlatList
                    data = {this.state.itemList}
                    renderItem={this.renderItemList.bind(this)}
                    ItemSeparatorComponent={item => {
                      return <View></View>
                    }}
                    keyExtractor={(item, index)=> index.toString()}
                    refreshing={this.state.refreshing}
                    onRefresh={this._handleRefresh}
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
        paddingTop: 7,
        paddingBottom: 7,
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
     activeItem: {
      borderBottomColor:'#4630eb',
      borderBottomWidth:2
    }
     
  });