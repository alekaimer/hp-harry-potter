import './Card.scss'
import { ICharacter } from '../../dtos/ICharacter.dto'

function Card({ data }: { data: ICharacter }) {
  return (
    <div className={`card ${data.alive ? 'alive' : ''}`}>
      <div className="avatar">
        <img
          src={
            data.image ||
            'https://via.placeholder.com/900x1200/000000/FFFFFF/?text=No+Image'
          }
          alt={data.image ? data.name : 'No image'}
        />
      </div>
      <h2>{data.name || <i className="uninformed">Uninformed</i>}</h2>
      <p>
        Actor: <b>{data.actor || <i className="uninformed">Uninformed</i>}</b>
      </p>
      <p>House: {data.house || <i className="uninformed">Uninformed</i>}</p>
      <p>
        Patronus: {data.patronus || <i className="uninformed">Uninformed</i>}
      </p>
      <p>
        Date of Birth:{' '}
        {data.dateOfBirth || <i className="uninformed">Uninformed</i>}
      </p>
      <p className={`aliveInformation ${data.alive ? 'alive' : ''}`}>
        {data.alive ? 'Character is alive! ' : 'Did not survive.'}
      </p>
    </div>
  )
}

export default Card
