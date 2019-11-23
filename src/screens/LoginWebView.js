import React, { Component } from 'react';
import { View, StyleSheet, Text, Button, StatusBar, Image, TextInput } from 'react-native';
import { WebView } from 'react-native-webview';

export default class LoginWebView extends Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    StatusBar.setHidden(true);
  }
  render() {
    const uri = 'http://ec2-52-79-239-153.ap-northeast-2.compute.amazonaws.com:3000/main';
    return (
      <WebView 
        style={styles.container}
        source = {{uri}}
        onNavigationStateChange={(event) => {
          if (event.url !== uri) {
            this.webview.stopLoading();
            Linking.openURL(event.url);
          }
        }} 
        ref={(ref) => { this.webview = ref; }}
        javaScriptEnabled={true}
        startInLoadingState={true}
      />
      // <View style={styles.container}>
      //   <View style={styles.header} />
      //   <View style={styles.title}>
      //     <Text style={{fontSize:35,paddingBottom:20}}>ㅆㄷㄷㅇ 로그인</Text>
      //     <View style={{width:"100%",borderBottomWidth:0.5,borderColor:'#444'}} />
      //   </View>
      //   <View style={styles.content}>
      //     {/* <Image source={require('../images/logo.png')} style={{resizeMode: 'contain'}}/> */}
      //     <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingBottom:10}}>
      //       <Text style={{fontSize:15}}>아이디</Text>
      //       <TextInput style={{borderColor: '#aaa', width:'70%', height:35, borderWidth: 1, borderRadius: 5, padding:5}}/>
      //     </View>
      //     <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingBottom:10}}>
      //       <Text style={{fontSize:15}}>비밀번호</Text>
      //       <TextInput secureTextEntry={true} style={{borderColor: '#aaa', width:'70%', height:35, borderWidth: 1, borderRadius: 5, padding:5}}/>
      //     </View>
      //   </View>
      //   <View style={styles.footer}>
  
      //     <Button
      //       style={styles.login}
      //       title={'확인'}
      //       onPress={() => this.props.navigation.replace("TabNavigator")}/>
      //   </View>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  header: {
    width:'100%',
    height:'5%',
    //backgroundColor: '#ff9a9a',
  },
  title: {
    width:'100%',
    height:'18%',
    justifyContent: 'center',
    //backgroundColor: '#9aa9ff',
  },
  content: {
    flex: 1,
    paddingLeft:10,
    paddingRight:10,
    paddingBottom:30,
    //backgroundColor: '#d6ca1a',
  },
  footer: {
    width:'100%',
    height:'20%',
    //backgroundColor: '#1ad657',
  },
  login: {
    backgroundColor: '#4630eb',
    height: 120,
    color: '#4630eb'
  }
})
