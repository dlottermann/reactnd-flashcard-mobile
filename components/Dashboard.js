import React, { Component } from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import { white, lightGray, bodyColor, windowColor } from "../styles/colors";

export default class Dashboard extends Component {

  renderItemDeck = ({ item }) => {
    return (
      <View style={styles.line}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.total}>{item.email} Cards</Text>
      </View>
    ) 
  }

  render() {
    const teste = [
      {
        name: "Proxima Midnight",
        email: "proxima@appdividend.com"
      },
      {
        name: "Ebony Maw",
        email: "ebony@appdividend.com"
      },
      {
        name: "Black Dwarf",
        email: "dwarf@appdividend.com"
      },
      {
        name: "Mad Titan",
        email: "thanos@appdividend.com"
      },
      {
        name: "Supergiant",
        email: "supergiant@appdividend.com"
      },
      {
        name: "Loki",
        email: "loki@appdividend.com"
      },
      {
        name: "corvus",
        email: "corvus@appdividend.com"
      },
      {
        name: "Proxima Midnight",
        email: "proxima1@appdividend.com"
      },
      {
        name: "Ebony Maw",
        email: "ebony1@appdividend.com"
      },
      {
        name: "Black Dwarf",
        email: "dwarf1@appdividend.com"
      },
      {
        name: "Mad Titan",
        email: "thanos1@appdividend.com"
      },
      {
        name: "Supergiant",
        email: "supergiant1@appdividend.com"
      },
      {
        name: "Loki",
        email: "loki1@appdividend.com"
      },
      {
        name: "corvus",
        email: "corvus1@appdividend.com"
      }
    ];    
    return (
      <View style={styles.container}>
        <FlatList
          data={teste}
          renderItem={ this.renderItemDeck }
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
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
    backgroundColor:bodyColor,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 3,
  },
   line: {
    alignItems: "center",
    padding: 24,
    borderRadius: 5,
    margin: 2,
    backgroundColor: windowColor
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
});
