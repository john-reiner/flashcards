import { useState } from 'react'
import { MantineProvider,
  useMantineTheme,
} from '@mantine/core';
import Main from './components/app/Main';
import {ViewType} from './types/appViewTypes'

function App() {

  const [viewToShow, setViewToShow] = useState<keyof ViewType>('main')

  const views = {
    main: <Main setViewToShow={setViewToShow}/>
  }

  const renderView = (views: ViewType, viewToShow: keyof ViewType) => {
    return views[viewToShow]
  }

  return (

      <MantineProvider theme={{ colorScheme: 'dark' }} withGlobalStyles withNormalizeCSS>
        {renderView(views, viewToShow)}
      </MantineProvider>

  )
}

export default App
