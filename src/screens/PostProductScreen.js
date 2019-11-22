import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, Alert, Dimensions, Platform, TouchableOpacity } from 'react-native';
import { DatePicker } from 'native-base';
import RNPickerSelect from 'react-native-picker-select';
import { SelectMultipleButton } from 'react-native-selectmultiple-button';
import _ from 'lodash';
import CNRichTextEditor, { CNToolbar, getInitialObject, getDefaultStyles } from 'react-native-cn-richtext-editor';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Menu, MenuOption, MenuOptions, MenuTrigger, MenuProvider, renderers } from 'react-native-popup-menu';

//상품 카테고리 선택 category
const category = [
    { label: '디지털/가전', value: 1 },
    { label: '유아용품', value: 2 },
    { label: '운동기기', value: 3 },
    { label: '뷰티/미용', value: 4 },
    { label: '기타', value: 5 }
];

//거래방식 선택
const multipleData = ["직접거래", "택배거래"];

//상품 설명 및 이미지 입력 posting product contents and images
const { SlideInMenu } = renderers;
const IS_IOS = Platform.OS === 'ios';
const { width, height } = Dimensions.get('window');
const defaultStyles = getDefaultStyles();

export default class PostProductScreen extends Component {
    constructor(props) {
        super(props);
        this.customStyles = {
            ...defaultStyles, body: { fontSize: 12 }, heading: { fontSize: 16 }
            , bold: { fontSize: 12, fontWeight: 'bold', color: 'black' }
        };
        this.state = {
            category: '',                //상품 카테고리
            pname: '',                   //상품명
            price: '',                   //가격
            uploadDate: '',             //히스토리에 자동으로 등록되는 시간
            allowDateStart: null,
            allowDateEnd: null,
            multipleSelectedData: [],   //거래방식 선택
            content: '',
            selectedTag: 'body',         //상품설명 입력
            selectedStyles: [],
            value: [getInitialObject()],
            image: '',
            deal: [],
        };
        //상품설명 편집기
        this.editor = null;

    }

    //거래방식 선택 버튼
    singleTapMultipleSelectedButtons(deal) {
        if (this.state.multipleSelectedData.includes(deal)) {
            _.remove(this.state.multipleSelectedData, ele => {
                return ele === deal;
            });
        } else {
            this.state.multipleSelectedData.push(deal);
        }

        this.setState({
            multipleSelectedData: this.state.multipleSelectedData
        });
    }

    //상품설명 입력 툴
    onStyleKeyPress = (toolType) => {
        if (toolType == 'image') {
            return;
        }
        else {
            this.editor.applyToolbar(toolType);
        }
    }
    onSelectedTagChanged = (tag) => {
        this.setState({
            selectedTag: tag
        })
    }
    onSelectedStyleChanged = (styles) => {
        this.setState({
            selectedStyles: styles,
        })
    }
    onValueChanged = (value) => {
        this.setState({
            value: value,
            content: value
        });
    }
    insertImage(url) {
        this.editor.insertImage(url);
    }

    askPermissionsAsync = async () => {
        const camera = await Permissions.askAsync(Permissions.CAMERA);
        const cameraRoll = await Permissions.askAsync(Permissions.CAMERA_ROLL);

        this.setState({
            hasCameraPermission: camera.status === 'granted',
            hasCameraRollPermission: cameraRoll.status === 'granted'
        });
    };
    useLibraryHandler = async () => {
        await this.askPermissionsAsync();
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 4],
            base64: false,
        });

        this.insertImage(result.uri);
    };
    useCameraHandler = async () => {
        await this.askPermissionsAsync();
        let result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [4, 4],
            base64: false,
        });

        this.insertImage(result.uri);
    };
    onImageSelectorClicked = (value) => {
        if (value == 1) {
            this.useCameraHandler();
        }
        else if (value == 2) {
            this.useLibraryHandler();
        }
    }

    renderImageSelector() {
        return (
            <Menu renderer={SlideInMenu} onSelect={this.onImageSelectorClicked}>
                <MenuTrigger>
                    <MaterialCommunityIcons name="image" size={28} color="#737373" />
                </MenuTrigger>
                <MenuOptions>
                    <MenuOption value={1}>
                        <Text style={styles.menuOptionText}>
                            사진 찍기
                    </Text>
                    </MenuOption>
                    <View style={styles.divider} />
                    <MenuOption value={2} >
                        <Text style={styles.menuOptionText}>
                            앨범에서 선택
                    </Text>
                    </MenuOption>
                    <View style={styles.divider} />
                    <MenuOption value={3}>
                        <Text style={styles.menuOptionText}>
                            취소
                    </Text>
                    </MenuOption>
                </MenuOptions>
            </Menu>
        );

    }
    onRemoveImage = ({ url, id }) => {
        // do what you have to do after removing an image
        console.log(`image removed (url : ${url})`);
    }

    getDateNow() {
        let date = new Date();
        let mm = date.getMonth() + 1;
        let dd = date.getDate();

        return [date.getFullYear(),
                (mm>9 ? '': '0') + mm,
                (dd>9 ? '': '0') + dd
                ].join('-');
    };
    handleSubmit = async () => {

        const {userid, category, pname, price, count,  uploadDate, allowDateStart, allowDateEnd, image, content, likeCount } = this.state
        // let data = {
        //     pname: pname,
        //     category: category,
        //     count: 0,
        //     price: price,
        //     content: content[0].content[0].text,
        //     image: content[0].content[1].url,
        //     uploadDate: this.getDateNow() ,
        //     allowDateStart: allowDateStart,
        //     allowDateEnd: allowDateEnd,
        //     userid: 'beoqhde',
        //     area: '북구 산격동',
        //     nickname: '홍태균태세균태',
        // }
        let data = {
            pname: 'temp',
            category: '1',
            count: 0,
            price: 1000,
            content: 'testsett',
            image: '',
            userid: 'beoqhde',
            area: '북구 산격동',
            nickname: '홍태균태세균태',
        }

        console.log("=============================a");
        let prodObj = JSON.stringify(data);

        const formData = new FormData();
        const filePathList = content[1].url.split('/');
        const _filename = filePathList[filePathList.length-1];
        const [filename, ext] = _filename.split('.')

        formData.append("file", {
            name: filename,
            type: ext,
            uri: Platform.OS === "android" ? content[1].url.replace("file://", "") : content[1].url.replace("file://", "")
        })
        
        Object.keys(data).forEach(key => {
            // 파일과 함께 보내기 위함.
            formData.append(key, data[key]);
          });
        url = 'http://ec2-52-79-239-153.ap-northeast-2.compute.amazonaws.com:3000/product/';
        // url = 'http://localhost:3000/product/'
        console.log(formData)
        await fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "multipart/form-data"
              },
              body : formData
        }).then(function(response) {
            console.log('--------------------------response success')
            return response.json();
        }).then(function(data) {
            console.log(data);
            console.log("post product success!");
        }).catch(e=>console.error(e));
        //const responseData = await response.json()
        this.props.navigation.popToTop();
    }

    render() {
        const categoryPlaceholder = {
            label: '카테고리 선택',
            value: null,
            color: '#353535',
        };
        //set calender, 달력, 날짜 설정
        // const { allowDateStart, allowDateEnd } = this.state;
        // const startDate = allowDateStart ? allowDateStart.toString() : '';
        // const endDate = allowDateEnd ? allowDateEnd.toString() : '';

        return (
            <KeyboardAvoidingView
                behavior="padding"
                enabled
                keyboardVerticalOffset={IS_IOS ? 0 : 0}
                style={styles.root}
            >
                <ScrollView>
                    <View style={styles.box}>
                        <RNPickerSelect
                            placeholder={categoryPlaceholder}
                            items={category}
                            onValueChange={(value) => this.setState({ category: value })}
                            style={pickerSelectStyles}
                        />
                        <View style={styles.line} />
                        <TextInput style={styles.inputTitle}
                            placeholder="상품명(제목)"
                            placeholderTextColor="#d5d5d5"
                            onChangeText={(txt)=>this.setState({ pname: txt })}
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
                                onDateChange={(value) => this.setState({allowDateStart: value})}
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
                                animationType={"slide"}
                                androidMode={"default"}
                                placeHolderText="마지막날짜 선택"
                                textStyle={{ color: "#4630eb" }}
                                placeHolderTextStyle={{ color: "#d3d3d3" }}
                                onDateChange={(value) => this.setState({ allowDateEnd: value })}
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
                                keyboardType='numeric'
                                maxLength={20}
                                placeholder="판매가격 입력"
                                placeholderTextColor="#d5d5d5"
                                onChangeText={(txt) => this.setState({ price: txt })}
                            />
                            <Text style={styles.won}>원/일</Text>
                        </View>
                        <View style={styles.line} />
                    </View>
                    <View style={styles.line2} />
                    <View style={styles.box}>
                        <Text>거래방법선택</Text>
                        <View style={styles.selectBtn}>
                            {multipleData.map(deal => (
                                <SelectMultipleButton
                                    key={deal}
                                    buttonViewStyle={{ height: 40, width: '46%' }}
                                    textStyle={{ fontSize: 16 }}
                                    highLightStyle={{
                                        borderColor: "gray",
                                        textColor: "gray",
                                        textTintColor: "#4630eb",
                                        borderTintColor: "#4630eb",
                                        backgroundColor: "transparent",
                                        backgroundTintColor: "#ffffff"
                                    }}
                                    value={deal}
                                    selected={this.state.multipleSelectedData.includes(deal)}
                                    singleTap={valueTap => this.singleTapMultipleSelectedButtons(deal)}
                                />
                            ))}
                        </View>
                    </View>
                    <View style={styles.line2} />
                    <View style={styles.box}>
                        <ScrollView style={{
                            flex: 1,
                            width: "100%",
                            padding: 1,
                        }}
                        >
                            <MenuProvider style={{ flex: 1 }}>
                                <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
                                    <View style={styles.main}>
                                        <CNRichTextEditor
                                            ref={input => this.editor = input}
                                            onSelectedTagChanged={this.onSelectedTagChanged}
                                            onSelectedStyleChanged={this.onSelectedStyleChanged}
                                            value={this.state.value}
                                            style={[styles.editor, styles.textArea]}
                                            styleList={this.customStyles}
                                            foreColor='dimgray' // optional (will override default fore-color)
                                            textInputStyle={fontSize = 12}
                                            onValueChanged={this.onValueChanged}
                                            onRemoveImage={this.onRemoveImage}
                                        />
                                    </View>
                                </TouchableWithoutFeedback>
                                <View style={styles.toolbarContainer}>
                                    <CNToolbar
                                        style={{
                                            height: 35,
                                        }}
                                        iconSetContainerStyle={{
                                            flexGrow: 1,
                                            justifyContent: 'space-evenly',
                                            alignItems: 'center',
                                        }}
                                        size={28}
                                        iconSet={[
                                            {
                                                type: 'tool',
                                                iconArray: [
                                                    {
                                                        toolTypeText: 'ul',
                                                        buttonTypes: 'tag',
                                                        iconComponent:
                                                            <MaterialCommunityIcons name="format-list-bulleted" />
                                                    },
                                                    {
                                                        toolTypeText: 'ol',
                                                        buttonTypes: 'tag',
                                                        iconComponent:
                                                            <MaterialCommunityIcons name="format-list-numbered" />
                                                    }
                                                ]
                                            },
                                            {
                                                type: 'seperator'
                                            },
                                            {
                                                type: 'tool',
                                                iconArray: [
                                                    {
                                                        toolTypeText: 'image',
                                                        iconComponent: this.renderImageSelector()
                                                    }]
                                            },

                                        ]}
                                        selectedTag={this.state.selectedTag}
                                        selectedStyles={this.state.selectedStyles}
                                        onStyleKeyPress={this.onStyleKeyPress}
                                        backgroundColor="aliceblue" // optional (will override default backgroundColor)
                                        color="gray" // optional (will override default color)
                                        selectedColor='white' // optional (will override default selectedColor)
                                        selectedBackgroundColor='deepskyblue' // optional (will override default selectedBackgroundColor)
                                    />
                                </View>
                            </MenuProvider>
                        </ScrollView>
                    </View>
                    <View style={styles.btnBox}>
                        <TouchableOpacity style={styles.cancelBtn}
                                          onPress={() => Alert.alert('안내', '작성을 취소하시겠습니까?', 
                                          [
                                              {
                                                  text: '취소',
                                                  onPress: () => console.log('cancel')
                                              },
                                              {
                                                  text: '확인',
                                                  onPress: () => this.props.navigation.popToTop()
                                              }
                                          ])
                                }
                        >
                            <Text style={styles.cancelBtnText}>취소</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.submitBtn} 
                                          onPress={() => Alert.alert('안내', '글을 등록하시겠습니까?', 
                                                    [
                                                        {
                                                            text: '취소',
                                                            onPress: () => console.log('cancel')
                                                        },
                                                        {
                                                            text: '확인',
                                                            onPress: () => this.handleSubmit()
                                                        }
                                                    ])
                                          }
                        >
                            <Text style={styles.submitBtnText}>등록</Text>   
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
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
        backgroundColor: '#f6f6f6'
    },
    inputTitle: {
        padding: 8,
        height: 48,
        fontSize: 16,
        borderBottomWidth: 1,
        borderColor: '#d5d5d5'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputPrice: {
        flex: 8.5,
        fontSize: 24,
        paddingLeft: 16,
        paddingTop: 16,
        marginLeft: 'auto'
    },
    won: {
        flex: 1.5,
        fontSize: 18,
        paddingTop: 16,
        paddingLeft: 4,
        color: 'gray'
    }
    ,
    selectBtn: {
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "center"
    },
    //posting contexts(text, image) tool
    root: {
        flex: 1,
        paddingTop: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    main: {
        flex: 1,
        paddingTop: 1,
        paddingLeft: 1,
        paddingRight: 1,
        paddingBottom: 1,
        height: 384,
        alignItems: 'stretch',
    },
    editor: {
        backgroundColor: '#fff',
        fontSize: 12
    },
    textArea:{
        borderColor:'#eee',
        borderWidth: 1,
        borderRadius: 5,
    },
    toolbarContainer: {
        minHeight: 35
    },
    menuOptionText: {
        textAlign: 'center',
        paddingTop: 5,
        paddingBottom: 5,
        fontSize: 20
    },
    divider: {
        marginVertical: 0,
        marginHorizontal: 0,
        borderBottomWidth: 1,
        borderColor: '#eee'
    },
    //submit Button
    btnBox: {
        margin: 16,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    cancelBtn: {
        width: "48%",
        height: 40,
        borderWidth: 1,
        borderColor: "#A6A6A6",
        borderRadius: 5,
        padding: 12
    },
    submitBtn: {
        width: "48%",
        height: 40,
        borderWidth: 1,
        borderColor: "#A6A6A6",
        backgroundColor: "#A6A6A6",
        borderRadius: 5,
        padding: 12
    },
    cancelBtnText: {
        color: '#a6a6a6',
        fontSize: 16,
        textAlign: "center"
    },
    submitBtnText: {
        color: '#ffffff',
        fontSize: 16,
        textAlign: "center"
    },
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