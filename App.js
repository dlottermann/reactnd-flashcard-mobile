import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Deck from './components/Deck'
import Dashboard from './components/Dashboard'
import { bodyColor } from './styles/colors';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Deck />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: bodyColor,
  },
});
