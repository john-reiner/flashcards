import React from 'react'
import Deck from './deck/Deck'
import {ViewType} from '../../../../types/appViewTypes'
import { Stack, Button } from '@mantine/core';

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
        <Stack>
            {renderDecks()}
        </Stack>
        // <div style={{border: "solid red 1px", padding: "1em"}}>
        //     <h2>All Decks</h2>
        // </div>
    )
}