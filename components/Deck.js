import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { white, darkCyan, bodyColor,windowColor, lightGray } from "../styles/colors";


export default class Deck extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.line}>
          <Text style={styles.name}>Deck</Text>
          <Text style={styles.total}> 0 Cards</Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.name}>Deck</Text>
          <Text style={styles.total}> 0 Cards</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    padding:5,
    marginTop:50,
  },
  line: {
    alignItems: "center",
    alignSelf:'stretch',
    padding: 24,
    borderRadius: 7,
    backgroundColor: windowColor,
    marginTop:5
  },
  name: {
    fontFamily: "Verdana",
    fontSize: 18,
    color: white,
    fontWeight: "bold"
  },
  total: {
    fontFamily: "Verdana",
    fontSize: 14,
    color: lightGray
  }
});
