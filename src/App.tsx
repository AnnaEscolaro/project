import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/carteira" element={ <Wallet /> } />
      <Route path="*" element={ <NotFound /> } />
    </Routes>
  );
}

export default App;
