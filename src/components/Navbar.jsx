import React from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const {cart} = useSelector((state)=>state)
  return (
    <nav className='flex flex-row justify-between items-center h-20 mx-auto max-w-6xl'>
    <NavLink to="/"> 
    <img src={logo} className='h-14'></img>
    </NavLink>
      
      <div className='flex items-center font-medium text-slate-100 mr-5 space-x-6'>
      <NavLink to="/">
      <p className=''>Home</p>
      </NavLink>

      <NavLink to="/cart">
      <div className='relative'>
      <FaShoppingCart className=' text-2xl cursor-pointer hover:text-green-400 transition transform duration-200'/>
      {
        cart.length >0 && 
        <p className='absolute bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce -top-1 -right-2 rounded-full  text-white'>{cart.length}</p>
      }
      
      </div>
      
      </NavLink>
        
      </div>
    </nav>
  )
}

export default Navbar