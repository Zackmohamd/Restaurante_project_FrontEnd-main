
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Dishes from './Components/Dishes';
import Expert from './Components/Expert';
import Customer from './Components/Customer';
import Footer from './Components/Footer';


function App() {
  return (
    <Router>
      <Header />
      <section id='Home'>
      <Home />

      </section>
      <section id="Dishes">
        <Dishes />
      </section>
      <section id="about">
        <About />
      </section>
      
      <section id="Expert">
        <Expert />
      </section>
      <section id="Customer">
        <Customer />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer/>
    </Router>
  );
}

export default App;

