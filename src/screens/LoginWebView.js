import React, { Component } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import WebView from 'react-native-webview';

export default class LoginWebView extends Component {

  test () {
    return this.props.navigation.replace("TabNavigator");
  }

  render() {
    return (
      <View>
          <WebView 
            style={styles.container}
            source = {{uri:'http://dev.futurepia.co.kr/user/login'}}
          />
          <Button onPress={this.test.bind(this)} title={'버튼테스트테스트'}></Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
     width: '100%',
     height: '100%'
  }
})
