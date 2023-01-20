import React from 'react'
import Deck from '../Deck/Deck'

type Props = {}

export default function AllDecks({}: Props) {

    const decks = [
        {
            name: "fake deck name"            
        }
    ]

    const renderDecks = () => {
        return decks.map(deck => {
            return <Deck name={deck.name}/>
        })
    }

    return (
        <div style={{border: "solid red 1px"}}>
            <h2>All My Decks</h2>
            {renderDecks()}
        </div>
    )
}