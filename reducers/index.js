import { GET_DECKS, ADD_DECK, ADD_CARD } from "../actions"

const reducerDecks = (state = {}, action) => {
  switch (action.type) {
    case GET_DECKS:
      return {
        ...state,
        ...action.decks
      }
    case ADD_DECK:
      return{
        ...state,
        ...action.deck
      }

    default:
      return state
  }
}

export default reducerDecks
