import React, {Component} from 'react';
import {StyleSheet, Text, View, Platform, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import Item from '../components/Item';

export default class ListScreen extends Component {

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
          console.log(data);
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
        if(index == this.state.category) {
          return {
            borderBottomWidth: 2,
            borderBottomColor: '#4630eb'
          }
      }
    }


    render() {
        return (
            
          <View style={{paddingTop:5, paddingBottom: 50, width: "100%", height: "100%"}}>
            <View style = { styles.scrollViewHolder }>
                <ScrollView horizontal = { true } showsHorizontalScrollIndicator = { false }>
                  <TouchableOpacity onPress={()=>this.setCategory("0")}>
                    <Text style = { [styles.item, this.bottomColorStyle(0)] }>전체</Text>
                  </TouchableOpacity>
                  <View style = { styles.separator }/>
                  <TouchableOpacity onPress={()=>this.setCategory("1")}>
                    <Text style = { [styles.item, this.bottomColorStyle(1)] }>디지털/가전</Text>
                  </TouchableOpacity>
                  <View style = { styles.separator }/>
                  <TouchableOpacity onPress={()=>this.setCategory("2")}>
                    <Text style = {  [styles.item, this.bottomColorStyle(2)]  }>유아용품</Text>
                  </TouchableOpacity>
                  <View style = { styles.separator }/>
                  <TouchableOpacity onPress={()=>this.setCategory("3")}>
                    <Text style = {  [styles.item, this.bottomColorStyle(3)]  }>운동기기</Text>
                  </TouchableOpacity>
                  <View style = { styles.separator }/>
                  <TouchableOpacity onPress={()=>this.setCategory("4")}>
                    <Text style = {  [styles.item, this.bottomColorStyle(4)]  }>뷰티/미용</Text>
                  </TouchableOpacity>
                  <View style = { styles.separator }/>
                  <TouchableOpacity onPress={()=>this.setCategory("5")}>
                    <Text style = {  [styles.item, this.bottomColorStyle(5)]  }>기타</Text>
                  </TouchableOpacity>
              </ScrollView>
            </View>
            <FlatList
                    data = {this.state.itemList}
                    renderItem={this.renderItemList.bind(this)}
                    ItemSeparatorComponent={item => {
                      return <View></View>
                    }}
                    keyExtractor={(item)=> item._id}
            ></FlatList>
        </View>
        )
    }
}

const styles = StyleSheet.create(
  {
     container:
     {
        paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
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
        paddingRight: 20,
        paddingLeft: 20,
        color: 'black',
        fontSize: 14
     },
     separator:
     {
        backgroundColor: 'rgba(0,0,0,0.5)'
     },
     selectTab: {
       borderBottomColor: '#4630eb',
       borderBottomWidth: 2,
     },
     
  });