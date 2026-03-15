

import React from 'react';
import './App.css';
import Navbar from './pages/Navbar';
import Hero from './pages/Hero';
import Other from './pages/Other'
import Update from './pages/Update'
import Projects from './pages/Projects';
import Stages from './pages/Stages';
import Contact from './pages/Contact'
import Footer from './pages/Footer';
function App() {
    return (
        <div className="App">
           <Navbar></Navbar>
           <Hero></Hero>
           <Other></Other>
       <Projects></Projects>
         <Update></Update>
        <Stages></Stages>
      
       <Contact></Contact>
       <Footer></Footer>
        </div>
    );
}

export default App;
