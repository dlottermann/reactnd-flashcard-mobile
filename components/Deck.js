import React, { Component } from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import {
  white,
  windowColor,
  lightGray,
  darkCyan,
  orange,
  deepPinkHot
} from "../styles/colors"
import { StyledButton } from './shared/StyledButton'
import { connect } from "react-redux"

class Deck extends Component {
  render() {
    const { title, questions } = this.props.deck

    return (
      <View style={styles.line}>
        <Text style={styles.name}>{title}</Text>
        <Text style={styles.total}>
          { Object.keys(questions).length} Cards
        </Text>
        <StyledButton
          title="Add Card"
          backColor={darkCyan}
          onPress={() => {
            this.props.navigation.navigate("AddCard", { deckId: this.props.deckId })
          }}
        />
        <StyledButton
          title="Start Quiz"
          backColor={orange}
          onPress={()=>{ this.props.navigation.navigate('Quiz', { deckId: this.props.deckId }) } }
        />
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
  name: {
    fontSize: 18,
    color: white,
    fontWeight: "bold"
  },
  total: {
    fontSize: 14,
    color: lightGray
  }
})

const mapStateToProps = (state, { navigation }) => {
  const { deckId } = navigation.state.params;
  
  return {
    deckId,
    deck: state[deckId],
  };
}


export default connect(mapStateToProps)(Deck)
