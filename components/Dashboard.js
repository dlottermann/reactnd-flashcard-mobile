import React, { Component } from "react"
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  AsyncStorage,
  TouchableOpacity
} from "react-native"
import { white, lightGray, bodyColor, windowColor } from "../styles/colors"
import { AppLoading } from "expo"
import { connect } from "react-redux"
import { getDecks } from "../utils/api"
import { receiveDecks } from "../actions"

class Dashboard extends Component {
  state = {
    loading: true
  }

  componentDidMount() {
    const { dispatch } = this.props
    //AsyncStorage.clear()   
    getDecks()
      .then(entries => dispatch(receiveDecks(entries)))
      .then(() => this.setState(() => ({ loading: false })))
  }

  renderItemDeck = ({ item }) => {
    const { decks } = this.props

    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate("Deck", { deckId: item })}
      >
        <View style={styles.line}>
          <Text style={styles.name}>{decks[item].title}</Text>
          <Text style={styles.total}>
            {decks[item].questions.length} Cards
          </Text>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    const { loading } = this.state
    const { decks } = this.props

    if (loading) <AppLoading />

    return (
      <View style={styles.container}>
        {!decks ? (
          <Text>You have not decks registered</Text> // this only appears on error
        ) : (
          <FlatList
            data={Object.keys(decks)}
            renderItem={this.renderItemDeck}
            keyExtractor={item => item}
          />
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "stretch",
    marginTop: 50,
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: bodyColor,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 3
  },
  line: {
    alignItems: "center",
    padding: 24,
    borderRadius: 5,
    margin: 4,
    backgroundColor: windowColor,
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

const mapStateToProps = decks => {
  return {
    decks
  }
}

export default connect(mapStateToProps)(Dashboard)
