import { useState } from 'react'
import AllDecks from './components/allDecks/AllDecks'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>My Card Decks</h1>
      <div>
        <AllDecks />

      </div>
    </div>
  )
}

export default App
