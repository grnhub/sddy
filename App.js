import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator, createTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";

import ListScreen from './src/screens/ListScreen';
import ChattingScreen from './src/screens/ChattingScreen';
import MyScreen from './src/screens/MyScreen';
import DetailScreen from './src/screens/DetailScreen';
import HistoryScreen from './src/screens/HistoryScreen';
import TradeApplyScreen from './src/screens/TradeApplyScreen';
import ModifyingScreen from './src/screens/ModifyingScreen';
import WalletScreen from './src/screens/WalletScreen';
import ChargingScreen from './src/screens/ChargingScreen';
import ExchangingScreen from './src/screens/ExchangingScreen';
import CompleteScreen from './src/screens/CompleteScreen';
import EvaluateScreen from './src/screens/EvaluateScreen';
import PostProductScreen from './src/screens/PostProductScreen';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ListStack = createStackNavigator(
  {
    ListScreen,
    DetailScreen : {
      screen: DetailScreen
    },
    HistoryScreen,
    TradeApplyScreen,
    CompleteScreen
  },
  {
      defaultNavigationOptions: ({navigation}) => ({
          title: '써도대여',
          headerRight: () => (<TouchableOpacity onPress={()=>alert('aa')}><View style={{marginRight:10}}><MaterialCommunityIcons name="bell" size={20}/></View></TouchableOpacity>)
      }),
  }
);
const AttentionStack = createStackNavigator(
  {
    EvaluateScreen
  },
  {
      defaultNavigationOptions: ({navigation}) => ({
          title: '관심목록',
          headerRight: () => (<TouchableOpacity onPress={()=>alert('aa')}><View style={{marginRight:10}}><MaterialCommunityIcons name="bell" size={20}/></View></TouchableOpacity>)
      }),
      initialRouteName: 'EvaluateScreen',
  }
);
const ChattingStack = createStackNavigator(
  {
      ChattingScreen
  },
  {
      defaultNavigationOptions: ({navigation}) => ({
          title: '채팅',
          headerRight: () => (<TouchableOpacity onPress={()=>alert('aa')}><View style={{marginRight:10}}><MaterialCommunityIcons name="bell" size={20}/></View></TouchableOpacity>)
      }),
      initialRouteName: 'ChattingScreen',
  }
);
const MyStack = createStackNavigator(
  {
      MyScreen,
      ModifyingScreen :{
        screen : ModifyingScreen //내정보 수정
      },
      WalletScreen :{
        screen : WalletScreen //내지갑
      },Charging :{
        screen : ChargingScreen
      },Exchanging:{
        screen : ExchangingScreen
      },PostProductScreen: {
        screen: PostProductScreen   //물품등록하기
      }
  },
  {
      defaultNavigationOptions: ({navigation}) => ({
          title: '나의 설정',
          headerRight: () => (<TouchableOpacity onPress={()=>alert('aa')}><View style={{marginRight:10}}><MaterialCommunityIcons name="bell" size={20}/></View></TouchableOpacity>)
      }),
      initialRouteName: 'MyScreen',
  }
);


const TabNavigator = createBottomTabNavigator(
  {
      홈: ListStack,
      관심목록: AttentionStack,
      채팅: ChattingStack,
      나의설정: MyStack,
      
  },
  {
      defaultNavigationOptions: ({navigation}) => ({
          tabBarIcon: ({focused, horizontal, tintColor}) => {
                const { routeName } = navigation.state;
                let iconName;

              if (routeName === '홈') {
                iconName = 'home';
              } 
              else if (routeName === '관심목록') {
                iconName = 'heart-circle';
              } 
              else if (routeName === '채팅') {
                iconName = 'comment-processing';
              }
              else if (routeName === '나의설정') {
                iconName = 'human-greeting';
              }

              // can use react-native-vector-icons 
              // <Icon name={iconName} size={iconSize} color={iconColor} />
              //return <Text style={{color: focused && "#4630eb" || "#888"}}>{icon}</Text>
              return (
                <MaterialCommunityIcons
                  name={iconName}
                  size={horizontal ? 20 : 25}
                  color={tintColor}
                />);
          }
      }),
      lazy: false,
      tabBarOptions: {
          activeTintColor: "#4630eb",
          inactiveTintColor: "#888",
      },
  }
);

const AppStack = createStackNavigator(
  {
      TabNavigator: {
          screen: TabNavigator,
          navigationOptions: ({navigation}) => ({
              header: null,
          }),
      },
  }
);

export default createAppContainer(AppStack);