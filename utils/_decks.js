import { AsyncStorage } from "react-native"
export const FLASHCARD_STORAGE_KEY = "FlashCardMobile"

//Criar default decks
let decks = {
  React: {
    key:'6f31f7a2-7c26-11e9-8f9e-2a86e4085a59',
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
    key:'6f31fa04-7c26-11e9-8f9e-2a86e4085a59',
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
