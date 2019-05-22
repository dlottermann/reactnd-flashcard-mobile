import React, { Component } from "react"
import {
  Text,
  TouchableOpacity,
  StyleSheet
} from "react-native"
import { white, deepPinkHot } from "../../styles/colors"

const StyledButton = ( onPress, title ) => {
  return (
      <TouchableOpacity
       style={styles.submitBtn}
       onPress={onPress}>
          <Text style={styles.submitBtnText}>{title||'teste'}</Text>
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
  

export default StyledButton
