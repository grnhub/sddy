import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, Alert, ScrollView, PickerIOSComponent} from 'react-native';

export default class PostProductScreen extends Component {
    render() {
        return(
            <View>
                <Text>카테고리 셀렉트리스트 </Text>
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