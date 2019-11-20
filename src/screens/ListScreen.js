import React, {Component} from 'react';
import {StyleSheet, Text, View, Platform, TouchableOpacity, ScrollView, FlatList,Alert } from 'react-native';
import Item from '../components/Item';

export default class ListScreen extends Component {

    constructor(props){
        super(props);
        this.state = {
          itemList: [],
          category: 0}

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
       alert("hi")
       alert(index);
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
      alert(this.state.category === '0'  ? alert("0"): alert("x"));
      alert(this.state.category === '1' ? alert("1"): alert("x"))
        return (
            
          <View style={ styles.overall }>
            <View style = { styles.scrollViewHolder }>
                <ScrollView horizontal = { true } showsHorizontalScrollIndicator = { false }>
                  <TouchableOpacity onPress={()=>this.setCategory(0)}>
                    <Text style = { [styles.item, this.state.category === 0 ? styles.activeItem: {}] }>전체</Text>
                  </TouchableOpacity>
                  <View style = { styles.separator }/>
                  <TouchableOpacity onPress={()=>this.setCategory(1)}>
                    <Text style = { [styles.item, this.state.category === 1 ? styles.activeItem: {}] }>디지털/가전</Text>
                  </TouchableOpacity>
                  <View style = { styles.separator }/>
                  <TouchableOpacity onPress={()=>this.setCategory("2")}>
                    <Text style = { [styles.item, this.state.category === '2' ? styles.activeItem: {}]  }>유아용품</Text>
                  </TouchableOpacity>
                  <View style = { styles.separator }/>
                  <TouchableOpacity onPress={()=>this.setCategory("3")}>
                    <Text style = {  [styles.item, this.state.category === '3' ? styles.activeItem: {}]  }>운동기기</Text>
                  </TouchableOpacity>
                  <View style = { styles.separator }/>
                  <TouchableOpacity onPress={()=>this.setCategory("4")}>
                    <Text style = {  [styles.item, this.state.category === '4' ? styles.activeItem: {}]  }>뷰티/미용</Text>
                  </TouchableOpacity>
                  <View style = { styles.separator }/>
                  <TouchableOpacity onPress={()=>this.setCategory("5")}>
                    <Text style = {  [styles.item, this.state.category === '5' ? styles.activeItem: {}]  }>기타</Text>
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
     activeItem: {
      borderBottomWidth: 2,
      borderBottomColor: 'blue',
    }
     
  });