import React from 'react'
import {ViewType} from '../../../../../types/appViewTypes'
import { Button } from '@mantine/core';
type Props = {
    title: string
    setViewToShow: React.Dispatch<React.SetStateAction<keyof ViewType>>
    deck_id: number
    setDeck_id: React.Dispatch<React.SetStateAction<number>>
}

export default function DeckLink({
    title,
    setViewToShow,
    setDeck_id,
    deck_id
}: Props) {

    const handleClick = () => {
        setDeck_id(deck_id)
    }

    return (
        <Button variant="subtle" onClick={handleClick}>{title}</Button>
    )
}