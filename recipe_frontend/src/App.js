import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HeaderNav from './components/HeaderNav';
import CoverScreen from './components/CoverScreen';
import SignUpScreen from './components/SignUpScreen';
import FilterScreen from './components/FilterScreen';

/**
 * PUBLIC_INTERFACE
 * App main entrypoint, sets up routes and applies main layout.
 */
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderNav />
        <Routes>
          <Route path="/" element={<CoverScreen />} />
          <Route path="/signup" element={<SignUpScreen />} />
          <Route path="/filter" element={<FilterScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
