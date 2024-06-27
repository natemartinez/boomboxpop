import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from react-dom/client only once
import { BrowserRouter } from 'react-router-dom';
import App from './app';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// Create root only once
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);