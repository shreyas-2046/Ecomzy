import React from 'react';
import Home from '../src/pages/Home';
import Cart from '../src/pages/Cart';
import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom';
const App = () => {
  return (
    <div>
      <div className='bg-slate-900'>
        <Navbar/>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
  )
}

export default App
