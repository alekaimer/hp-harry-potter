import React from 'react'
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
          alt={data.name}
        />
      </div>
      <h2>{data.name}</h2>
      <p>
        Actor: <b>{data.actor}</b>
      </p>
      <p>House: {data.house}</p>
      <p>Patronus: {data.patronus}</p>
      <p>Date of Birth: {data.dateOfBirth}</p>
      <p className={`aliveInformation ${data.alive ? 'alive' : ''}`}>
        {data.alive ? 'Character is alive! ' : 'Did not survive.'}
      </p>
    </div>
  )
}

export default Card
