import React, { Component } from "react"
import {
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  StyleSheet
} from "react-native"
import { white, windowColor, deepPink, deepPinkHot } from "../styles/colors"
import uuidv1 from 'uuid/v1'
import {saveDeckTitle} from '../utils/api'


SubmitDeckBtn = ({ onPress }) => {
  return (
      <TouchableOpacity
       style={styles.submitBtn}
       onPress={onPress}>
          <Text style={styles.submitBtnText}>Create Deck</Text>
      </TouchableOpacity>
  )
}

export default class AddDeck extends Component {
  state = {
    title: ""
  }

  submit = () => {
    const {navigation, screenProps} = this.props
    const key = uuidv1()
    const { title } = this.state
    
    saveDeckTitle( key, title )
    .then(this.setState(()=> ({title:''})))   

  }

  render() {
    const { title } = this.state

    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={styles.name}>What is the title of your new deck?</Text>
        <TextInput
          value={title}
          style={styles.input}
          onChangeText={title => this.setState({ title })}
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
