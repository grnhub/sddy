import React, { Component } from 'react';
import {
  Container,
  Content,
  Right,
  Body,
  View,
  Text,
  AntDesign,
  List,
  ListItem,
} from 'native-base';
import {TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements';

export default class ModifyingScreen extends Component {
  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem>
              <Body>
                <Text style={{ color: '#9B9B9B' }}>아이디 이메일</Text>
                <Text>asd@naver.com</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Body>
                <Text style={{ color: '#9B9B9B' }}>비밀번호</Text>
              </Body>
              <Right>
                <TouchableOpacity onPress={() => alert('비번수정')}>
                  <Text>변경</Text>
                </TouchableOpacity>
              </Right>
            </ListItem>
            <ListItem>
              <Body>
                <Text style={{ color: '#9B9B9B' }}>휴대전화</Text>
                <Text>010-1234-5678</Text>
              </Body>
              <Right>
              <TouchableOpacity onPress={() => alert('전화번호수정')}>
              <Text>변경</Text>
            </TouchableOpacity>
              </Right>
            </ListItem>
            <ListItem>
              <Body>
                <Text style={{ color: '#9B9B9B' }}>닉네임</Text>
                <Text>앙마균태</Text>
              </Body>
              <Right>
              <TouchableOpacity onPress={() => alert('닉네임수정')}>
              <Text>변경</Text>
            </TouchableOpacity>
              </Right>
            </ListItem>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'flex-end',
                alignContent: 'center',
              }}>
              <Text
                style={{ color: '#9B9B9B', fontSize: 10, marginTop: 5 }}
                onPress={() => alert('로그아웃')}>
                로그아웃
              </Text>
              <Text
                style={{ marginLeft: 10, marginRight: 10, color: '#9B9B9B' }}>
                |
              </Text>
              <Text
                style={{
                  marginRight: 10,
                  color: '#9B9B9B',
                  fontSize: 10,
                  marginTop: 5,
                }}
                onPress={() => alert('회원탈퇴')}>
                회원탈퇴
              </Text>
            </View>
          </List>
        </Content>
      </Container>
    );
  }
}
