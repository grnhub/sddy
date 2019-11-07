import React, {Component} from 'react';
import {StyleSheet, Text, View, Platform, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import Item from '../components/Item';

const mockData = [
    {
      pno: '12345678',
      name: 'Samsung Galaxy',
      price: 5000,
      category: '1',
      area: '달서구 진천동',
      time: '2019-10-21 08:15',
      startDate: '2019-10-01',
      endDate: '2019-12-31',
      content: '3개월 썼어요, 작동잘됩니다, \n 쿨거래시 보조배터리도 빌려줍니다. \n 대화신청하세요 감사합니다 :)',
      like: 784,
      image:
        'http://img.hani.co.kr/imgdb/resize/2018/0209/00500596_20180209.JPG',
    },
    {
        pno: '12325678',
        name: '로봇청소기',
        price: 5000,
        category: '2',
        area: '수성구 범어2동',
        time: '2019-10-20 19:33',
        startDate: '2019-10-01',
        endDate: '2020-12-31',
        content: '청소를 잘안해서요 \n청소를 잘안해서요 \n청소를 잘안해서요 \n',
        like: 50,
        image:
            'https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/4utc/image/bHT-2YvclBUyuFa26Tr5l2oyjoI.jpg',
    },
    {
        pno: '15151515',
        name: 'Samsung Galaxy2',
        price: 1000,
        category: '1',
        area: '중구 도봉1동',
        time: '2019-09-01 13:45',
        startDate: '2019-05-01',
        endDate: '2020-01-31',
        content: '3년 썼어요 \n 그래서 싸게 올렸어요\n연락주세요\n3년 썼어요 \n 그래서 싸게 올렸어요\n연락주세요\n3년 썼어요 \n 그래서 싸게 올렸어요\n연락주세요\n3년 썼어요 \n 그래서 싸게 올렸어요\n연락주세요\n3년 썼어요 \n 그래서 싸게 올렸어요\n연락주세요\n3년 썼어요 \n 그래서 싸게 올렸어요\n연락주세요\n',
        like: 10,
        image:
            'http://img.hani.co.kr/imgdb/resize/2018/0209/00500596_20180209.JPG',
    },
    {
      pno: '22555333',
      name: '우드 블루투스 스피커',
      price: 3000,
      category: '3',
      area: '북구 산격동',
      time: '2019-09-25 20:11',
      startDate: '2019-10-01',
      endDate: '2019-12-31',
      content: '3개월 썼어요',
      like: 2,
      image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA8u5UYVaUUaNp_NP95m5omU94aYhogqdXW-B6ls820NcIj47l',
    },
    {
      pno: '28355333',
      name: '우드 블루투스 스피커2',
      price: 3000,
      category: '3',
      area: '북구 산격동',
      time: '2019-09-25 20:11',
      startDate: '2019-10-01',
      endDate: '2019-12-31',
      content: '좋아요',
      like: 2,
      image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA8u5UYVaUUaNp_NP95m5omU94aYhogqdXW-B6ls820NcIj47l',
    },
    {
      pno: '22555233',
      name: '우드 블루투스 스피커3',
      price: 3000,
      category: '3',
      area: '북구 산격동',
      time: '2019-09-25 20:11',
      startDate: '2019-10-01',
      endDate: '2019-12-31',
      content: '얼마안썼어요',
      like: 21,
      image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA8u5UYVaUUaNp_NP95m5omU94aYhogqdXW-B6ls820NcIj47l',
    },
  ];



export default class ListScreen extends Component {

    constructor(props){
        super(props);
        this.state = {
          itemList: mockData,
          category: "0"
        };
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
                    keyExtractor={(item)=> item.pno}
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