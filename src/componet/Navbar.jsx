import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/img/logo1.png'

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
   
          <div className="flex items-center">
            <Link to="/" className="mr-8">
              <img src={logo} alt="Logo" className="w-32 h-auto" />
            </Link>

   
            <div>
              <ul className="flex space-x-6 text-gray-700">
                <li className='hover:font-bold	' >All Recipes</li>
                <li className='hover:font-bold	'>Blog</li> 
                <li className='hover:font-bold	'>Member</li>
              </ul>
            </div>
          </div>

   
          <form className="flex items-center">
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none"
            >
              Login
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};


export default Navbar