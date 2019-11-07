import React, { Component } from 'react';
import {
  Container,
  Content,
  Left,
  Right,
  Body,
  Text,
  List, View
} from 'native-base';
import { Button } from 'react-native-elements';
import BreakdownList from '../components/BreakdownList';


let mockData = [
  {
    name: '충전',
    state: '1',
    date: '2019.10.23 10:30',
    money: 5000,
    profile: '',
  },
  {
    name: '사용',
    state: '0',
    date: '2019.10.23 11:30',
    money: 5000,
    profile: '',
  },
  {
    name: '사용',
    state: '0',
    date: '2019.10.24 11:30',
    money: 5000,
    profile: '',
  },
  {
    name: '보상',
    state: '1',
    date: '2019.10.24 16:30',
    money: 5000,
    profile: '',
  },
];

let mockData2 = 
  {
    money: 50000,
  };

export default class WalletScreen extends Component {
  constructor(props) {
    super(props);
    console.log("AA")
    this.state = {
      chat: mockData,
      person: mockData2,
      isReRender: 0,
    };
  }

  listup(obj){
    const newChat = this.state.chat.concat(obj)
    mockData = newChat
    this.setState({chat: newChat})  
  }

//   charging(obj) {
//     console.log('11')
//   }

 render() {
     return (
        <Container>
        <Content>
          <List>
          <View
            style={{
              backgroundColor: 'skyblue',
              flexDirection: 'row',
              marginTop: 10,
              height: 40,
            }}>
            <Left>
              <Text style={{ marginLeft: 16 }}>보유스낵:</Text>
            </Left>
            <Right>
              <Text style={{ marginRight: 16 }}>
                {this.state.person.money} SNAC
              </Text>
            </Right>
          </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                padding: 10,
              }}>
              <Button
              buttonStyle={{alignContent: 'center',
              justifyContent: 'center',
              width: 130,
              backgroundColor: '#4630EB'}}
                onPress={() =>
                  this.props.navigation.push('Charging', {
                    mockData: mockData,mockData2 : mockData2,
                    listUpFunc: this.listup.bind(this),
                    //chargingFunc: this.charging.bind(this)

                  })
                }
                title='충전하기'
                />

              <Button
                buttonStyle={{alignContent: 'center',
                justifyContent: 'center',
                width: 130,
                backgroundColor: '#4630EB'}}
                onPress={() =>
                  this.props.navigation.push('Exchanging', {
                    mockData: mockData,mockData2: mockData2,
                    listUpFunc: this.listup.bind(this),
                    // chargingFunc: this.charging.bind(this)
                  })
                }
                title='환전하기' 
                />
                
            </View>
          </List>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: 'skyblue',
              height: 30,
              justifyContent: 'space-between',
            }}>
            <Left>
              <Text style={{ marginLeft: 16 }}> 내역 </Text>
            </Left>
            <Right>
              <Text style={{ marginRight: 16 }}> 전체 </Text>
            </Right>
          </View>
          <List>
            <BreakdownList chatList={this.state.chat} {...this.props} />
          </List>
        </Content>
       </Container>
     );
   }
}
