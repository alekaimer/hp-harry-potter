import { useEffect, useState } from 'react'
import './styles/App.scss'
import Card from './components/Card/Card'
import { ICharacter } from './dtos/ICharacter.dto'
import { fetchRepository } from './repository/fetchRepository'

function App() {
  const [characters, setCharacters] = useState<ICharacter[]>([])
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<string>('')

  async function getCharacters() {
    setLoading(true)

    try {
      const data = await fetchRepository(
        'https://hp-api.onrender.com/api/characters',
      )
      setCharacters(data)
    } catch (error: unknown) {
      setErrors('Não foi possível carregar os personagens')
    }

    setLoading(false)
  }

  useEffect(() => {
    characters.length < 1 && getCharacters()
  }, [characters])

  if (loading) {
    return <p className="title">Loading...</p>
  }

  if (errors) {
    return <p className="title">{errors}</p>
  }

  if (characters.length < 1) {
    return <p className="title">No characters found</p>
  }

  return (
    <div className="App">
      <h1 className="title">Harry Potter's Landing Page</h1>
      <ul className="grid">
        {!errors ? (
          characters.map((character) => (
            <li key={character.id}>
              <Card data={character} />
            </li>
          ))
        ) : (
          <p>{errors}</p>
        )}
      </ul>
    </div>
  )
}

export default App
