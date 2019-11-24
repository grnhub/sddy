import React, { Component } from 'react';
import { View, StyleSheet, Text, StatusBar, TouchableOpacity, Image, TextInput, Linking } from 'react-native';
import { WebView } from 'react-native-webview';

export default class LoginWebView extends Component {
  constructor(props) {
    super(props);

    //this.getProductList();
  }
  
  componentDidMount() {
    StatusBar.setHidden(false);
  }


  async getProductList() {
    url = "http://ec2-52-79-239-153.ap-northeast-2.compute.amazonaws.com:3000/main";
    await fetch(url, {
      method: "POST"
    }).then(resp => {
      if (!(200 <= resp.status < 300)) {
        console.warn("Requests 에러");
      }
      return resp;
    }).then(data => {
      console.log(data);
      //this.setState({itemList: data, refreshing:false});
      return <WebView source={data}></WebView>;
    });
  }

  render() {
    const uri = 'http://ec2-52-79-239-153.ap-northeast-2.compute.amazonaws.com:3000/main';
    return (
      // <WebView 
      //   style={styles.container}
      //   source = {{uri}}
      //   onNavigationStateChange={(event) => {
      //     if (event.url !== uri) {
      //       this.webview.stopLoading();
      //       this.webview.method="POST";
      //       Linking.openURL(event.url);
      //     }
      //   }} 
      //   ref={(ref) => { this.webview = ref; }}
      //   javaScriptEnabled={true}
      //   startInLoadingState={true}
      // />
      <View style={styles.container}>
        <View style={styles.header} />
        <View style={styles.title}>
          <Text style={{fontSize:32,paddingBottom:8,marginLeft:16,color:'#4630eb'}}>써도대여 로그인</Text>
          <View style={{width:"100%",borderBottomWidth:0.5,borderColor:'#444'}} />
        </View>
        <View style={styles.content}>
          {/* <Image source={require('../images/logo.png')} style={{resizeMode: 'contain'}}/> */}
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingBottom:16}}>
            <Text style={{fontSize:16,marginLeft: 8,}}>아이디</Text>
            <TextInput style={{borderColor: '#aaa', width:'70%', height:35, borderWidth: 1, borderRadius: 5, padding:5}}/>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingBottom:10}}>
            <Text style={{fontSize:16,marginLeft: 8,}}>비밀번호</Text>
            <TextInput secureTextEntry={true} style={{borderColor: '#aaa', width:'70%', height:35, borderWidth: 1, borderRadius: 5, padding:5}}/>
          </View>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.login} onPress={() => this.props.navigation.replace("TabNavigator")}>
              <Text style={{color:'#ffffff',fontSize:20,textAlign:'center',margin:'auto'}}>확인</Text>
          </TouchableOpacity>
          <Text style={{textAlign:'center',fontSize:16,color:'#444'}}>비밀번호 찾기  |  회원가입</Text>
        </View>
      </View>
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
    height:'16%',
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
    height:'50%',
    //backgroundColor: '#1ad657',
  },
  login: {
    backgroundColor: '#4630eb',
    height: 48,
    color: '#4630eb',
    margin: 8,
    borderRadius: 5,
    padding: 10
  }
})
