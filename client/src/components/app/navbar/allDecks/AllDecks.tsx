import React, { useEffect, useState } from 'react'
import DeckLink from './deck/DeckLink'
import {ViewType, DeckType} from '../../../../types/appViewTypes'
import { Stack } from '@mantine/core';

type Props = {
    setViewToShow: React.Dispatch<React.SetStateAction<keyof ViewType>>
    setDeck_id: React.Dispatch<React.SetStateAction<number>>
}

export default function AllDecks({setViewToShow, setDeck_id}: Props) {

    const [decks, setDecks] = useState<DeckType[]>([])

    useEffect(() => {
        fetchDecks()
    }, [])
    

    const fetchDecks = () => {
        fetch("http://localhost:3000/decks")
        .then((response) => response.json())
        .then((decks) => setDecks(decks))
    }

    const renderDecks = () => {
        return decks.map(deck => {
            return <DeckLink 
                        setViewToShow={setViewToShow} 
                        title={deck.title} 
                        deck_id={deck.id}
                        setDeck_id={setDeck_id}
                    />
        })
    }

    return (
        <Stack>
            {renderDecks()}
        </Stack>
    )
}