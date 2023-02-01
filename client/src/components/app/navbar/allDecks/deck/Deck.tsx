import React from 'react'
import {ViewType} from '../../../../../types/appViewTypes'
import { Stack, Button } from '@mantine/core';
type Props = {
    name: string
    setViewToShow: React.Dispatch<React.SetStateAction<keyof ViewType>>
}

export default function Deck({
    name,
    setViewToShow
}: Props) {

    const handleClick = () => {
        setViewToShow("deck")
    }

    return (
        <Button variant="subtle" onClick={handleClick}>  {name}</Button>
    )
}