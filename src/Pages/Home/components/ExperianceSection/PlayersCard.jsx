import React from 'react'
import { Link } from 'react-router-dom'

const PlayersCard = ({player}) => {
    const { _id, photoURL, name} = player;
  return (
    <Link to={`/users/${_id}`} title={`${name}`}>
        <img src={photoURL} className="h-16 w-16 cursor-pointer hover:bg-yellow-300 rounded-full border-2 border-red-500 hover:border-yellow-500" alt="" />
    </Link>
  )
}

export default PlayersCard