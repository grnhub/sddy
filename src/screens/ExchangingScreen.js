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

let mockData2 = 
  {
    money: 50000,
  }

export default class ExchangingScreen extends Component {
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
      updateHeader1(text) {
        if (this.state.state1) {
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
        } else {
          this.setState({
            state1: true,
            state2: false,
            state3: false,
            state4: false,
            state5: false,
            state6: false,
            state7: false,
            money: 1000,
            color1:"#EAEAEA",
            color2:"white",
            color3:"white",
            color4:"white",
            color5:"white",
            color6:"white",
            color7:"white",
          });
        }
      }
      updateHeader2(text) {
        if (this.state.state2) {
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
        } else {
          this.setState({
            state1: false,
            state2: true,
            state3: false,
            state4: false,
            state5: false,
            state6: false,
            state7: false,
            money: 3000,
            color1:"white",
            color2:"#EAEAEA",
            color3:"white",
            color4:"white",
            color5:"white",
            color6:"white",
            color7:"white",
          });
        }
      }
      updateHeader3(text) {
        if (this.state.state3) {
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
        } else {
          this.setState({
            state1: false,
            state2: false,
            state3: true,
            state4: false,
            state5: false,
            state6: false,
            state7: false,
            money: 5000,
            color1:"white",
            color2:"white",
            color3:"#EAEAEA",
            color4:"white",
            color5:"white",
            color6:"white",
            color7:"white",
          });
        }
      }
      updateHeader4(text) {
        if (this.state.state4) {
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
        } else {
          this.setState({
            state1: false,
            state2: false,
            state3: false,
            state4: true,
            state5: false,
            state6: false,
            state7: false,
            money: 10000,
            color1:"white",
            color2:"white",
            color3:"white",
            color4:"#EAEAEA",
            color5:"white",
            color6:"white",
            color7:"white",
          });
        }
      }
      updateHeader5(text) {
        if (this.state.state5) {
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
        } else {
          this.setState({
            state1: false,
            state2: false,
            state3: false,
            state4: false,
            state5: true,
            state6: false,
            state7: false,
            money: 30000,
            color1:"white",
            color2:"white",
            color3:"white",
            color4:"white",
            color5:"#EAEAEA",
            color6:"white",
            color7:"white",
          });
        }
      }
      updateHeader6(text) {
        if (this.state.state6) {
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
        } else {
          this.setState({
            state1: false,
            state2: false,
            state3: false,
            state4: false,
            state5: false,
            state6: true,
            state7: false,
            money: 50000,
            color1:"white",
            color2:"white",
            color3:"white",
            color4:"white",
            color5:"white",
            color6:"#EAEAEA",
            color7:"white",
          });
        }
      }
    
      updateHeader7(text) {
        if (this.state.state7) {
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
        } else {
          this.setState({
            state1: false,
            state2: false,
            state3: false,
            state4: false,
            state5: false,
            state6: false,
            state7: true,
            money: 100000,
            color1:"white",
            color2:"white",
            color3:"white",
            color4:"white",
            color5:"white",
            color6:"white",
            color7:"#EAEAEA",
          });
        }
      }

//   exchanging() {
//   if (mockData2.money>0){
//     if (this.state.state1) {
//       mockData2.money-=1000
//       this.setState({
//         person: mockData2,
//       });
//     } else if (this.state.state2) {
//       mockData2.money-=3000
//       this.setState({
//         person: mockData2,
//       });
//     } else if (this.state.state3) {
//       mockData2.money-=5000
//       this.setState({
//         person: mockData2,
//       });
//     } else if (this.state.state4) {
//       mockData2.money-=10000
//       this.setState({
//         person: mockData2,
//       });
//     }  else if (this.state.state5) {
//       mockData2.money-=30000
//       this.setState({
//         person: mockData2,
//       });
//     } else if (this.state.state6) {
//       mockData2.money-=50000
//       this.setState({
//         person: mockData2,
//       });
//     } else if (this.state.state7) {
//       mockData2.money-=100000
//       this.setState({
//         person: mockData2,
//       });
//     }
//   } else {
//     alert('환전 불가')
//   }
    
//   }

  listup(){
    const listUpFunc = this.props.navigation.getParam('listUpFunc')
    listUpFunc({
                  name: "환전",
                  state: "0",
                  date: "2019.12.24 16:30",
                  money: (this.state.money),
                  profile: ""
                });
  }
///////////////////////////////////////////////////////////////////////////////////////////
  render() {
    return (
      <Container>
        <Content>
          <List>
            <View
              style={{
                backgroundColor: '#E2DEFC',
                flexDirection: 'row',
                marginTop: 10,
                height: 40,
                marginBottom: 10,
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
                marginLeft:10,
                marginRight:10,
                height: 20,
                borderTopWidth: 1,
                borderTopColor: 'black',
                backgroundColor: '#E2DEFC',
              }}
              title={'환전 금액 선택'}
              titleStyle={{ fontSize: 16 ,marginTop: 16}}/>
            
            <ListItem selected={this.state.state1}
              onPress={this.updateHeader1.bind(this)}
              containerStyle={{ 
                backgroundColor: this.state.color1,
                borderTopWidth: 1,
                borderTopColor: 'black',
                borderBottomWidth:1,
                borderBottomColor: 'black',
                marginLeft:10,
                marginRight:10}}
              title={'1000 원'}
              titleStyle={{ marginLeft: 10 }}
              rightTitle={'1000 SNAC'}
              rightTitleStyle={{color: 'red', fontSize: 14}}
              />

              <ListItem selected={this.state.state2}
              onPress={this.updateHeader2.bind(this)}
              containerStyle={{
                backgroundColor: this.state.color2,
                borderBottomWidth:1,
                borderBottomColor: 'black',
                marginLeft:10,
                marginRight:10}}
              title={'3000 원'}
              titleStyle={{ marginLeft: 10 }}
              rightTitle={'3000 SNAC'}
              rightTitleStyle={{color: 'red', fontSize: 14}}
              />

              <ListItem selected={this.state.state3}
              onPress={this.updateHeader3.bind(this)}
              containerStyle={{
                backgroundColor: this.state.color3,
                borderBottomWidth:1,
                borderBottomColor: 'black',
                marginLeft:10,
                marginRight:10}}
              title={'5000 원'}
              titleStyle={{ marginLeft: 10 }}
              rightTitle={'5000 SNAC'}
              rightTitleStyle={{color: 'red', fontSize: 14}}
              />

              <ListItem selected={this.state.state4}
              onPress={this.updateHeader4.bind(this)}
              containerStyle={{
                backgroundColor: this.state.color4,
                borderBottomWidth:1,
                borderBottomColor: 'black',
                marginLeft:10,
                marginRight:10}}
              title={'10000 원'}
              titleStyle={{ marginLeft: 10 }}
              rightTitle={'10000 SNAC'}
              rightTitleStyle={{color: 'red', fontSize: 14}}
              />

              <ListItem selected={this.state.state5}
              onPress={this.updateHeader5.bind(this)}
              containerStyle={{
                backgroundColor: this.state.color5,
                borderBottomWidth:1,
                borderBottomColor: 'black',
                marginLeft:10,
                marginRight:10}}
              title={'30000 원'}
              titleStyle={{ marginLeft: 10 }}
              rightTitle={'30000 SNAC'}
              rightTitleStyle={{color: 'red', fontSize: 14}}
              />

              <ListItem selected={this.state.state6}
              onPress={this.updateHeader6.bind(this)}
              containerStyle={{
                backgroundColor: this.state.color6,
                borderBottomWidth:1,
                borderBottomColor: 'black',
                marginLeft:10,
                marginRight:10}}
              title={'50000 원'}
              titleStyle={{ marginLeft: 10 }}
              rightTitle={'50000 SNAC'}
              rightTitleStyle={{color: 'red', fontSize: 14}}
              />

              <ListItem selected={this.state.state7}
              onPress={this.updateHeader7.bind(this)}
              containerStyle={{
                backgroundColor: this.state.color7,
                borderBottomWidth:1,
                borderBottomColor: 'black',
                marginLeft:10,
                marginRight:10}}
              title={'100000 원'}
              titleStyle={{ marginLeft: 10 }}
              rightTitle={'100000 SNAC'}
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
            title='환전하기'
            />
        </View>
      </Container>
    );
  }
}
