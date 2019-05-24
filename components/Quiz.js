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
      <View style={styles.line}>
        <Text>Quiz</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  line: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: windowColor,
    alignSelf: "center",
    width: "93%",
    height: "50%",
    marginTop: 5,
    fontSize: 24,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 3
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
