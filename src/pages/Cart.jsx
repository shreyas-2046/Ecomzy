import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
// import CartSlice from '../redux/Slices/CartSlice'
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem'



const Cart = () => {
  const {cart} = useSelector((state)=>state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount,setTotalAmount] = useState(0);

  useEffect(()=>{
    setTotalAmount(cart.reduce((acc,curr)=>acc+curr.price,0));
  },[cart])
  return (
    <div className='max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center' >
    {
      cart.length > 0 ?
      (
        <div className='flex w-full justify-between'>
        
        <div className=' w-[100%] md:w-[60%] flex flex-col p-2'>
        {
          cart.map((item,index)=>{
            return <CartItem key={item.id} item={item} itemIndex={index}/>
          })
        }
        </div>
        
        
        
        <div class="flex flex-col p-5 gap-5 my-14  h-[100%] justify-between">
          <div>
              <div className="font-semibold text-xl text-green-800 ">Your Cart</div>
              <div className="font-semibold text-5xl text-green-700 capitalize mt-1">SUMMARY</div>
              <p className='text-xl'>
                <span className="text-gray-700 font-semibold text-xl ">Total Items : {cart.length}</span>
              </p>
          </div>
          <div >
            <p className='text-xl font-bold'><span className="text-gray-700 font-semibold">Total Amount:</span>${totalAmount}</p>
            <button className="bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl w-full">
              Checkout Now
            </button>
          </div>
        </div>
        </div>
      ):
      (
        <div className='min-w-[80vw] min-h-[80vh] flex flex-col items-center justify-center mx-auto '>
          <h1 className='font-semibold text-xl mb-2'>Your Cart Is Empty !</h1>
          <Link to="/">
            <button className='bg-green-600 hover:bg-purple-50 rounded-lg text-white transition duration-300, ease-linear mt-5 border-2 border-green-600 font-semibold hover:text-green-700 p-3 px-10 tracking-wider'>
              Shop Now
            </button>
          </Link>
        </div>
      )
    }
    </div>
  )
}

export default Cart