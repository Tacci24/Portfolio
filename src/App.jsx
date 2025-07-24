import React from 'react';
import './App.css';
import Header from './components/Header'; 
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Footer from './components/Footer'

function App() {
  return (
    <main role="main">
      <Header />  
      <Hero />  
      <About />
      <Projects />
      <Contacts />
      <Footer />
    </main>
  );
}

export default App;
