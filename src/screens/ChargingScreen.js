import React, { Component } from 'react';
import {
  Container,
  Content,
  Left,
  Right,
  View,
  Text,
  List,
  Radio,
} from 'native-base';
import { Button,CheckBox,ListItem } from 'react-native-elements';


export default class ChargingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color1:"white",
      color2:"white",
      color3:"white",
      color4:"white",
      color5:"white",
      color6:"white",
      color7:"white",
      state1: false,
      state2: false,
      state3: false,
      state4: false,
      state5: false,
      state6: false,
      state7: false,
      money: 0,
    };
    console.log(this.props.navigation.getParam("mockData2").money)
  }
////////////////////////////////////////////////////////////////////////////////
  testr(index, price) {

    var backColor = '#E6E6E6';

    this.stateInit();

    if(index == 1) {
      this.setState({
        money: price,
        state1: true,
        color1: backColor
      })
    } else if(index == 2) {
      this.setState({
        money: price,
        state2: true,
        color2: backColor
      })
    } else if(index == 3) {
      this.setState({
        money: price,
        state3: true,
        color3: backColor
      })
    } else if(index == 4) {
      this.setState({
        money: price,
        state4: true,
        color4: backColor
      })
    } else if(index == 5) {
      this.setState({
        money: price,
        state5: true,
        color5: backColor
      })
    } else if(index == 6) {
      this.setState({
        money: price,
        state6: true,
        color6: backColor
      })
    } else if(index == 7) {
      this.setState({
        money: price,
        state7: true,
        color7: backColor
      })
    }
      
      
    
  }

  stateInit() {
    this.setState({
      state1: false,
      state2: false,
      state3: false,
      state4: false,
      state5: false,
      state6: false,
      state7: false,
      color1:"white",
      color2:"white",
      color3:"white",
      color4:"white",
      color5:"white",
      color6:"white",
      color7:"white",
    });
  }
  
  // charging() {
  //   const chargingFunc = this.props.navigation.getParam('chargingFunc')
  //   chargingFunc({
  //     })
  // }

  listup(){
    const listUpFunc = this.props.navigation.getParam('listUpFunc')
    if (this.state.money != 0){
    listUpFunc({
                  name: "충전",
                  state: "1",
                  date: (new Date().getFullYear()+'.'+(new Date().getMonth()+1)+'.'+new Date().getDay()+' '+new Date().getHours()+':'+new Date().getMinutes()),
                  money: (this.state.money),
                  profile: ""
                })
              }
  }

  
///////////////////////////////////////////////////////////////////////////////////////////


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
                  {this.props.navigation.getParam("mockData2").money} SNAC
                </Text>
              </Right>
            </View>
          </List>
          <List>
            <ListItem
              containerStyle={{
                marginTop:10,
                marginLeft:10,
                marginRight:10,
                height: 20,
                borderTopWidth: 1,
                borderTopColor: 'black',
                backgroundColor: '#CEE3F6',
              }}
              contentContainerStyle={{justifyContent:'center',alignContent: 'center'}}
              title={'충전 금액 선택'}
              titleStyle={{ fontSize: 16 }}/>
            
            
            <ListItem selected={this.state.state1}
              onPress={()=>this.testr(1, 1000)}
              containerStyle={{ 
                backgroundColor: this.state.color1,
                borderTopWidth: 1,
                borderTopColor: 'black',
                borderBottomWidth:1,
                borderBottomColor: 'black',
                marginLeft:10,
                marginRight:10}}
              title={'1000 SNAC'}
              titleStyle={{ marginLeft: 10 }}
              rightTitle={'1000 원'}
              rightTitleStyle={{color: 'red', fontSize: 14}}
              />
            

            <ListItem selected={this.state.state2}
              onPress={()=>this.testr(2, 3000)}
              containerStyle={{
                backgroundColor: this.state.color2,
                borderBottomWidth:1,
                borderBottomColor: 'black',
                marginLeft:10,
                marginRight:10}}
              title={'3000 SNAC'}
              titleStyle={{ marginLeft: 10 }}
              rightTitle={'3000 원'}
              rightTitleStyle={{color: 'red', fontSize: 14}}
              />
            <ListItem selected={this.state.state3}
              onPress={()=>this.testr(3, 5000)}
              containerStyle={{
                backgroundColor: this.state.color3,
                borderBottomWidth:1,
                borderBottomColor: 'black',
                marginLeft:10,
                marginRight:10}}
              title={'5000 SNAC'}
              titleStyle={{ marginLeft: 10 }}
              rightTitle={'5000 원'}
              rightTitleStyle={{color: 'red', fontSize: 14}}
            />

            <ListItem selected={this.state.state4}
              onPress={()=>this.testr(4, 10000)}
              containerStyle={{
                backgroundColor: this.state.color4,
                borderBottomWidth:1,
                borderBottomColor: 'black',
                marginLeft:10,
                marginRight:10}}
              title={'10000 SNAC'}
              titleStyle={{ marginLeft: 10 }}
              rightTitle={'10000 원'}
              rightTitleStyle={{color: 'red', fontSize: 14}}
            />

            <ListItem  selected={this.state.state5}
              onPress={()=>this.testr(5, 30000)}
              containerStyle={{
                backgroundColor: this.state.color5,
                borderBottomWidth:1,
                borderBottomColor: 'black',
                marginLeft:10,
                marginRight:10}}
              title={'30000 SNAC'}
              titleStyle={{ marginLeft: 10 }}
              rightTitle={'30000 원'}
              rightTitleStyle={{color: 'red', fontSize: 14}}
            />

            <ListItem  selected={this.state.state6}
              onPress={()=>this.testr(6, 50000)}
              containerStyle={{
                backgroundColor: this.state.color6,
                borderBottomWidth:1,
                borderBottomColor: 'black',
                marginLeft:10,
                marginRight:10}}
              title={'50000 SNAC'}
              titleStyle={{ marginLeft: 10 }}
              rightTitle={'50000 원'}
              rightTitleStyle={{color: 'red', fontSize: 14}}
            />

            <ListItem  selected={this.state.state7}
              onPress={()=>this.testr(7, 100000)}
              containerStyle={{
                backgroundColor: this.state.color7,
                borderBottomWidth:1,
                borderBottomColor: 'black',
                marginLeft:10,
                marginRight:10}}
              title={'100000 SNAC'}
              titleStyle={{ marginLeft: 10 }}
              rightTitle={'100000 원'}
              rightTitleStyle={{color: 'red', fontSize: 14}}
              />
          </List>
        </Content>

        <View
          style={{
            alignContent: 'center',
            justifyContent: 'center',
            padding: 16,
          }}>
          <Button
            buttonStyle={{alignContent: 'center',
                justifyContent: 'center',
                backgroundColor: '#4630EB'}}
            style={{
              alignContent: 'center',
              justifyContent: 'center',
              color: 'white',
            }}
            buttonColor={'#4630EB'}
            onPress={()=>{{
                      console.log("충전금액 : " + this.state.money);
                      this.listup();
                      this.props.navigation.navigate({
                      state1: this.state.state1,
                      state2: this.state.state2,
                      state3: this.state.state3,
                      state4: this.state.state4,
                      state5: this.state.state5,
                      state6: this.state.state6,
                      state7: this.state.state7,
                  })
                
              }}
            }
            title='충전하기'
            />
        </View>
      </Container>
    );
  }
}
