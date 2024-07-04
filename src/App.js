import React, { Component } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import Footer from './components/Footer'
import Tippabgabe from './components/pages/Tippabgabe';
import Anmeldung from './components/pages/Anmeldung';

class App extends Component {

  render() {

    return (
      <>
        <HashRouter basename={'/'}>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/anmeldung' element={<Anmeldung />} />
            <Route path='/tippabgabe' element={<Tippabgabe />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </HashRouter >

      </>
    );
  }
}

export default App;
