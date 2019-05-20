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

const SubmitDeckBtn = ({ onPress }) => {
  return (
      <TouchableOpacity
       style={styles.submitBtn}
       onPress={onPress}>
          <Text style={styles.submitBtnText}>Create Deck</Text>
      </TouchableOpacity>
  )
}

export default SubmitDeckBtn
