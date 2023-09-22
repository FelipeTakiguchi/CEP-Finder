import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homePage';
import AboutPage from './pages/aboutPage';
import React from 'react';
import UnknownPage from './pages/UnknowPage';
import { DarkModeProvider } from './context/darkMode';

function App() {
  return (
    <>
      <DarkModeProvider>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/*' element={<UnknownPage />} />
        </Routes>
      </DarkModeProvider>
    </>
  );
}

export default App;