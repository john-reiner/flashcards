import React, { useState } from 'react'
import { Grid, Paper, Text } from '@mantine/core';
import FlashcardModal from './FlashcardModal';

type Props = {
    front: string
    back: string
}

export default function FlashcardLink({front, back}: Props) {

    const [flipped, setFlipped] = useState(false)
    const [showingCard, setShowingCard] = useState(false);

    const renderText = (flipped: boolean) => {
        if (flipped) {
            return <Text fw={500}>Back of the card</Text>
        } else {
            return <Text fz="md">{front}</Text>
        }
    }

    console.log(front)

    return (
        <Grid.Col span={4}>
            {showingCard && <FlashcardModal opened={showingCard} setOpened={setShowingCard} front={front} back={back}/>}
            <Paper
                shadow="sm"
                p="md"
                radius="md"
                withBorder
                onClick={() => setShowingCard(true)}
            >
                <h4>{front}</h4>
            </Paper>
        </Grid.Col>
    )
}