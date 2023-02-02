import React, { useState } from 'react'

import { AppShell,
    Navbar,
    Header,
    Text,
    MediaQuery,
    Burger,
    useMantineTheme,

} from '@mantine/core';

import { ViewType } from '../../types/appViewTypes';
import AllDecks from './navbar/allDecks/AllDecks';
import ShowDeck from './show/showDeck/ShowDeck';

type Props = {
    setViewToShow: React.Dispatch<React.SetStateAction<keyof ViewType>>
}

export default function Main({
    setViewToShow
}: Props) {

    const [deck_id, setDeck_id] = useState(0)
    const [opened, setOpened] = useState(false);

    const theme = useMantineTheme();

    console.log(deck_id)
    return (
            <AppShell
            styles={{
                main: {
                background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
                },
            }}
            navbarOffsetBreakpoint="sm"
            asideOffsetBreakpoint="sm"
            navbar={
                <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
                <AllDecks 
                    setViewToShow={setViewToShow}
                    setDeck_id={setDeck_id}
                />
                </Navbar>
            }
            header={
                <Header height={{ base: 50, md: 70 }} p="md">
                <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                    <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                    <Burger
                        opened={opened}
                        onClick={() => setOpened((o) => !o)}
                        size="sm"
                        color={theme.colors.gray[6]}
                        mr="xl"
                        />
                    </MediaQuery>
                    
                    <Text>Application header</Text>
                </div>
                </Header>
            }
            >
                {deck_id === 0 ? <h2>Select a Deck</h2> : <ShowDeck deck_id={deck_id} />}
            </AppShell>
    )
}