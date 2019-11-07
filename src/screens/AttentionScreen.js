import React, {Component} from 'react';
import { Text, View} from 'react-native';
import { Container, Header, Tab, Tabs, ScrollableTab } from 'native-base';
import CategoryScreen from './CategoryScreen';
import ListScreen from './ListScreen';
import ChattingScreen from './ChattingScreen';

export default class AttentionScreen extends Component {

    constructor(props) {
        super(props);
    }
   
    
    categoryView(index) {
        var newList = [];
  
          console.log(this.state.mockList.length);
  
        for (var i=0; i<this.state.mockList.length;i++) {
          var d = this.state.mockList[i];
          if(d.category == index) {
            newList.push(d);
          }
        }
        this.props.navigation.navigate("CategoryScreen", {item: newList, mockitem: this.state.mockList});
        
      }
      

    render() {
        return (
            <Container>
                <Header hasTabs/>
                <Tabs renderTabBar={()=> <ScrollableTab />}>
                <Tab heading="Tab1">
                    <ListScreen />
                </Tab>
                <Tab heading="Tab2">
                    <ChattingScreen />
                </Tab>
                <Tab heading="Tab3">
                    <Text>asd</Text>
                </Tab>
                <Tab heading="Tab4">
                     <Text>asfffd</Text>
                </Tab>
                <Tab heading="Tab5">
                        <Text>sgggrr</Text>
                </Tab>
                </Tabs>
            </Container>
        )
    }
}
