import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class BreakdownContent extends Component {

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
    if (this.props.chat.state=='1') {
        return (
            <View style={styles.container}>
                <View>
                  <View style={styles.one}>
                    <Text style={styles.two2}>입금</Text>
                    <Text style={styles.three}>{this.props.chat.name}</Text>
                  </View>
                  <View>
                    <Text style={styles.four}>{this.props.chat.date}</Text>
                  </View>
                </View>
                <View style={styles.five}>
                  <Text style={styles.two2}>+{this.props.chat.money} </Text>
                  <Text style={styles.three}>SNAC</Text>
                </View>
            </View>
        )
    } else {
        return (
            <View style={styles.container}>
                <View>
                  <View style={styles.one}>
                    <Text style={styles.two}>출금</Text>
                    <Text style={styles.three}>{this.props.chat.name}</Text>
                  </View>
                  <View>
                    <Text style={styles.four}>{this.props.chat.date}</Text>
                  </View>
                </View>
                <View style={styles.five}>
                  <Text style={styles.two}>-{this.props.chat.money} </Text>
                  <Text style={styles.three}>SNAC</Text>
                </View>
            </View>
        )
    }
    
    }
}

const styles = StyleSheet.create({
    one:{flexDirection:'row',justifyContent:'space-between',width:80},
    two:{color:'red',fontSize:14},
    two2:{color:'blue',fontSize:14},
    three:{fontSize:14},
    four:{fontSize:10},
    five:{flexDirection:'row'},
    container: {
      flex: 1,
      flexDirection: "row",
      justifyContent:'space-between',
      width: "100%",
      // borderWidth:1
      paddingTop: 10,
      paddingLeft: 10,
      marginTop: 10,

    },
});