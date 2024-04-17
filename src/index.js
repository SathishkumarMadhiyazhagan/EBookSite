import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CartProvider, FilterProvider } from './context';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <CartProvider>
        <FilterProvider>
          <App />
          <ToastContainer />
        </FilterProvider>
      </CartProvider>
    </Router>
  </React.StrictMode>
);
