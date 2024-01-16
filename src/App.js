
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react';
import Home from './components/pages/home';
import About from './components/pages/about';
import Contact from './components/pages/contact';
import Nopage from './components/pages/nopage';
import Header from './components/pages/header';
import Footer from './components/pages/footer';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Header />
          <Routes>
            <Route index element={<Home />}></Route>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='*' element={<Nopage />}></Route>
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>

    </div>
  )
};


export default App;




