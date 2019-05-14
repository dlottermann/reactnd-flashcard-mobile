import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { white, darkCyan, lightGray } from "../utils/colors";

export default class Deck extends Component {
  render() {
    return (
      <View style={styles.line}>
        <Text style={styles.name}>{this.props.name}</Text>
        <Text style={styles.total}>{this.props.email} Cards</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  line: {
    alignItems: "center",
    padding: 24,
    borderRadius: 5,
    margin: 2,
    backgroundColor: darkCyan
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
