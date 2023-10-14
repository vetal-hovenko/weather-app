import React from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';

import App from './App';

import './index.css';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path=":city" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
