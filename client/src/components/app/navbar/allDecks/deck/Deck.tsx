import React from 'react'
import {ViewType} from '../../../../../types/appViewTypes'
import { Button } from '@mantine/core';
type Props = {
    title: string
    setViewToShow: React.Dispatch<React.SetStateAction<keyof ViewType>>
}

export default function Deck({
    title,
    setViewToShow
}: Props) {

    const handleClick = () => {
        // setViewToShow("deck")
        console.log("clicked")
    }

    return (
        <Button variant="subtle" onClick={handleClick}>{title}</Button>
    )
}