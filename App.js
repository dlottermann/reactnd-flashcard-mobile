import React from "react"
import { StyleSheet, Platform, View } from "react-native"
import Dashboard from "./components/Dashboard"
import AddDeck from "./components/AddDeck"
import { bodyColor, white, purple } from "./styles/colors"
import { createStore } from "redux"
import { Provider } from "react-redux"
import reducer from "./reducers"
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
  createAppContainer
} from "react-navigation"

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={styles.container}>
          <TabsContainer />
        </View>
      </Provider>
    )
  }
}

const RouteConfigs = {
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      tabBarLabel: "Decks"
    }
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: "New Deck"
    }
  }
}

const TabNavigatorConfig = {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: Platform.OS === "ios" ? purple : white,
    style: {
      height: 56,
      backgroundColor: Platform.OS === "ios" ? white : purple,
      shadowColor: "rgba(0, 0, 0, 0.24)",
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
}

const Tabs =
  Platform.OS === "ios"
    ? createBottomTabNavigator(RouteConfigs, TabNavigatorConfig)
    : createMaterialTopTabNavigator(RouteConfigs, TabNavigatorConfig)

const TabsContainer = createAppContainer(Tabs)

    
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: bodyColor
  }
})
