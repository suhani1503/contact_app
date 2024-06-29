import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const root = document.getElementById('root');

const rootElement = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Create a root instance
const rootInstance = ReactDOM.createRoot(root);
// Use the root instance to render your app
rootInstance.render(rootElement);



