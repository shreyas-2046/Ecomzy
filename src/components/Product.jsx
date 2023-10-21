import React from 'react'
// import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {add,remove} from '../redux/Slices/CartSlice'
const Product = ({post}) => {
  const {cart} = useSelector((state)=>state);
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(add(post));
    toast.success("item Added to cart");
  }

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item Removed From cart");
  }
  return (
    <div className='flex flex-col items-center justify-between hover:scale-110 transition-all duration-300 ease-in hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] gap-3 p-4 mt-10 ml-5 rounded-lg  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
    <div>
    <p className='text-gray-700 font-semibold text-lg truncate w-40 mt-1'>{post.title}</p>
    </div>
    <div className='w-40 text-gray-400 font-normal text-[10px] text-left'>
      {post.description.split(" ").splice(0,10).join(" ")+"..."}
    </div>
    <div className='h-[180px]'>
      <img src={post.image} alt='.' className='w-full h-full'></img>
    </div>


    <div className='flex items-center justify-center jusitify-between gap-16 mt-5 group'>
    <div>
      <p className='text-green-600 font-semibold'>${post.price}</p>
    </div>
    {
      cart.some((p)=>p.id===post.id) ? 
      (<button onClick={removeFromCart}  className='group-hover:bg-gray-700 group-hover:text-white transition duration-300 ease-in text-gray-700 border-2 border-gray-700 rounded-full font-semibold p-1 px-3 text-[12px] uppercase tracking-wide'>
        Remove Item
      </button>):
      (
        <button onClick={addToCart} className='group-hover:bg-gray-700 group-hover:text-white transition duration-300 ease-in text-gray-700 border-2 border-gray-700 rounded-full font-semibold p-1 px-3 text-[12px] uppercase tracking-wide'>
          Add To Cart
        </button>
      )
    }
    </div>
    
    </div>
  )
}

export default Product