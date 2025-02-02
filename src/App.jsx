import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { APP_CONSTANTS } from './constants/site.config';

import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';

import Home from './pages/Home';
import Contacts from './pages/Contacts';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';

import { TranslationProvider } from "./TranslationContext";
import LanguageSwitcher from "./components/LanguageSwitcher";

function App() {
  return (
    <TranslationProvider initialLanguage={APP_CONSTANTS.languages.default}>
      <Router>
        <Nav />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </TranslationProvider>
  );
}

export default App;

