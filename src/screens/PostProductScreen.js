import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, Alert, ScrollView, Picker} from 'react-native';

export default class PostProductScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
          category: ''
        };
    }

    render() {
        return(
            <View>
                <Picker
                    selectedValue={this.state.category}
                    style={{height: 50, width: 100}}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({category: itemValue})
                    }>
                    <Picker.Item label="디지털/가전" value="1" />
                    <Picker.Item label="유아용품" value="2" />
                    <Picker.Item label="운동기기" value="3" />
                    <Picker.Item label="뷰티/미용" value="4" />
                    <Picker.Item label="기타" value="5" />
                </Picker>
                <Text>상품이름 입력</Text>
                <Text>대여기간</Text>
                <Text>달력API 가져오기</Text>
                <Text>판매가격설정</Text>
                <Text>거래방법선택</Text>
                <Text>직접거래/택배거래</Text>
                <Text>상품내용입력</Text>
                <Text>사진첨부</Text>

            </View>
        )
    }
}