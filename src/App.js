import React, { Component } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import Kontakt from './components/pages/Kontakt';
import Datenschutz from './components/pages/Datenschutz';
import Impressum from './components/pages/Impressum';
import NotFound from './components/pages/NotFound';
import Footer from './components/Footer'
import Tippabgabe from './components/pages/Tippabgabe';
import Anmeldung from './components/pages/Anmeldung';
import Einkaufsliste from './components/pages/Einkaufsliste';
import Tippabgabe_Feedback from './components/pages/Tippabgabe_Feedback';
import Tippabgabe_Endplazierung from './components/pages/Tippabgabe_Endplazierung';
import Tippabgabe_Aufstiegsrunde from './components/pages/Tippabgabe_Aufstiegsrunde';
import AnmeldungAufstiegsrunde from './components/pages/Anmeldung_Aufstiegsrunde';
import Tippabgabe_EndplazierungAufstiegsrunde from './components/pages/Tippabgabe_EndplazierungAufstiegsrunde';

class App extends Component {

  render() {

    return (
      <>
        <HashRouter basename={'/'}>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/anmeldung' element={<Anmeldung />} />
            <Route path='/anmeldungaufstiegsrunde' element={<AnmeldungAufstiegsrunde />} />
            <Route path='/tippabgabeaufstiegsrunde' element={<Tippabgabe_Aufstiegsrunde />} />
            <Route path='/tippabgabe' element={<Tippabgabe />} />
            <Route path='/tippabgabe_endplazierungaufstiegsrunde' element={<Tippabgabe_EndplazierungAufstiegsrunde />} />
            <Route path='/tippabgabe_endplazierung' element={<Tippabgabe_Endplazierung />} />
            <Route path='/tippabgabe_feedback' element={<Tippabgabe_Feedback />} />
            <Route path='/einkaufsliste' element={<Einkaufsliste />} />
            <Route path='/kontakt' element={<Kontakt />} />
            <Route path='/datenschutz' element={<Datenschutz />} />
            <Route path='/impressum' element={<Impressum />} />
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
