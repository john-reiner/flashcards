import React, { useEffect, useState } from 'react'
import Deck from './deck/Deck'
import {ViewType, DeckType} from '../../../../types/appViewTypes'
import { Stack } from '@mantine/core';

type Props = {
    setViewToShow: React.Dispatch<React.SetStateAction<keyof ViewType>>
}

export default function AllDecks({setViewToShow}: Props) {

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
            return <Deck setViewToShow={setViewToShow} title={deck.title}/>
        })
    }

    return (
        <Stack>
            {renderDecks()}
        </Stack>
    )
}