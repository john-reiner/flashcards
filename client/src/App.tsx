import { useState } from 'react'
import AllDecks from './components/allDecks/AllDecks'
import './App.css'
import ShowDeck from './components/showDeck/ShowDeck'
import {ViewType} from './types/appViewTypes'

function App() {

  const [viewToShow, setViewToShow] = useState<keyof ViewType>('allDecks')

  const views = {
    allDecks: <AllDecks 
                setViewToShow={setViewToShow}
              />,
    deck: <ShowDeck 
                setViewToShow={setViewToShow}
              />
  }

  const renderView = (views: ViewType, viewToShow: keyof ViewType) => {
    return views[viewToShow]
  }

  return (
    <div className="App">
      {renderView(views, viewToShow)}
    </div>
  )
}

export default App
