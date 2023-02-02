import React, { useEffect, useState } from 'react'
import {ViewType, DeckType} from '../../../../types/appViewTypes'
import FlashCardLink from './flashcard/FlashcardLink'
import { Container, Grid } from '@mantine/core';
import FlashcardModal from './flashcard/FlashcardModal';

type Props = {
    deck_id: number
}

export default function ShowDeck({
    deck_id
}: Props) {

    const [deck, setDeck] = useState<DeckType>({
        title: "",
        id: 0
    })

    useEffect(() => {
        fetchDeck()
    }, [deck_id])
    

    const fetchDeck = () => {
        fetch(`http://localhost:3000/decks/${deck_id}`)
        .then((response) => response.json())
        .then((deck) => setDeck(deck))
    }
    // const renderCards = () => {
    //     return cards.map(card => {
    //         return <FlashCardLink front={card.front} back={card.back}/>
    //     })
    // }

    return (
        <Container>
            <h2>{deck.title}</h2>
            <Grid>
                {/* {renderCards()} */}
            </Grid>
        </Container>
    )
}