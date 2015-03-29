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

var CalculatorButton = React.createClass({
  getDefaultProps: function() {
    return {
      text: 0,
      functional: false,
      onPress: console.log
    };
  },
  render: function() {
    var text = this.props.text;
    var onPress = this.props.onPress;
    var viewStyles = [styles.cell]
    var textStyles = [styles.textInside];
    if (this.props.functional) {
      viewStyles.push(styles.functionalButton);
      textStyles.push(styles.functionalText);
    }
    return (
      <TouchableHighlight
        onPress={onPress.bind(null, text)}
        underlayColor="transparent"
        activeOpacity={0.8}>
        <View style={viewStyles}>
          <Text style={textStyles}>{text}</Text>
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
            <CalculatorButton text="1" onPress={this.handlePress} />
            <CalculatorButton text="2" onPress={this.handlePress} />
            <CalculatorButton text="3" onPress={this.handlePress} />
            <CalculatorButton text="+" functional="true" onPress={this.handleCalMethod} />
          </View>
          <View style={styles.rows}>
            <CalculatorButton text="4" onPress={this.handlePress} />
            <CalculatorButton text="5" onPress={this.handlePress} />
            <CalculatorButton text="6" onPress={this.handlePress} />
            <CalculatorButton text="−" functional="true" onPress={this.handleCalMethod} />
          </View>
          <View style={styles.rows}>
            <CalculatorButton text="7" onPress={this.handlePress} />
            <CalculatorButton text="8" onPress={this.handlePress} />
            <CalculatorButton text="9" onPress={this.handlePress} />
            <CalculatorButton text="×" functional="true" onPress={this.handleCalMethod} />
          </View>
          <View style={styles.rows}>
            <CalculatorButton text="AC" functional="true" onPress={this.handleClear} />
            <CalculatorButton text="0" onPress={this.handlePress} />
            <CalculatorButton text="=" functional="true" onPress={this.handleResult} />
            <CalculatorButton text="÷" functional="true" onPress={this.handleCalMethod} />
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
