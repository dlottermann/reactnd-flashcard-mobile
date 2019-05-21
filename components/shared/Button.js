import React, { Component } from "react"
import {
  Text,
  TouchableOpacity,
  StyleSheet
} from "react-native"
import { white, windowColor, deepPink, deepPinkHot } from "../styles/colors"

const SubmitDeckBtn = ({ onPress, title, ...props }) => {
  return (
      <TouchableOpacity
       style={styles.submitBtn}
       onPress={onPress}>
          <Text style={styles.submitBtnText}>{title}</Text>
      </TouchableOpacity>
  )
}

 const getSheet = (iconSize, iconColor) => {
        return StyleSheet.create({
            icon : {
                color: iconColor,
                fontSize: iconSize
            }
        })
    }

const styles = StyleSheet.create({
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
  

export default SubmitDeckBtn
