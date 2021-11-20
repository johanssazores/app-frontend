import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './assets/styles/styles.css'
import './assets/styles/override.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);