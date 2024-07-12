import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Articles from './components/Articles';
import PStation1 from './components/articles/PS/PStation1';
import PStation2 from './components/articles/PS/PStation2';
import PStation3 from './components/articles/PS/PStation3';
import Nin1 from './components/articles/Nintendo/Nin1';
import Nin2 from './components/articles/Nintendo/Nin2';
import Nin3 from './components/articles/Nintendo/Nin3';

function App() {
  return (
    <Routes>
      <Route index element={<Main />} />
      <Route path="articles" element={<Articles />}>
        <Route path="PlayStation">
          <Route path="pstation1" element={<PStation1 />} />
          <Route path="pstation2" element={<PStation2 />} />
          <Route path="pstation3" element={<PStation3 />} />
        </Route>
        <Route path="Nintendo">
          <Route path="Nin1" element={<Nin1 />} />
          <Route path="nin2" element={<Nin2 />} />
          <Route path="nin3" element={<Nin3 />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
