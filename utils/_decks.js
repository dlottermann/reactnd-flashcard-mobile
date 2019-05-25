import { AsyncStorage } from "react-native"
export const FLASHCARD_STORAGE_KEY = "FlashCardMobile:cards"

//Criar default decks
let decks = {
  React: {
    title: "React",
    questions: [
      {
        question: "What is React?",
        answer: "A library for managing user interfaces"
      },
      {
        question: "Where do you make Ajax requests in React?",
        answer: "The componentDidMount lifecycle event"
      }
    ]
  },
  JavaScript: {
    title: "JavaScript",
    questions: [
      {
        question: "What is a closure?",
        answer:
          "The combination of a function and the lexical environment within which that function was declared."
      }
    ]
  }
}

export const setDefault = () => {
  AsyncStorage.setItem(FLASHCARD_STORAGE_KEY, JSON.stringify(decks))
  return decks
}

export const formatDecksResults = results => results === null ? setDefault() : JSON.parse(results)
