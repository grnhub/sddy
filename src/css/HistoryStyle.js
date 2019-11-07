import {StyleSheet} from 'react-native';

const historyStyles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
      width: "100%",
      padding: 10,
      backgroundColor: 'white'

    },
    image: {
        width: "100%", 
        height: 120,
        margin: 5,
        padding: 5,
        resizeMode: 'cover',
        borderRadius: 15
    },
    namebox: {
        flex: 7,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    name: {
        fontSize: 18
    },
    productName: {
        fontSize: 22
    },
    row: {
        flex:1, 
        flexDirection:"row",
        marginBottom: 5,
        paddingBottom: 5,
        borderBottomWidth: 1,
        borderBottomColor: "#cbcbcb",
        paddingRight: 10,
        paddingLeft: 10,
        fontSize: 20
    
    },
    row2: {
        flex:1, 
        flexDirection:"row",
        marginBottom: 5,
        paddingBottom: 5,
        paddingRight: 10,
        paddingLeft: 10,
        fontSize: 20
    },
    s1: {
        flex: 1,
        padding: 10

    },
    s2: {
        flex: 4,
        padding: 10
    },
    s3: {
        flex: 8,
        padding: 10
    },
    memo: {
        fontSize: 16
    },
    location: {
        width: "100%",
        height: "100%",
        resizeMode: 'contain'
    },


    // tradeApplyScreen
    namebox2: {
        flex: 7,
        justifyContent: 'center',
        alignItems: 'flex-end',
        textAlign: 'right'
    },
    priceDetail: {
        fontSize: 22,
        color: 'red'
    },
    price: {
        flex:1, 
        fontSize: 18,
        alignItems: 'flex-end',
        textAlign: 'right'
    },
    topPadding: {
        paddingTop: 15,
        paddingLeft: 15,
    },
    bottomPadding: {
        paddingBottom: 15,
        paddingLeft: 15,
    },
    intervalDate: {
        fontSize: 16,
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center'
    },
    payButton: {
        flex:1, 
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        width: "97%",
        height: 46,
        backgroundColor: '#4630eb',
        borderRadius: 8,
        padding:5,
        margin: 5
    },
    payText: {
        color: 'white'
    },
    checkbox: {
        flex:1, 
        flexDirection:"row",
    },
    privacy: {
        paddingLeft: 10,
        paddingTop: 15,
    },
    notice: {
        paddingTop:4
    },


});

export default historyStyles;