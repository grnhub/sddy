import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, Dimensions, Platform } from 'react-native';
import { DatePicker} from 'native-base';
import RNPickerSelect from 'react-native-picker-select';
import { SelectMultipleButton } from 'react-native-selectmultiple-button';
import _ from 'lodash';
import CNRichTextEditor, { CNToolbar, getInitialObject, getDefaultStyles } from 'react-native-cn-richtext-editor';
// import { Permissions, ImagePicker } from 'expo';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Menu, MenuOption, MenuOptions, MenuTrigger, MenuProvider, renderers } from 'react-native-popup-menu';

//상품 카테고리 선택 category
const category = [
    {label: '디지털/가전', value: 1},
    {label: '유아용품', value: 2},
    {label: '운동기기', value: 3},
    {label: '뷰티/미용', value: 4},
    {label: '기타', value: 5}
];

//거래방식 선택
const multipleData = ["직접거래", "택배거래"];

//상품 설명 및 이미지 입력 posting product contents and images
const { SlideInMenu } = renderers;
const IS_IOS = Platform.OS === 'ios';
const { width, height } = Dimensions.get('window');
const defaultStyles = getDefaultStyles();

export default class PostProductScreen extends Component {
    constructor(props){
        super(props);
        this.customStyles = {...defaultStyles, body: {fontSize: 12}, heading : {fontSize: 16}
        , bold: {fontSize: 12, fontWeight: 'bold', color: 'black'}
        };
        this.state = {
            category: '',                //상품 카테고리
            pname: '',                   //상품명
            price: '',                   //가격
            uploadDate : '',             //히스토리에 자동으로 등록되는 시간
            allowDateStart : null,
            allowDateEnd : null,
            multipleSelectedData : [],   //거래방식 선택
            selectedTag: 'body',         //상품설명 입력
            // selectedColor: 'default',
            // selectedHighlight: 'default',
            // colors: ['red','green', 'blue'],
            // highlights: ['yellow_hl', 'pink_hl', 'orange_hl', 'green_hl', 'puple_hl', 'blue_hl'],
            selectedStyles: [],          
            value: [getInitialObject()],
            image: '', 
        };
        //상품이름 입력, 제목
        inputPname = (text) => {
            this.setState({pname: text})
        };
        //가격 입력, 금액
        inputPrice = (text) => {
            this.setState({price: text})
        };

        this.onStartDateChange = this.onStartDateChange.bind(this);
        this.onEndDateChange = this.onEndDateChange.bind(this);
        //상품설명 편집기
        this.editor = null;

    }
    //대여 시작 날짜 선택
    onStartDateChange(date, type) {
        this.setState({
            allowDateStart: date,
        });
    }
    //대여 마지막 날짜 선택
    onEndDateChange(date, type) {
        this.setState({
            allowDateEnd: date,
        });
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
        // const colors = this.state.colors;  
        // const highlights = this.state.highlights;  
        // let sel = styles.filter(x=> colors.indexOf(x) >= 0);

        // let hl = styles.filter(x=> highlights.indexOf(x) >= 0);
        this.setState({
            selectedStyles: styles,
            // selectedColor : (sel.length > 0) ? sel[sel.length - 1] : 'default',
            // selectedHighlight : (hl.length > 0) ? hl[hl.length - 1] : 'default',
        })
    }
    onValueChanged = (value) => {
        this.setState({
            value: value
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
        console.log("카메라 핸들러"+result);
        
        this.insertImage(result.uri);
    };
    onImageSelectorClicked = (value) => {
        if(value == 1) {
            this.useCameraHandler();    
        }
        else if(value == 2) {
            this.useLibraryHandler();         
        }
    }
    // onColorSelectorClicked = (value) => {
        
    //     if(value === 'default') {
    //         this.editor.applyToolbar(this.state.selectedColor);
    //     }
    //     else {
    //         this.editor.applyToolbar(value);
           
    //     }

    //     this.setState({
    //         selectedColor: value
    //     });
    // }

    // onHighlightSelectorClicked = (value) => {
    //     if(value === 'default') {
    //         this.editor.applyToolbar(this.state.selectedHighlight);
    //     }
    //     else {
    //         this.editor.applyToolbar(value);
           
    //     }

    //     this.setState({
    //         selectedHighlight: value
    //     });
    // }
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
                <View style={styles.divider}/>
                <MenuOption value={2} >
                    <Text style={styles.menuOptionText}>
                        앨범에서 선택
                    </Text>
                </MenuOption> 
                <View style={styles.divider}/>
                <MenuOption value={3}>
                    <Text style={styles.menuOptionText}>
                        취소
                    </Text>
                </MenuOption>
            </MenuOptions>
            </Menu>
        );
    
    }
    onRemoveImage = ({url, id}) => {        
        // do what you have to do after removing an image
        console.log(`image removed (url : ${url})`);
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
                <View style={styles.box}>
                    <Text>거래방법선택</Text>
                    <View style={styles.selectBtn}>
                        {multipleData.map(deal => (
                            <SelectMultipleButton
                                key={deal}
                                buttonViewStyle={{height: 40, width: '46%'}}
                                textStyle={{fontSize: 16}}
                                highLightStyle={{
                                    borderColor: "gray",
                                    backgroundColor: "transparent",
                                    textColor: "gray",
                                    textTintColor: "#4630eb",
                                    borderTintColor: "#4630eb"
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
                    <KeyboardAvoidingView 
                        behavior="padding" 
                        enabled
                        keyboardVerticalOffset={IS_IOS ? 0 : 0}
                        style={styles.root}
                    >
                        <MenuProvider style={{flex: 1}}>
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
                                            iconArray: [{
                                                toolTypeText: 'bold',
                                                buttonTypes: 'style',
                                                iconComponent: <MaterialCommunityIcons name="format-bold" />
                                            }, 
                                            {
                                                toolTypeText: 'italic',
                                                buttonTypes: 'style',
                                                iconComponent: <MaterialCommunityIcons name="format-italic" />
                                            },
                                            {
                                                toolTypeText: 'underline',
                                                buttonTypes: 'style',
                                                iconComponent: <MaterialCommunityIcons name="format-underline" />
                                            },
                                            {
                                                toolTypeText: 'lineThrough',
                                                buttonTypes: 'style',
                                                iconComponent: <MaterialCommunityIcons name="format-strikethrough-variant" />
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
                                                }
                                            ]
                                        },
                                        
                                    ]}
                                    selectedTag={this.state.selectedTag}
                                    selectedStyles={this.state.selectedStyles}
                                    onStyleKeyPress={this.onStyleKeyPress} 
                                    backgroundColor="aliceblue" // optional (will override default backgroundColor)
                                    color="gray" // optional (will override default color)
                                    selectedColor='white' // optional (will override default selectedColor)
                                    selectedBackgroundColor='gray' // optional (will override default selectedBackgroundColor)
                                /> 
                            </View>
                            <TouchableWithoutFeedback onPress={Keyboard.dismiss} >             
                                <View style={styles.main}>
                                    <CNRichTextEditor                   
                                        ref={input => this.editor = input}
                                        onSelectedTagChanged={this.onSelectedTagChanged}
                                        onSelectedStyleChanged={this.onSelectedStyleChanged}
                                        value={this.state.value}
                                        style={styles.editor}
                                        styleList={this.customStyles}
                                        foreColor='dimgray' // optional (will override default fore-color)
                                        textInputStyle={fontSize=12}
                                        onValueChanged={this.onValueChanged}
                                        onRemoveImage={this.onRemoveImage}
                                    />                        
                                </View>
                            </TouchableWithoutFeedback>
                        </MenuProvider>
                    </KeyboardAvoidingView>
                </View>
                <View style={styles.box}>
                    <Text>등록하기 | 취소하기</Text>
                </View>
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
        backgroundColor: '#f6f6f6'
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
        backgroundColor:'#eee',
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
        backgroundColor : '#fff'
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