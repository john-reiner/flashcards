import React, { useState } from 'react'
import {ViewType} from '../../../../types/appViewTypes'
import FlashCardLink from './flashcard/FlashcardLink'
import { Container, Grid } from '@mantine/core';
import FlashcardModal from './flashcard/FlashcardModal';

type Props = {
}

export default function Show({
    
}: Props) {

    
    const cards = [
        {
            front: "this is the front of the card with some content 1",
            back: "this is the back content of the card"
        },
        {
            front: "this is the front of the card with some content 2",
            back: "this is the back content of the card"
        },
        {
            front: "this is the front of the card with some content 3",
            back: "this is the back content of the card"
        },
    ]


    const renderCards = () => {
        return cards.map(card => {
            return <FlashCardLink front={card.front} back={card.back}/>
        })
    }

    return (
        <Container>
            <h2>Name of the Deck</h2>
            <Grid>
                {renderCards()}
            </Grid>
        </Container>
    )
}