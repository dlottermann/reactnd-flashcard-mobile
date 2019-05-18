import { GET_DECKS } from "../actions"

const reducerDecks = (state = {}, action) => {
  switch (action.type) {
    case GET_DECKS:
      return {
        ...state,
        ...action.decks
      }

    default:
      return state
  }
}

export default reducerDecks
