import React, { Component } from "react"
import {
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  StyleSheet
} from "react-native"
import { white, windowColor, deepPink, deepPinkHot } from "../styles/colors"
import { addCardToDeck } from '../utils/api'
import { connect } from "react-redux"
import { addCard } from "../actions"
import { StyledButton } from './shared/StyledButton'


class AddCard extends Component {
  state = {
    question: '',
    answer:''
  }

  submit = () => {
   
     const { navigation, deckId, dispatch } = this.props    
     const newCard = this.state

     dispatch(addCard( deckId, newCard))

     addCardToDeck(deckId, newCard)
     .then(this.setState(()=> ({question:'', answer:''})))   
    
     navigation.navigate('Deck',{ deckId:deckId })

  }

  render() {
    const { question, answer } = this.state

    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={styles.name}>What is the your new question?</Text>
        <TextInput
          value={question}
          style={styles.input}
          onChangeText={question => this.setState({ question })}
        />
         <Text style={styles.name}>Answer</Text>
        <TextInput
          value={answer}
          style={styles.input}
          onChangeText={answer => this.setState({ answer })}
        />
        <StyledButton onPress={this.submit} title='Save Card' backColor={ deepPinkHot } />
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
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
    textAlign: "center",
    color: white,
    justifyContent: "flex-start",
    margin: 5
  },
  input: {
    width: "90%",
    height: 44,
    padding: 8,
    borderWidth: 1,
    borderColor: white,
    margin: 10,
    color: white
  },
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

const mapStateToProps = (state,{ navigation }) => {
  const { deckId } = navigation.state.params
  return {
    deckId,
  }
}

export default connect(mapStateToProps)(AddCard)
