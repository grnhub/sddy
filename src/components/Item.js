import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

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
                    <Text style={styles.area}>{this.props.item.area}·3초전</Text> 
                    <Text>{this.props.item.price}원/일</Text>
                    <Text style={styles.heart}>♡{this.props.item.likeCount}</Text>
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
      // borderWidth:1
      paddingTop: 10,
      paddingLeft: 10,
      marginTop: 10,

    },
    image: {
        width: "100%", 
        height: 110,
        paddingLeft: 10,
        paddingTop: 10,
        paddingRight: 10,
        borderRadius: 15,
        resizeMode: 'stretch'
    },
    product: {
        flex:7, 
        paddingTop: 10,
        paddingLeft: 30
    },
    productTitle: {
        fontSize: 18
    },
    heart: {
        textAlign: 'right',
        paddingRight: 15
    },
    area: {
        color : '#cbcbcb'
    }

});