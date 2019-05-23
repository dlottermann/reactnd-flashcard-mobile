import React, { Component } from "react"
import {
  Text,
  TouchableOpacity,
  StyleSheet
} from "react-native"
import { white, deepPinkHot } from "../../styles/colors"

export const StyledButton = ({
  title = 'Click Me!',
  onPress,
  backColor = deepPinkHot,
}) => {
  return (
      <TouchableOpacity
       style={[styles.submitBtn,{ backgroundColor: backColor }]}
       onPress={onPress}>
          <Text style={styles.submitBtnText}>{title.toUpperCase()}</Text>
      </TouchableOpacity>
  )
}
 

const styles = StyleSheet.create({
    submitBtn: {
      padding: 16,
      borderRadius: 3,
      width:'90%',
      marginTop:6,
    },
    submitBtnText:{
      color: white,
      fontSize: 16,
      textAlign: 'center'
    }
  })
