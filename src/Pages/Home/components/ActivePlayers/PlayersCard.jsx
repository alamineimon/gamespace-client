import React from 'react'

const PlayersCard = ({player}) => {
    const { img} = player
  return (
    <div>
        <img src={img} className="h-16 w-16 cursor-pointer hover:bg-yellow-300 rounded-full border-2 border-red-500 hover:border-yellow-500" alt="" />
    </div>
  )
}

export default PlayersCard