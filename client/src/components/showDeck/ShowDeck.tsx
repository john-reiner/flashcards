import React from 'react'
import {ViewType} from '../../types/appViewTypes'
import Flashcard from './flashcard/Flashcard'

type Props = {
    setViewToShow: React.Dispatch<React.SetStateAction<keyof ViewType>>
}

export default function ShowDeck({
    setViewToShow
}: Props) {

    const cards = [
        {
            front: "this is the front of the card with some content",
            back: "this is the back content of the card"
        },
        {
            front: "this is the front of the card with some content",
            back: "this is the back content of the card"
        },
        {
            front: "this is the front of the card with some content",
            back: "this is the back content of the card"
        },
    ]

    const handleBackClick = () => {
        setViewToShow("allDecks")
    }

    const renderCards = () => {
        return cards.map(card => {
            return <Flashcard front={card.front} back={card.back}/>
        })
    }

    return (
        <div>
            <div>
                <button
                    onClick={handleBackClick}
                >All Decks</button>

            </div>
            <div>
                <h3>Cards</h3>
                {renderCards()}
            </div>
        </div>
    )
}