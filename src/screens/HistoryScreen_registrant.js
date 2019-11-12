import React, {Component} from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import historyCss from '../css/HistoryStyle';
import getHistory from '../components/History';
import { Button } from 'react-native-elements';

export default class HistoryScreen_registrant extends Component {

    constructor(props) {
        // 수정해야됨
        super(props);
        const historyData = this.props.navigation.getParam("history");
        var d  = getHistory(historyData.pno);

        this.state = {
            history: historyData,
            data: d
        }
    }

    renderReturnMemo() {
        var memo = '평가가 없습니다';
        if(this.state.data.returnMemo != '') {
            memo = this.state.data.returnMemo ;
            
        } 
        return memo;
        
     }

    renderRepairMemo() {
        return({

        })
    }

    render() {
        return (
            <View style={historyCss.container}>
                <ScrollView>
                <View style={historyCss.row}> 
                    <View style={{flex: 3}}>
                        <Image source={{uri: this.state.history.image}} style={historyCss.image}></Image>
                    </View>
                    <View style={historyCss.namebox}>
                        <Text style={historyCss.name}>홍길동</Text>
                        <Text style={historyCss.productName}>{this.state.history.name}</Text>
                    </View>
                </View>
                <View style={historyCss.row}>
                    <View style={historyCss.s1}><Image source={require('../images/location2.png')} style={historyCss.location}></Image></View>
                    <View style={historyCss.s2}><Text>제품 등록</Text></View>
                    <View style={historyCss.s2}><Text>{this.state.data.updateDate}</Text></View>
                    
                </View>
                <View style={historyCss.row}>
                    <View style={historyCss.s1}><Image source={require('../images/location1.png')} style={historyCss.location}></Image></View>
                    <View style={historyCss.s2}><Text>대여</Text></View>
                    <View style={historyCss.s2}><Text>{this.state.data.rentDate}</Text></View>
                </View>
                <View style={historyCss.row2}>
                    <View style={historyCss.s1}><Image source={require('../images/location1.png')} style={historyCss.location}></Image></View>
                    <View style={historyCss.s2}><Text>반납</Text></View>
                    <View style={historyCss.s2}><Text>{this.state.data.returnDate}</Text></View>
                </View>
                <View style={historyCss.row}>
                    <View style={historyCss.s1}></View>
                    <Text style={[historyCss.s3, historyCss.memo]}>{this.renderReturnMemo()}</Text>
                </View>
                <View style={historyCss.row2}>
                    <View style={historyCss.s1}><Image source={require('../images/location1.png')} style={historyCss.location}></Image></View>
                    <View style={historyCss.s2}><Text>수리</Text></View>
                    <View style={historyCss.s2}><Text>{this.state.data.repairDate}</Text></View>
                </View>
                <View style={historyCss.row}>
                    <View style={historyCss.s1}></View>
                    <View style={[historyCss.s3, historyCss.memo]}><Text>{this.state.data.repairMemo}</Text></View>
                </View>
                <View style={historyCss.row}>
                    <View style={historyCss.s1}><Image source={require('../images/location2.png')} style={historyCss.location}></Image></View>
                    <View style={historyCss.s2}><Text>현재</Text></View>
                    <View style={historyCss.s2}><Text>{this.state.data.now}</Text></View>
                </View>
                <Button
                buttonStyle={{alignContent: 'center',
                justifyContent: 'center',
                backgroundColor: '#4630EB'}}
                onPress={()=>this.props.navigation.navigate("HistoryAddScreen", {history: this.state.history})
                }
                title='추가하기' 
                />
                </ScrollView>
            </View>
        )
    }
}