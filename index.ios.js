/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
} = React;

// var changeData = function() {
//   this.props.hey = 0;
// };
var globalData = 0;
var operator = "", operand = "";
var calMethod = '';

var Cell = React.createClass({
  render() {
    var keyPad = 0;
    console.log(keyPad);
    return(
      <TouchableHighlight
        onPress={this.props.onPress}
        underlayColor="transparent"
        activeOpacity={0.8}>
        <View style={styles.cell}>
          <Text style={styles.textInside}>hi</Text>
        </View>
      </TouchableHighlight>
    );
  }
});

var AwesomeReact = React.createClass({
  getInitialState() {
    console.log("init");
    return {hey: 0};
  },
  changeData() {
    console.log("test");
    console.log(this.state)
    this.setState({
      hey: globalData + 1,
    })
    globalData += 1;
  },
  handlePress(hi) {
    console.log(hi);
    if (calMethod === '') {
      operator += hi.toString();
    } else {
      operand += hi.toString();
    }
    this.setState({
      hey: calMethod === '' ? operator : operand,
    })
  },
  handleCalMethod(hey) {
    console.log(hey);
    calMethod = hey;
    console.log("method is " + hey);
  },
  handleResult() {
    console.log("equal");
    if (calMethod !== '') {
      this.setState({
        hey: calMethod === '+' ? (parseFloat(operator) + parseFloat(operand)) : calMethod === '−' ? (parseFloat(operator) - parseFloat(operand)) : calMethod === '×' ? (parseFloat(operator) * parseFloat(operand)) : (parseFloat(operator) / parseFloat(operand))
      });
      operator = "";
      operand = ""
      calMethod = '';
    };
  },
  handleClear() {
    operator = "";
    operand = ""
    calMethod = '';
    this.setState({
      hey: 0,
    })
  },
  render: function() {
    var data = this.state.hey
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Hi, Calculator!</Text>
        <View style={styles.board}>
          <View style={styles.rows}>
            <TouchableHighlight
              onPress={this.handlePress.bind(this, 1)}
              underlayColor="transparent"
              activeOpacity={0.8}>
              <View style={styles.cell}>
                <Text style={styles.textInside}>1</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={this.handlePress.bind(this, 2)}
              underlayColor="transparent"
              activeOpacity={0.8}>
              <View style={styles.cell}>
                <Text style={styles.textInside}>2</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={this.handlePress.bind(this, 3)}
              underlayColor="transparent"
              activeOpacity={0.8}>
              <View style={styles.cell}>
                <Text style={styles.textInside}>3</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={this.handleCalMethod.bind(this, '+')}
              underlayColor="transparent"
              activeOpacity={0.8}>
              <View style={[styles.cell, styles.functionalButton]}>
                <Text style={[styles.textInside, styles.functionalText]}>+</Text>
              </View>
            </TouchableHighlight>

          </View>
          <View style={styles.rows}>
            <TouchableHighlight
              onPress={this.handlePress.bind(this, 4)}
              underlayColor="transparent"
              activeOpacity={0.8}>
              <View style={styles.cell}>
                <Text style={styles.textInside}>4</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={this.handlePress.bind(this, 5)}
              underlayColor="transparent"
              activeOpacity={0.8}>
              <View style={styles.cell}>
                <Text style={styles.textInside}>5</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={this.handlePress.bind(this, 6)}
              underlayColor="transparent"
              activeOpacity={0.8}>
              <View style={styles.cell}>
                <Text style={styles.textInside}>6</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={this.handleCalMethod.bind(this, '−')}
              underlayColor="transparent"
              activeOpacity={0.8}>
              <View style={[styles.cell, styles.functionalButton]}>
                <Text style={[styles.textInside, styles.functionalText]}>−</Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.rows}>
            <TouchableHighlight
              onPress={this.handlePress.bind(this, 7)}
              underlayColor="transparent"
              activeOpacity={0.8}>
              <View style={styles.cell}>
                <Text style={styles.textInside}>7</Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight
              onPress={this.handlePress.bind(this, 8)}
              underlayColor="transparent"
              activeOpacity={0.8}>
              <View style={styles.cell}>
                <Text style={styles.textInside}>8</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={this.handlePress.bind(this, 9)}
              underlayColor="transparent"
              activeOpacity={0.8}>
              <View style={styles.cell}>
                <Text style={styles.textInside}>9</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={this.handleCalMethod.bind(this, '×')}
              underlayColor="transparent"
              activeOpacity={0.8}>
              <View style={[styles.cell, styles.functionalButton]}>
                <Text style={[styles.textInside, styles.functionalText]}>×</Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.rows}>
            <TouchableHighlight
              onPress={this.handleClear}
              underlayColor="transparent"
              activeOpacity={0.8}>
              <View style={[styles.cell, styles.functionalButton]}>
                <Text style={[styles.textInside, styles.functionalText]}>AC</Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight
              onPress={this.handlePress.bind(this, 0)}
              underlayColor="transparent"
              activeOpacity={0.8}>
              <View style={styles.cell}>
                <Text style={styles.textInside}>0</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={this.handleResult}
              underlayColor="transparent"
              activeOpacity={0.8}>
              <View style={[styles.cell, styles.functionalButton]}>
                <Text style={[styles.textInside, styles.functionalText]}>=</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={this.handleCalMethod.bind(this, '÷')}
              underlayColor="transparent"
              activeOpacity={0.8}>
              <View style={[styles.cell, styles.functionalButton]}>
                <Text style={[styles.textInside, styles.functionalText]}>÷</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
        <Text style={styles.showing}>{data}</Text>
      </View>
      )
  },
});

var styles = StyleSheet.create({
  hi: {
    backgroundColor: "blue",
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontFamily: 'Chalkduster',
    fontSize: 39,
    color: 'gray',
    marginBottom: 40,
  },
  board: {
    padding: 1,
    backgroundColor: "#000000",
    borderRadius: 5,
  },
  rows: {
    flexDirection: "row",
  },
  cell: {
    height: 80,
    width: 80,
    backgroundColor: "#f1f1f1",
    borderRadius: 5,
    margin: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  showing: {
    marginTop: 30,
    fontSize: 20,
    fontFamily: "Chalkduster",
  },
  textInside: {
    fontFamily: 'Arial',
    fontSize: 30,
  },
  functionalButton: {
    backgroundColor: "#ef7b18",
  },
  functionalText: {
    color: "white",
  },
});

AppRegistry.registerComponent('AwesomeReact', () => AwesomeReact);
