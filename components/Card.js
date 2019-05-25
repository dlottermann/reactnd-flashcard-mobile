import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { white, windowColor, deepPink, deepPinkHot, darkCyan } from "../styles/colors"
import { StyledButton } from './shared/StyledButton'

export const CardQuestion = ({ question, showAnswer }) => {
  return (
    <View style={styles.line}>
      <Text style={styles.name}>{question}</Text>
      <StyledButton onPress={ showAnswer } title='Show Answer?' backColor={ deepPinkHot } />
    </View>
  )
}

export const CardAnswer = ({ answer, correct, incorrect }) => {
  return (
    <View style={styles.line}>
      <Text style={styles.name}>{answer}</Text>
      <StyledButton onPress={ correct } title='Correct' backColor={ darkCyan } />
      <StyledButton onPress={ incorrect } title='Incorrect' backColor={ deepPink } />
    </View>
  )
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
  name: {
    fontSize: 18,
    color: white,
    fontWeight: "bold"
  },
})
