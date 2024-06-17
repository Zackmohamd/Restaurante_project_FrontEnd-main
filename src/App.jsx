import { useState } from 'react'
import Header from './Components/Header'
import Home from './Components/Home'
import Dishes from './Components/Dishes'
import About from './Components/About'
import Expert from './Components/Expert'
import Customer from './Components/Customer'
import Footer from './Components/Footer'
import Promo from './Components/Contact'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'



function App() {
 
  return (
  <div className='   '>
    <Router>
     <Header/>
     <Routes>
      <Route path='/' element={<About/>}/>
      
     </Routes>
     <Home/>
    <Dishes/>
    <About/>
    <Expert/>
    <Customer/>
    <Contact/>
    <Footer/>
    </Router>

 
  </div>
  )
}

export default App
