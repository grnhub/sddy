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
            <ListItem onPress={()=>this.props.navigation.push('ModifyingScreen')}>
              <Left>
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
              </Left>
              <Right>
              <MaterialCommunityIcons name="chevron-right" size={30} />
              </Right>
            </ListItem>
          </List>

          <ListItem itemDivider />

          <List>

            <ListItem icon onPress={()=>alert('aa')}>
              <Body style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-start'}}>
                <MaterialCommunityIcons name="playlist-check" size={30}/>
                <Text style={{marginLeft:20}}>빌려준 내역</Text>
              </Body>
              <Right>
                <MaterialCommunityIcons name="chevron-right" size={30} />
              </Right>
            </ListItem>
            

            
            <ListItem icon onPress={()=>this.props.navigation.push('BorrowingScreen')}>
              <Body style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-start'}}>
                <MaterialCommunityIcons name="playlist-check" size={30}/>
                <Text style={{marginLeft:20}}>빌린 내역</Text>
              </Body>
              <Right>
                <MaterialCommunityIcons name="chevron-right" size={30} />
              </Right>
            </ListItem>

            
            <ListItem icon onPress={()=>alert('aa')}>
              <Body style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-start'}}>
                <MaterialCommunityIcons name="heart-circle" size={30}/>
                <Text style={{marginLeft:20}}>관심 목록</Text>
              </Body>
              <Right>
                <MaterialCommunityIcons name="chevron-right" size={30} />
              </Right>
            </ListItem>
            

            
            <ListItem icon onPress={()=>this.props.navigation.push('PostProductScreen')}>
              <Body style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-start'}}>
                <MaterialCommunityIcons name="playlist-edit" size={30}/>
                <Text style={{marginLeft:20}}>물품등록하기</Text>
              </Body>
              <Right>
                <MaterialCommunityIcons name="chevron-right" size={30} />
              </Right>
            </ListItem>
          
            <ListItem icon onPress={()=>this.props.navigation.push('WalletScreen')}>
              <Body style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-start'}}>
                <MaterialCommunityIcons name="wallet" size={30}/>
                <Text style={{marginLeft:20}}>나의 지갑</Text>
              </Body>
              <Right>
                <MaterialCommunityIcons name="chevron-right" size={30} />
              </Right>
            </ListItem>
          </List>
          
          <ListItem itemDivider />

          <List>
            <ListItem onPress={()=>alert('aa')}>
              <Left>
                <Text>고객 센터</Text>
              </Left>
              <Right>
                <MaterialCommunityIcons name="chevron-right" size={30} />
              </Right>
            </ListItem>  
          </List>
        </Content>
      </Container>
    );
  }
}
