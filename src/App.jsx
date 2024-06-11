import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Main from './components/Main';
import Nav from './components/Nav';

const App = () => {

  return (
    <div className="App">
        <Nav/>
        <Main/>
    </div>
  );
};

export default App;