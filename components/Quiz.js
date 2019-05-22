import React, { Component } from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { white, windowColor } from "../styles/colors"

export default class Quiz extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Quiz</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: white
  },
  row: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center"
  }
})
