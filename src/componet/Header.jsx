import React from 'react'
import has from '../assets/img/hat.jpg'
export const Header = () => {
  return (
    <div className="flex justify-center items-center bg-gray-100 p-4 rounded-md">
    <img
      src={has}
      alt=""
      className="w-screen"
    />
  </div>
  
  )
}
