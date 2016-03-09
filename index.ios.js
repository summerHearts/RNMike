/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
var React = require('react-native');
var {
    NavigatorIOS,
    AppRegistry,
    StyleSheet,
    TabBarIOS,
    Text,
    View,
} = React;

var Home = require('./Home');

var styles = StyleSheet.create({
    container: {
        flex: 1
    }
});


var smartMike = React.createClass( {
  render: function() {
  return (
    <NavigatorIOS
      style={styles.container}
      initialRoute={{
        component: Home,
        title: '眯客',
        passProps: { myProp: 'foo'},
      }}
    />
  );
},
});


AppRegistry.registerComponent('smartMike', () => smartMike);
