import React, { Component } from 'react';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  View,
  Text,
  AntDesign,
  List,
  ListItem
} from 'native-base';
import {TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class MyScreen extends Component {
  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem noIndent style={{paddingLeft:0,borderBottomColor:'#EAEAEA',borderBottomWidth:1}} onPress={()=>this.props.navigation.push('ModifyingScreen')}>
              <Left>
                <View style={{marginLeft:10,flexDirection:'row',alignItems:'center'}}>
                <MaterialCommunityIcons size={100} name="account-circle" />
                  <List>
                    <ListItem>
                      <Text>앙마균태</Text>
                    </ListItem>
                    <ListItem>
                      <MaterialCommunityIcons name="star" size={20} />
                      <MaterialCommunityIcons name="star" size={20} />
                      <MaterialCommunityIcons name="star" size={20} />
                      <MaterialCommunityIcons name="star" size={20} />
                      <MaterialCommunityIcons name="star" size={20} />
                    </ListItem>
                  </List>
                </View>
              </Left>
              <Right style={{borderBottomWidth:0}}>
              <MaterialCommunityIcons name="chevron-right" size={30} />
              </Right>
            </ListItem>
          </List>

          <ListItem itemDivider style={{backgroundColor:'#EAEAEA'}} />

          <List>

            <ListItem noIndent style={{paddingLeft:0,borderBottomColor:'#EAEAEA',borderBottomWidth:1}} icon onPress={()=>this.props.navigation.push('RentListScreen')}>
              <Body style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-start',borderBottomWidth:0}}>
                <View style={{marginLeft:10,flexDirection:'row',alignItems:'center'}}>
                  <MaterialCommunityIcons name="playlist-check" size={30}/>
                  <Text style={{marginLeft:20}}>빌려준 내역</Text>
                </View>
              </Body>
              <Right style={{borderBottomWidth:0}}>
                <MaterialCommunityIcons name="chevron-right" size={30} />
              </Right>
            </ListItem>
            

            
            <ListItem noIndent style={{paddingLeft:0,borderBottomColor:'#EAEAEA',borderBottomWidth:1}} icon onPress={()=>this.props.navigation.push('BorrowingScreen')}>
              <Body style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-start',borderBottomWidth:0}}>
                <View style={{marginLeft:10,flexDirection:'row',alignItems:'center'}}>
                  <MaterialCommunityIcons name="playlist-check" size={30} />
                  <Text style={{marginLeft:20}}>빌린 내역</Text>
                </View>
              </Body>
              <Right style={{borderBottomWidth:0}}>
                <MaterialCommunityIcons name="chevron-right" size={30} />
              </Right>
            </ListItem>

            
            <ListItem noIndent style={{paddingLeft:0,borderBottomColor:'#EAEAEA',borderBottomWidth:1}} icon onPress={()=>this.props.navigation.push('InterestScreen')}>
              <Body style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-start',borderBottomWidth:0}}>
                <View style={{marginLeft:10,flexDirection:'row',alignItems:'center'}}>
                  <MaterialCommunityIcons name="heart-circle" size={30}/>
                  <Text style={{marginLeft:20}}>관심 목록</Text>
                </View>
              </Body>
              <Right style={{borderBottomWidth:0}}>
                <MaterialCommunityIcons name="chevron-right" size={30} />
              </Right>
            </ListItem>
            

            
            <ListItem noIndent style={{paddingLeft:0,borderBottomColor:'#EAEAEA',borderBottomWidth:1}} icon onPress={()=>this.props.navigation.push('PostProductScreen')}>
              <Body style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-start',borderBottomWidth:0}}>
                <View style={{marginLeft:10,flexDirection:'row',alignItems:'center'}}>
                  <MaterialCommunityIcons name="playlist-edit" size={30}/>
                  <Text style={{marginLeft:20}}>물품등록하기</Text>
                </View>
              </Body>
              <Right style={{borderBottomWidth:0}}>
                <MaterialCommunityIcons name="chevron-right" size={30} />
              </Right>
            </ListItem>
          
            <ListItem noIndent style={{paddingLeft:0,borderBottomColor:'#EAEAEA',borderBottomWidth:1}} icon onPress={()=>this.props.navigation.push('WalletScreen')}>
              <Body style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-start',borderBottomWidth:0}}>
                <View style={{marginLeft:10,flexDirection:'row',alignItems:'center'}}>
                  <MaterialCommunityIcons name="wallet" size={30}/>
                  <Text style={{marginLeft:20}}>나의 지갑</Text>
                </View>
              </Body>
              <Right style={{borderBottomWidth:0}}>
                <MaterialCommunityIcons name="chevron-right" size={30} />
              </Right>
            </ListItem>
          </List>
          
          <ListItem itemDivider style={{backgroundColor:'#EAEAEA'}} />

          <List>
            <ListItem noIndent style={{paddingLeft:0,borderBottomColor:'#EAEAEA',borderBottomWidth:1}} onPress={()=>alert('aa')}>
              <Left>
                <View style={{marginLeft:10,flexDirection:'row',alignItems:'center'}}>
                  <Text>고객 센터</Text>
                </View>
              </Left>
              <Right style={{borderBottomWidth:0}}>
                <MaterialCommunityIcons name="chevron-right" size={30} />
              </Right>
            </ListItem>  
          </List>
        </Content>
      </Container>
    );
  }
}
