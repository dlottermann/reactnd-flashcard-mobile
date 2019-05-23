import { GET_DECKS, ADD_DECK, ADD_CARD } from "../actions"

const reducerDecks = (state = {}, action) => {
  switch (action.type) {
    case GET_DECKS:
      return {
        ...state,
        ...action.decks
      }
    case ADD_DECK:
      return {
        ...state,
        ...action.deck
      }
    case ADD_CARD:
      
      const updateQuestion = state[action.deckId].questions.concat(action.card);
      
      return {
        ...state,
        [action.deckId]: {
          ...state[action.deckId],
          questions: updateQuestion,
        },
      }
    default:
      return state
  }
}

export default reducerDecks
