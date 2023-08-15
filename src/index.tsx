import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const id = document.getElementById('root') as HTMLDivElement

const root = ReactDOM.createRoot(id);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


