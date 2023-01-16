import React from 'react'

const PlayersCard = ({player}) => {
    const { img} = player
  return (
    <div>
        <img src={img} className="h-16 w-16 rounded-full border-2 border-red-500" alt="" />
    </div>
  )
}

export default PlayersCard