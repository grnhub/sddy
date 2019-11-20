import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class Borrowing extends Component {

    static defaultProps = {
        item: {
            pno: "",
            name: "",
            price: 0,
            category: "",
            image: ""
        },
        onPress: () => console.log("push")
    }

    render() {
        return (
            <TouchableOpacity
                style={[styles.container]}
                onPress={this.props.onPress}
                >
                
                <View style={{flex:3}}>
                    <Image source={{uri: this.props.item.image}}
                        style={styles.image} />
                </View>

                <View style={styles.product}>
                    <Text style={styles.productTitle}>{this.props.item.pname}</Text>
                    <Text style={styles.nickname}>{this.props.item.nickname}</Text>   
                   
                    <Text style={this.props.item.mystate == "대여중" ? styles.mystate1 : styles.mystate2}>{this.props.item.mystate}</Text>
                </View>    
                <View style={styles.chat}> 
                    <MaterialCommunityIcons
                        name={"comment-processing"}
                        size={45}
                        color={"#999999"}
                        />
                </View> 
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
      width: "100%",
      paddingTop: 16,
      paddingLeft: 16,
      paddingRight: 16,
      paddingBottom: 16,
      borderBottomColor: '#ebebeb',
      borderBottomWidth: 1
    },
    image: {
        width: 120, 
        height: 104,
        marginRight: 8,
        borderRadius: 10,
        resizeMode: 'stretch'
    },
    product: {
        flex:4, 
        paddingTop: 10,
        paddingLeft: 24
    },
    productTitle: {
        fontSize: 18
    },
    heart: {
        width: "100%",
        fontSize: 20,
        color: '#7a7a7a',
        textAlign: 'right',
        textAlignVertical: 'bottom'
    },
    nickname: {
        color : '#666666'
    },
    mystate1: {
        color: '#e91e63',
        marginTop: 5,
        marginBottom: 5
    },
    mystate2: {
        color: '#B2CCFF',
        marginTop: 5,
        marginBottom: 5
    },
    chat: {
        flex:2,
        paddingTop: 30,
        alignItems: 'center'
    }

});