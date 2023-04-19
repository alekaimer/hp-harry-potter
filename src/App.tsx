import { useEffect, useState } from 'react'
import './App.scss'
import Card from './components/Card/Card'
import { ICharacter } from './dtos/ICharacter.dto'

function App() {
  const [characters, setCharacters] = useState<ICharacter[]>([])
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<string>('')

  async function getCharacters() {
    setLoading(true)

    try {
      const response = await fetch(
        // 'https://hp-api.herokuapp.com/api/characters',
        'https://hp-api.onrender.com/api/characters',
      )
      const data = await response.json()
      setCharacters(data)
      setLoading(false)
    } catch (error: unknown) {
      setErrors('Não foi possível carregar os personagens')
      setLoading(false)
    }
  }

  useEffect(() => {
    characters.length < 1 && getCharacters()
  }, [characters])

  // return early while loading
  if (loading) {
    return <h1>Loading...</h1>
  }

  // return early if there are no characters
  if (characters.length < 1) {
    return <h1>No characters found</h1>
  }

  // return early if there are errors
  if (errors) {
    return <h1>{errors}</h1>
  }

  return (
    <div className="App">
      <h1>Harry Potter's Landing Page</h1>
      <ul className="grid">
        {!errors ? (
          characters.map((character) => (
            <li key={character.id}>
              <Card data={character} />
            </li>
          ))
        ) : (
          <h1>{errors}</h1>
        )}
      </ul>
    </div>
  )
}

export default App
