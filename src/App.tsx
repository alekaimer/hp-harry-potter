import { useState } from 'react'
import './App.scss'

interface Character {
  name: string
  dateOfBirth: string
  house: string
  patronus: string
  actor: string
  alive: boolean
  image: string
}

function App() {
  const [characters, setCharacters] = useState<Character[]>([])
  const [loading, setLoading] = useState(false)

  async function getCharacters() {
    setLoading(true)
    // const response = await fetch('https://hp-api.herokuapp.com/api/characters') //TODO: Testar com URL inválida
    const response = await fetch('https://hp-api.onrender.com/api/characters')
    const data = await response.json()
    setCharacters(data)
    setLoading(false)
  }

  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <div className="App">
      <h1>Harry Potter's Landing Page</h1>
      <button onClick={getCharacters}>Get Characters</button>
      <ul>
        {characters.map((character) => (
          <li key={character.name}>
            <img src={character.image} alt={character.name} />
            <h2>{character.name}</h2>
            <p>
              Actor: <b>{character.actor}</b>
            </p>
            <p>House: {character.house}</p>
            <p>Patronus: {character.patronus}</p>
            <p>Date of Birth: {character.dateOfBirth}</p>
            <p>Alive: {character.alive ? 'Yes' : 'No'}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
