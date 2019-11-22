import React, { Component } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import WebView from 'react-native-webview';

export default class LoginWebView extends Component {

  render() {
    return (
      <WebView 
      style={styles.container}
      source = {{uri:'http://dev.futurepia.co.kr/user/login'}}
    />
    )
  }
}

const styles = StyleSheet.create({
  container: {
     width: '100%',
     height: '100%'
  }
})
