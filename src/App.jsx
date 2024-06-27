import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Main from './components/Main';
import Articles from './components/Articles';
import Trend1 from './components/articles/Trend1';

function App() {

  return (
    <Routes>
        <Route index element={<Main/>} />
        <Route path='/articles'>
          <Route index element={<Articles />} /> {/* This line will be article homepage */}
          <Route path='trend1' element={<Trend1 />} />
        </Route>
      
    </Routes>
  );
}

export default App;