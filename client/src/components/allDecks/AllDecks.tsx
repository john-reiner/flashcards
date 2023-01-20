import React from 'react'
import Deck from './deck/Deck'
import {ViewType} from '../../types/appViewTypes'

type Props = {
    setViewToShow: React.Dispatch<React.SetStateAction<keyof ViewType>>
}

export default function AllDecks({setViewToShow}: Props) {

    const decks = [
        {
            name: "Fake Deck 1"            
        },
        {
            name: "Fake Deck 2"            
        }
    ]

    const renderDecks = () => {
        return decks.map(deck => {
            return <Deck setViewToShow={setViewToShow} name={deck.name}/>
        })
    }

    return (
        <div style={{border: "solid red 1px", padding: "1em", width: "100%"}}>
            <h2>All Decks</h2>
            {renderDecks()}
        </div>
    )
}