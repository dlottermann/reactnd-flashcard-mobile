import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { white, windowColor, lightGray } from "../styles/colors";

export default class Deck extends Component {
  render() {
    return (
        <View style={styles.line}>
          <Text style={styles.name}>Deck</Text>
          <Text style={styles.total}> 0 Cards</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  line: {
    justifyContent:'center',
    alignItems:'center',
    paddingTop:'50%',
    borderRadius: 8,
    backgroundColor: windowColor,
    alignSelf:'center',
    width:'93%',
    height:'70%',
    marginTop:100,
    fontSize:24,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 3,
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
