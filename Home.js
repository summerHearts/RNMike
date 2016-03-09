'use strict';
import React, {
  AppRegistry,
  ScrollView,
  View,
  Platform,
  StyleSheet,
} from 'react-native';

var HomeListView = require('./HomeListView');

var ADView= require('./ADView');

var Mine  = require('./Mine');
var Home = React.createClass({
//初始化
  getInitialState(){
    return {
      //配置项
    };
  },

    //选中一行
    selectShop:function(shopData : Object){
      if (Platform.OS === 'ios') {
        this.props.navigator.push({
          title:'酒店详情',
          component:Mine,
        });
      }else{
        //android对应的处理
      }
    },

  render() {
    return (
      <View style={styles.container}>
      <ScrollView>
         <ADView />
          <HomeListView
             onSelect = {() => this.selectShop('')}
          />
      </ScrollView>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
  },
});
module.exports = Home;