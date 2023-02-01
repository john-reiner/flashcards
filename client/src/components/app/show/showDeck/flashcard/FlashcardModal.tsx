import {Modal, Card, Image, Text, Badge, Button, Group, ActionIcon, Center, Grid } from '@mantine/core';
import { IconArrowNarrowRight, IconArrowNarrowLeft, IconFlipHorizontal } from '@tabler/icons';
import React from 'react'

type Props = {
    opened: boolean
    setOpened: React.Dispatch<React.SetStateAction<boolean>>
    front: string
    back: string
}

export default function FlashcardModal({
    opened,
    setOpened,
    front,
    back
}: Props) {
    console.log(front)
    return (
        <Modal
            centered
            opened={opened}
            onClose={() => setOpened(false)}
            size="xl"
            title={`Deck: ${"DeckName"}`}
        >
            <Grid justify="center" align="center">
                <Grid.Col span={1}>
                    <ActionIcon variant="outline">
                        <IconArrowNarrowLeft size={18} />
                    </ActionIcon>
                </Grid.Col>
                <Grid.Col span={10}>
                    <Card shadow="sm" p="lg" radius="md" withBorder>
                        <Card.Section>
                            {/* <Image
                            src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                            height={160}
                            alt="Norway"
                            /> */}
                        </Card.Section>

                        <Group position="apart" mt="md" mb="xs">
                            <Text weight={500}>Norway Fjord Adventures</Text>
                            <Badge color="pink" variant="light">
                                front
                            </Badge>
                        </Group>

                        <Text size="sm" color="dimmed">
                            {front}
                        </Text>

                        <Button variant="light" color="blue" fullWidth mt="md" radius="md">
                            Flip Over
                        </Button>
                    </Card>                
                </Grid.Col>
                <Grid.Col span={1}>
                    <ActionIcon variant="outline">
                        <IconArrowNarrowRight size={18} />
                    </ActionIcon>
                </Grid.Col>
            </Grid>

        </Modal>
    )
}