import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Payment = () => {
    const gamesData = useLoaderData()
    const{name,email,productName,price,location,mobile,} = gamesData;
  return (
    <div className='text-center'>
        <p>Payment for <span className='font-bold'>{productName}</span></p>
        <p>Please Pay $ {price} for your Products</p>
    </div>
  )
}

export default Payment