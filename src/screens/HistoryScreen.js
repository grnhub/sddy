import React, {Component} from 'react';
import {Text, View, Image, ScrollView, FlatList} from 'react-native';
import historyCss from '../css/HistoryStyle';
import HistoryComp from '../components/HistoryComp';

export default class HistoryScreen extends Component {

    constructor(props) {
        // 수정해야됨
        super(props);
        const historyData = this.props.navigation.getParam("history");
        

        // history.pid
        this.state = {
            history: historyData,
            data: []
        }

        this.getHistoryFromFuturpia();
    }

    async getHistoryFromFuturpia() {
        var d = [];
        url = "http://developer.futurepia.io:3032/api/getDappContent";
        await fetch(url, {
          method: "POST",
          headers: {
            Accept: "application/json", 
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            "dapp_name":"blockit",
            "author":"blockit",
            "permlink": this.state.history.pid
        })
        }).then(function(response) {
            return response.json();
          }).then(function(data) {
            d = data;
        });

        var j = JSON.parse(d.result.body);

        this.setState({
            data: j
        })
    }

    renderReturnMemo() {
        var memo = '평가가 없습니다';
        if(this.state.data.returnMemo != '') {
            memo = this.state.data.returnMemo ;
            
        } 
        return memo;
     }


    renderHistory({item, index, separators}) {
        return (
            <HistoryComp
                history={item}
            />
          )
    }
    getDateNow() {
        var date = new Date();
        var mm = date.getMonth() + 1; // getMonth() is zero-based
        var dd = date.getDate();
      
        return [date.getFullYear(),
                (mm>9 ? '' : '0') + mm,
                (dd>9 ? '' : '0') + dd
               ].join('-');
    };
    render() {
        return (
            <View style={historyCss.container}>
                <ScrollView>
                <View style={historyCss.row}> 
                    <View style={{flex: 3}}>
                        <Image source={{uri: this.state.history.image}} style={historyCss.image}></Image>
                    </View>
                    <View style={historyCss.namebox}>
                        <Text style={historyCss.name}>{this.state.history.nickname}</Text>
                        <Text style={historyCss.productName}>{this.state.history.pname}</Text>
                    </View>
                </View>
                <View style={historyCss.row}>
                    <View style={historyCss.s1}><Image source={require('../images/location2.png')} style={historyCss.location}></Image></View>
                    <View style={historyCss.s2}><Text>제품 등록</Text></View>
                    <View style={historyCss.s2}><Text>{this.state.history.uploadDate ? this.state.history.uploadDate.substring(0, 10) : this.getDateNow()}</Text></View>
                      
                </View>
                <FlatList data={this.state.data}
                          renderItem={this.renderHistory.bind(this)}
                          ItemSeparatorComponent={item => {
                              return <View></View>
                          }} 
                          keyExtractor={(item, index)=>index.toString()}/>
                <View style={historyCss.row}>
                    <View style={historyCss.s1}><Image source={require('../images/location2.png')} style={historyCss.location}></Image></View>
                    <View style={historyCss.s2}><Text>현재</Text></View>
                    <View style={historyCss.s2}><Text>-</Text></View>
                </View>
                </ScrollView>
            </View> 
        )
    }
}