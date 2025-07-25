// import React from 'react'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Companies from './components/companies/Companies';
import Residencies from './components/residencies/Residencies'; 
import Value from './components/value/Value.jsx'
import Contact from './components/contact/Contact.jsx'
import './App.css'
import GetStarted from './components/getStarted/GetStarted.jsx';
import Footer from './components/footer/Footer.jsx';
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
      <Header/>
      <Hero/>
      </div>
      <Companies/>
      <Residencies/>
      <Value/>
      <Contact/>
      <GetStarted/>
      <Footer/>
    </div>
  );
}

export default App;
