import { AsyncStorage } from 'react-native'
import {FLASHCARD_STORAGE_KEY, formatDecksResults} from './_decks'

// getDecks: retorna todos os baralhos com seus títulos, perguntas, e respostas. 

export const getDecks = () => {
    return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY).then(formatDecksResults)
}

// getDeck: dado um único argumento id, ele retorna o baralho associado àquele id. 
export const getDeck = (id) => {

}

// saveDeckTitle: dado um único argumento title, ele adiciona-o aos baralhos. 

export const saveDeckTitle = (  key, deck  ) => {
    return AsyncStorage.mergeItem(FLASHCARD_STORAGE_KEY, JSON.stringify({
       [key]:deck
    }))
}


// addCardToDeck: dado dois argumentos, title e card, ele adiciona o cartão à lista de perguntas ao baralho com o título associado. 
export const addCardToDeck = (key, card) => {
    return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY).then((result) => {
        let decks = JSON.parse(result)

        console.log(decks)    

        //decks[key].questions.push({question: question, answer: answer})
        //AsyncStorage.mergeItem(FLASHCARD_STORAGE_KEY, JSON.stringify(decks))
    })
}

//RemoveDeck: dado um único argumento title (ou ID), ele remove um baralho. 
export const removeDeck = (id) => {

}
