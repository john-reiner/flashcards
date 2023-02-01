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
import Show from './show/showDeck/Show';

type Props = {
    setViewToShow: React.Dispatch<React.SetStateAction<keyof ViewType>>
}

export default function Main({
    setViewToShow
}: Props) {
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);
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
                <Show />
            </AppShell>
    )
}