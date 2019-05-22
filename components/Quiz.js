import React, { Component } from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { white, windowColor } from "../styles/colors"
import { connect } from 'react-redux'

class Quiz extends Component {
  state = {
    questions:0,
    showAnswer:false,
    correct:0,
    incorrect:0
  }
  
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

const mapStateToProps = (state, { navigation }) => {
  const { deckId } = navigation.state.params;
  return {
    deckId,
    deck: state[deckId],
  };
}

export default connect(mapStateToProps)(Quiz)
