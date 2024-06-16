import { useState } from 'react'
import Header from './Components/Header'
import Home from './Components/Home'
import Dishes from './Components/Dishes'
import About from './Components/About'
import Expert from './Components/Expert'
import Customer from './Components/Customer'
import Footer from './Components/Footer'
import Promo from './Components/Promo'



function App() {
 
  return (
  <div className='   '>
     <Header/>
     <Home/>
    <Dishes/>
    <About/>
    <Expert/>
    <Customer/>
    <Promo/>
    <Footer/>
 
  </div>
  )
}

export default App
