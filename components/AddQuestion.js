import React, { Component } from "react"
import {
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  StyleSheet,
  Button
} from "react-native"
import { white, windowColor, deepPink, deepPinkHot } from "../styles/colors"

SubmitDeckBtn = ({ onPress }) => {
  return (
      <TouchableOpacity
       style={styles.submitBtn}
       onPress={onPress}>
          <Text style={styles.submitBtnText}>Create Question</Text>
      </TouchableOpacity>
  )
}

export default class AddQuestion extends Component {
  state = {
    titleQuestion: ""
  }

  submit = () => {
    console.log("saving card")
  }

  render() {
    const { titleQuestion } = this.state

    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={styles.name}>What is the your new question?</Text>
        <TextInput
          value={titleQuestion}
          style={styles.input}
          onChangeText={titleQuestion => this.setState({ titleQuestion })}
        />
        <SubmitDeckBtn onPress={this.submit} />
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
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
    textAlign: "center",
    color: white,
    justifyContent: "flex-start",
    margin: 5
  },
  input: {
    width: "90%",
    height: 44,
    padding: 8,
    borderWidth: 1,
    borderColor: white,
    margin: 10,
    color: white
  },
  submitBtn: {
    backgroundColor: deepPinkHot,
    padding: 16,
    borderRadius: 3,
  },
  submitBtnText:{
    color: white,
    fontSize: 16,
    textAlign: 'center'
  }
})
