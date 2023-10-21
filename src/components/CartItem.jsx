import React from 'react'
// import {FcDeleteDatabase} from 'react-icons/fc'
import {MdDelete} from 'react-icons/md'
import { useDispatch } from 'react-redux'
import {remove} from '../redux/Slices/CartSlice'
import { toast } from 'react-hot-toast'
const CartItem = ({item,itemIndex}) => {
  const dispatch = useDispatch();
  const removeFromCart = () =>{
    dispatch(remove(item.id));
    toast.error("Product Removed ")
  }
  return (
    <div className='flex items-center p-2 md:p-5 justify-between border-b-2 border-slate-500  mt-2 mb-2 md:mx-5 '>
    <div >


  <div className='flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center'>


  <div className='w-[30%] ' >
  <img src={item.image}></img>
  </div>

  <div className  ="md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]">
  <h1>{item.title}</h1>
  <h1>{item.description}</h1>
  <div className='flex justify-between items-center self-baseline '>
    <p className="font-bold text-lg text-green-600">${item.price}</p>
    <div onClick={removeFromCart} className=" bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3">
    <MdDelete />
    </div>
  </div>
</div>

</div>


    </div>
    </div>
    
  )
}

export default CartItem
  