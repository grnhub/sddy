import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, ScrollView} from 'react-native';
import { DatePicker} from 'native-base';
import RNPickerSelect from 'react-native-picker-select';
import CalendarPicker from 'react-native-calendar-picker';
import { Button } from 'react-native-elements';

const category = [
    {label: '디지털/가전', value: 1},
    {label: '유아용품', value: 2},
    {label: '운동기기', value: 3},
    {label: '뷰티/미용', value: 4},
    {label: '기타', value: 5}
];


export default class PostProductScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            category: '',
            pname: '',
            price: '',
            uploadDate : '',       //히스토리에 자동으로 등록되는 시간
            allowDateStart : null,
            allowDateEnd : null,
            checked1 : false,
            checked2 : false,
            color1 : 'white',
            color2 : 'white'
        };
        inputPname = (text) => {
            this.setState({pname: text})
        };
        inputPrice = (text) => {
            this.setState({price: text})
        };
        this.onStartDateChange = this.onStartDateChange.bind(this);
        this.onEndDateChange = this.onEndDateChange.bind(this);
    }
    onStartDateChange(date, type) {
        this.setState({
            allowDateStart: date,
        });
    }
    onEndDateChange(date, type) {
        this.setState({
            allowDateEnd: date,
        });
    }

    render() {
        const categoryPlaceholder = {
            label: '카테고리 선택',
            value: null,
            color: '#353535',
        };
        //set calender, 달력, 날짜 설정
        const { allowDateStart, allowDateEnd } = this.state;
        const uploadDate = new Date();     //today 오늘
        const startDate = allowDateStart ? allowDateStart.toString() : '';
        const endDate = allowDateEnd ?  allowDateEnd.toString() : '';
        console.log("A0")

        return(
            <ScrollView>
                <View style={styles.box}>
                    <RNPickerSelect 
                        placeholder={categoryPlaceholder}
                        items={category}
                        onValueChange={(value) => this.setState({category: value})}
                        style={pickerSelectStyles}
                    />
                    <View style={styles.line} />
                    <TextInput style={styles.inputTitle}
                                placeholder = "상품명(제목)"
                                placeholderTextColor = "#d5d5d5"
                                onChangeText = {this.inputPname}
                    />
                </View>
                <View style={styles.line2} />
                <View style={styles.box}>
                    <Text>대여기간</Text>
                    <View style={styles.row}>
                        <DatePicker
                            defaultDate={new Date()}
                            minimumDate={new Date(new Date().getFullYear(), (new Date().getMonth()), new Date().getDay())}
                            maximumDate={new Date(2022, 12, 31)}
                            locale={"ko"}
                            timeZoneOffsetInMinutes={undefined}
                            modalTransparent={false}
                            animationType={"slide"}
                            androidMode={"default"}
                            placeHolderText="시작날짜 선택"
                            textStyle={{ color: "#4630eb" }}
                            placeHolderTextStyle={{ color: "#d3d3d3" }}
                            onDateChange={this.setDate}
                            disabled={false}
                        />
                        <Text>부터</Text>
                        <DatePicker
                            defaultDate={new Date(new Date().getFullYear(), (new Date().getMonth()), new Date().getDay())}
                            minimumDate={new Date()}
                            maximumDate={new Date(2022, 12, 31)}
                            locale={"ko"}
                            timeZoneOffsetInMinutes={undefined}
                            modalTransparent={false}
                            animationType={"fade"}
                            androidMode={"default"}
                            placeHolderText="마지막날짜 선택"
                            textStyle={{ color: "#4630eb" }}
                            placeHolderTextStyle={{ color: "#d3d3d3" }}
                            onDateChange={this.setDate}
                            disabled={false}
                        />
                        <Text>까지</Text>
                    </View>
                </View>
                <View style={styles.line2} />
                <View style={styles.box}>
                    <Text>판매가격</Text>
                    <View style={styles.row}>
                        <TextInput style={styles.inputPrice}
                                    placeholder = "판매가격 입력"
                                    placeholderTextColor = "#d5d5d5"
                                    onChangeText = {this.inputPrice}
                        />
                        <Text style={styles.won}>원</Text>
                    </View>
                    <View style={styles.line} />
                </View>
                <View style={styles.line2} />
                <Text>거래방법선택</Text>
                <Button
                    title="직접거래"
                    type="outline"
                    style={{backgroundColor:'black'}}
                />
                <Button
                    title="택배거래"
                    type="outline"
                    style={{backgroundColor:'black'}}
                />
                <View style={styles.line2} />
                <Text>상품내용입력</Text>
                <Text>사진첨부</Text>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    box: {
        margin: 16
    },
    line: {
        height: 1,
        backgroundColor: '#d5d5d5'
    },
    line2: {
        height: 6,
        backgroundColor: '#ebebeb'
    },
    inputTitle: {
        padding: 8,
        height: 48,
        fontSize: 16,
        borderBottomWidth:1,
        borderColor: '#d5d5d5'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputPrice: {
        flex: 9,
        padding: 8,
        height: 52,
        fontSize: 18,
    },
    won: {
        flex: 1,
        fontSize: 18,
        paddingTop: 16,
        paddingLeft: 4,
    }
})

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        padding: 8,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
        fontSize: 16,
        padding: 8,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
})