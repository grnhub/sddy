import React, {Component} from 'react';
import {Text, View, Image, ScrollView,KeyboardAvoidingView} from 'react-native';
import { Container, Header, Content, DatePicker,Textarea, Form } from 'native-base';
import historyCss from '../css/HistoryStyle';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { CheckBox,Button } from 'react-native-elements';
import { updateHistory } from '../apis/HistoryAdd';

export default class HistoryAddScreen extends Component {

    constructor(props) {
        super(props);
        const historyData = this.props.navigation.getParam("history");

        this.state = {
            history: historyData,
            chosenDate: new Date(),
            checked: false,
            content: ''
        };
        this.setDate = this.setDate.bind(this);
    }


    setDate(newDate) {
        console.log(newDate);
        var d = newDate.toString();
        console.log(d);
        this.setState({ chosenDate: newDate });
      }

      setContent(txt) {
        this.setState({ content: txt});
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

    adding() {
        updateHistory(this.state.history.pid, this.state.chosenDate, this.state.content);
    }

    render() {
        return (
            <KeyboardAvoidingView style={{flex: 1}} behavior="padding" enabled>
            <ScrollView style={{flex: 1,
                width: "100%",
                padding: 10,
                backgroundColor: 'white'}}    
            >
                <View style={{flex:2, 
                    flexDirection:"row",
                    marginBottom: 5,
                    paddingBottom: 5,
                    borderBottomWidth: 1,
                    borderBottomColor: "#cbcbcb",
                    paddingRight: 10,
                    paddingLeft: 10,
                    fontSize: 20}}> 
                    <View style={{flex: 3}}>
                        <Image source={{uri: this.state.history.image}} style={historyCss.image}></Image>
                    </View>
                    <View style={historyCss.namebox}>
                        <Text style={historyCss.name}>홍길동</Text>
                        <Text style={historyCss.productName}>{this.state.history.pname}</Text>
                    </View>
                </View>
                {/* <View style={{flex: 1}}>
                    <View><Text>대여기간</Text></View>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <DatePicker
                            defaultDate={new Date(new Date().getFullYear(), (new Date().getMonth()), new Date().getDay())}
                            minimumDate={new Date((new Date().getFullYear()-1), 1, 1)}
                            maximumDate={new Date(2022, 12, 31)}
                            locale={"en"}
                            timeZoneOffsetInMinutes={undefined}
                            modalTransparent={false}
                            animationType={"fade"}
                            androidMode={"default"}
                            placeHolderText="Select date"
                            textStyle={{ color: "green" }}
                            placeHolderTextStyle={{ color: "#d3d3d3" }}
                            onDateChange={this.setDate}
                            disabled={false}
                        />
                        <Text>부터</Text>
                        <DatePicker
                            defaultDate={new Date(new Date().getFullYear(), (new Date().getMonth()), new Date().getDay())}
                            minimumDate={new Date((new Date().getFullYear()-1), 1, 1)}
                            maximumDate={new Date(2022, 12, 31)}
                            locale={"en"}
                            timeZoneOffsetInMinutes={undefined}
                            modalTransparent={false}
                            animationType={"fade"}
                            androidMode={"default"}
                            placeHolderText="Select date"
                            textStyle={{ color: "green" }}
                            placeHolderTextStyle={{ color: "#d3d3d3" }}
                            onDateChange={this.setDate}
                            disabled={false}
                        />
                        <Text>까지</Text>
                    </View>
                </View>
                <View style={{flex: 1}}>
                    <View><Text>수리여부</Text></View>
                    <View style={{flexDirection:'row'}}>
                    <CheckBox
                        checkedIcon={<MaterialCommunityIcons size={20} name="circle-slice-8" />}
                        uncheckedIcon={<MaterialCommunityIcons size={20} name="circle-outline" />}
                        checked={this.state.checked}
                        onPress={() => this.setState({checked: !this.state.checked})}
                        title='있음'
                    />
                    <CheckBox
                        checkedIcon={<MaterialCommunityIcons size={20} name="circle-slice-8" />}
                        uncheckedIcon={<MaterialCommunityIcons size={20} name="circle-outline" />}
                        checked={!this.state.checked}
                        onPress={() => this.setState({checked: !this.state.checked})}
                        title='없음'
                    />
                    </View>
                </View> */}
                <View style={{flex: 1}}>
                    <View><Text>수리날짜</Text></View>
                    <View>
                        <DatePicker
                            defaultDate={new Date()}
                            locale={"ko"}
                            timeZoneOffsetInMinutes={undefined}
                            modalTransparent={false}
                            animationType={"fade"}
                            androidMode={"default"}
                            placeHolderText="수리날짜 선택"
                            textStyle={{ color: "green" }}
                            placeHolderTextStyle={{ color: "#d3d3d3" }}
                            onDateChange={(d) => this.setDate(d)}
                            formatChosenDate={d => {return moment(d).format('YYYY-MM-DD');}}
                        />
                    </View>
                </View>
                <View style={{flex: 2}}>
                    <View><Text>수리내용</Text></View>
                    <Content>
                        <Form>
                            <Textarea rowSpan={3} bordered placeholder="수리내용을 입력해주세요." onChangeText={(txt) => this.setContent(txt)}/>
                        </Form>
                    </Content>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    padding: 10,
                    flex:1
                  }}>
                    <Button
                        buttonStyle={{alignContent: 'center',
                        justifyContent: 'center',
                        width: 130,
                        backgroundColor: '#4630EB'}}
                        onPress={() =>alert('취소')}
                        title='취소하기'
                    />  
                    <Button
                        buttonStyle={{alignContent: 'center',
                        justifyContent: 'center',
                        width: 130,
                        backgroundColor: '#4630EB'}}
                        onPress={() => this.adding()}
                        title='추가하기' 
                    />
                </View>
            </ScrollView>
            </KeyboardAvoidingView>
        )
    }
}