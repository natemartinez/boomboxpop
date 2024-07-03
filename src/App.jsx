import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Main from './components/Main';
import Articles from './components/Articles';
import Trend1 from './components/articles/Trend1';
import Trend2 from './components/articles/Trend2';
import Trend3 from './components/articles/Trend3';
import Feat1 from './components/articles/Feat1';
import Feat2 from './components/articles/Feat2';
import Feat3 from './components/articles/Feat3';

function App() {

  return (
    <Routes>
        <Route index element={<Main/>} />
        <Route path='/articles'>
          <Route index element={<Articles />} /> {/* This line will be article homepage */}
          <Route path='trend1' element={<Trend1 />} />
          <Route path='trend2' element={<Trend2 />} />
          <Route path='trend3' element={<Trend3 />} />
          <Route path='feat1' element={<Feat1 />} />
          <Route path='feat2' element={<Feat2 />} />
          <Route path='feat3' element={<Feat3 />} />
        </Route>
      
    </Routes>
  );
}

export default App;