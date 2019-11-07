import React, {Component} from 'react';
import {StyleSheet, Text, View, Platform, TouchableOpacity } from 'react-native';
import List from '../components/List';

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
      content: '3개월 썼어요. 작동잘됩니다.\n쿨거래시 보조배터리도 빌려줍니다.\n대화신청하세요 감사합니다 :)',
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
          itemList: mockData
        };
      }

    render() {
        return (
            
            <View style={{width: "100%", height: "100%"}}>
                <List itemList={this.state.itemList} toNavigate="DetailScreen" {...this.props}></List>
            </View>
        )
    }
}
