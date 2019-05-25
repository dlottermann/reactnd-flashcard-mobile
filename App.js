import React from "react"
import { StyleSheet, Platform, View } from "react-native"
import Dashboard from "./components/Dashboard"
import AddDeck from "./components/AddDeck"
import AddCard from "./components/AddCard"
import Quiz from "./components/Quiz"
import Deck from "./components/Deck"
import {
  bodyColor,
  white,
  purple,
  darkCyan,
  windowColor
} from "./styles/colors"
import { createStore } from "redux"
import { Provider } from "react-redux"
import reducer from "./reducers"
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation"

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={styles.container}>
          <MainNavigator />
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

// const TabsContainer = createAppContainer(Tabs)

const MainNavigator = createAppContainer(
  createStackNavigator({
    home: {
      screen: Tabs,
      navigationOptions: {
        header: null
      }
    },
    Deck: {
      screen: Deck,
      navigationOptions: ({ navigation }) => ({
        title: "Deck",
        headerTintColor: windowColor,
        headerStyle: {
          backgroundColor: bodyColor
        }
      })
    },
    AddCard: {
      screen: AddCard,
      title: "New Card",
      navigationOptions: ({ navigation }) => ({
        headerTintColor: windowColor,
        headerStyle: {
          backgroundColor: bodyColor
        }
      })
    },
    Quiz: {
      screen: Quiz,
      title: "Quiz",
      navigationOptions: ({ navigation }) => ({
        headerTintColor: windowColor,
        headerStyle: {
          backgroundColor: bodyColor
        }
      })
    }
  })
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: bodyColor
  }
})
