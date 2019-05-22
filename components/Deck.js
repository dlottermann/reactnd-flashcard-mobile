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
    const { title } = this.props.navigation.state.params.deck
    return (
      <View style={styles.line}>
        <Text style={styles.name}>{title}</Text>
        <Text style={styles.total}>
          {this.props.navigation.state.params.total} Cards
        </Text>
        <SubmitDeckBtn
          title="Add Card"
          backColor={darkCyan}
          onPress={() => {
            this.props.navigation.navigate("AddCard", {})
          }}
        />
        <SubmitDeckBtn
          title="Start Quiz"
          backColor={orange},
          onPress={()=>{ this.props.navigation.navigate('Quiz',{}) } }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  line: {
    justifyContent: "center",
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
    color: white,
    fontWeight: "bold"
  },
  total: {
    fontFamily: "Verdana",
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
