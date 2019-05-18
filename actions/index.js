export const GET_DECKS = 'GET_DECKS'


export const receiveDecks = (decks) => {
    return {
        type:GET_DECKS,
        decks
    }
}