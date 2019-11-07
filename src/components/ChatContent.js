import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

export default class ChatContent extends Component {

    static defaultProps = {
        chat: {
            name: "",
            state: "",
            date: "",
            lastChat: "",
            profile: "",

        },
        onPress: () => console.log("chat content")
    }

    render() {
        return (
            <TouchableOpacity
                style={[styles.container]}
                onPress={this.props.onPress}
                >
                
                <View style={{flex:2}}>
                    <Image source={require('../images/user0.png')}//{{ uri: this.props.chat.profile }}        //source={require('./myimage.png')} />
                        style={styles.image} />
                </View>

                <View style={styles.product}>
                    <Text style={styles.productTitle}>{this.props.chat.name}</Text>
                    <Text style={styles.area}>{this.props.chat.lastChat}</Text> 
                    <Text style={styles.date}>{this.props.chat.date}</Text>
                    <Text style={styles.heart}>{this.props.chat.state}</Text>
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
        height: 80,
        paddingLeft: 10,
        paddingTop: 10,
        paddingRight: 10,
        borderRadius: 15,
        resizeMode: 'contain'
    },
    product: {
        flex:8, 
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

    },
    date : {
        color: '#cbcbcb'
    }

});