import React, { Component } from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import {
  white,
  windowColor,
  lightGray,
  darkCyan,
  orange,
  deepPinkHot
} from "../styles/colors"

SubmitDeckBtn = ({ onPress, title, backColor }) => {
  return (
    <TouchableOpacity
      style={[styles.submitBtn, { backgroundColor: backColor || deepPinkHot }]}
      onPress={onPress}
    >
      <Text style={styles.submitBtnText}>{title}</Text>
    </TouchableOpacity>
  )
}
export default class Deck extends Component {
  render() {
    const { title } = this.props.navigation.state.params.deck
    return (
      <View style={styles.line}>
        <Text style={styles.name}>{title}</Text>
        <Text style={styles.total}>
          {" "}
          {this.props.navigation.state.params.total} Cards
        </Text>
        <SubmitDeckBtn
          title="Add Card"
          backColor={darkCyan}
          onPress={() => {
            this.props.navigation.navigate("AddCard", {})
          }}
        />
        <SubmitDeckBtn
          title="Start Quiz"
          backColor={orange}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  line: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "50%",
    borderRadius: 8,
    backgroundColor: windowColor,
    alignSelf: "center",
    width: "93%",
    height: "70%",
    marginTop: 100,
    fontSize: 24,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 3
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
  },

  submitBtn: {
    width: "90%",
    padding: 16,
    borderRadius: 3,
    marginTop: 6
  },
  submitBtnText: {
    color: white,
    fontSize: 16,
    textAlign: "center"
  }
})
