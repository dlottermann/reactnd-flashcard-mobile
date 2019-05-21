export const GET_DECKS = 'GET_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'


export const receiveDecks = (decks) => {
    return {
        type:GET_DECKS,
        decks
    }
}

export const addDeck = (deck) => {
    return {
        type:ADD_DECK,
        deck
    }
}

export const addCard = (card) => {
    return {
        type:ADD_CARD,
        card
    }
}
