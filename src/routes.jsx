import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PokemonDetail from './components/PokemonDetail';
import Sobre from './pages/Sobre';
import NotFound from './components/Err';

function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokemon/:id" element={<PokemonDetail/>} />
      <Route path="/sobre" element={<Sobre/>} />
      <Route path="*" element={<NotFound />} /> 
    </Routes>
  );
}

export default RoutesApp;
