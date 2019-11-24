import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class Item extends Component {

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

    getTime() {

        var date = new Date();
        var yy = date.getFullYear();
        var mm = date.getMonth() + 1; // getMonth() is zero-based
        var dd = date.getDate();
        var d = [yy,(mm>9 ? '' : '0') + mm,(dd>9 ? '' : '0') + dd].join('-');

        var ud = this.props.item.uploadDate;
        var newud = ud.substring(0,10);

        if(d == newud) 
            return "오늘";
        else {

            if(ud.substring(0,4) != yy) {
                return yy - ud.substring(0,4)*1 + "년전";
            } else if(ud.substring(5,7) != mm) {
                
                return mm - ud.substring(5,7)*1 + "달전";
            } else {
                
                return dd - ud.substring(8,10)*1 + "일전";
            }
        }

    }

    numberWithCommas() {
        var m = this.props.item.price;
        return m.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    


    render() {
        return (
            <TouchableOpacity
                style={[styles.container]}
                onPress={this.props.onPress}
                >
                
                <View style={{flex:3}}>
                    <Image source={this.props.item.image ? {uri: this.props.item.image } : require('../images/teed.png')}
                        style={styles.image} />
                </View>

                <View style={styles.product}>
                    <Text style={styles.productTitle}>{this.props.item.pname}</Text>
                    <Text style={styles.area}>{this.props.item.area}·{this.getTime()}</Text> 
                    <Text style={styles.price}>{this.numberWithCommas()}원/일</Text>
                    <Text style={styles.heart}>{this.props.item.interest == 1 ? <MaterialCommunityIcons name="heart" size={20} /> : <MaterialCommunityIcons name="heart-outline" size={20} />}{this.props.item.likeCount}</Text>
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
        flex:6, 
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
    area: {
        color : '#cbcbcb'
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5,
        marginBottom: 5
    }

});