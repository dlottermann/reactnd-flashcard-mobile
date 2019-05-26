import React, { Component, PureComponent } from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import {
  white,
  windowColor,
  darkCyan,
  deepPink,
  red,
  purple
} from "../styles/colors"
import { connect } from "react-redux"
import { CardQuestion, CardAnswer } from "./Card"
import { StyledButton } from "./shared/StyledButton"
import { clearLocalNotification, setLocalNotification } from "../utils/helpers"

const ResultQuiz = ({
  totalQuestions,
  corrects,
  incorrects,
  resetQuiz,
  backToDeck
}) => {
  //clear notification and set tomorrow
  clearLocalNotification()
    .then(setLocalNotification())
  return (
    <View style={styles.line}>
      <Text style={{ color: darkCyan, fontSize: 26 }}>
        Correct: {corrects}{" "}
      </Text>
      <Text style={{ color: red, fontSize: 26 }}>Incorrect: {incorrects}</Text>
      <Text style={{ color: darkCyan, fontSize: 24 }}>
        Total score : {((corrects * 100) / totalQuestions).toFixed()}%
      </Text>
      <StyledButton
        onPress={resetQuiz}
        title="Restart Quiz"
        backColor={darkCyan}
      />
      <StyledButton
        onPress={backToDeck}
        title="Back to Deck"
        backColor={deepPink}
      />
    </View>
  )
}

class Quiz extends PureComponent {
  state = {
    idxQuiz: 0,
    showAnswer: false,
    correct: 0,
    incorrect: 0,
    totalCards: 0
  }

  handleBackToDeck = () => {
    this.props.navigation.navigate("Deck", { deckId: this.props.deckId })
  }

  handleReset = () => {
    this.setState(state => {
      return {
        idxQuiz: 0,
        showAnswer: false,
        correct: 0,
        incorrect: 0,
        totalCards: 0
      }
    })
  }

  handleCorrect = () => {
    this.setState(state => {
      return {
        ...state,
        correct: state.correct + 1,
        idxQuiz: state.idxQuiz + 1,
        showAnswer: !state.showAnswer
      }
    })
  }

  handleIncorrect = () => {
    this.setState(state => {
      return {
        ...state,
        incorrect: state.incorrect + 1,
        idxQuiz: state.idxQuiz + 1,
        showAnswer: !state.showAnswer
      }
    })
  }

  render() {
    const { title, questions } = this.props.deck
    const { showAnswer, idxQuiz, correct, incorrect } = this.state

    if (idxQuiz === questions.length)
      return (
        <ResultQuiz
          totalQuestions={questions.length}
          corrects={correct}
          incorrects={incorrect}
          resetQuiz={this.handleReset}
          backToDeck={this.handleBackToDeck}
        />
      )

    return (
      <View>
        <Text style={{ textAlign: "center" }}>
          {idxQuiz + 1}/{questions.length}
        </Text>
        <Text
          style={{
            textAlign: "center",
            color: purple,
            padding: 30,
            fontWeight: "bold",
            fontSize: 24
          }}
        >
          Quiz of {title}
        </Text>

        {showAnswer ? (
          <CardAnswer
            answer={questions[idxQuiz].answer}
            correct={this.handleCorrect}
            incorrect={this.handleIncorrect}
          />
        ) : (
          <CardQuestion
            question={questions[idxQuiz].question}
            showAnswer={() => this.setState({ showAnswer: !showAnswer })}
          />
        )}
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
  }
})

const mapStateToProps = (state, { navigation }) => {
  const { deckId } = navigation.state.params
  return {
    deckId,
    deck: state[deckId]
  }
}

export default connect(mapStateToProps)(Quiz)
