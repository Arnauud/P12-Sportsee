import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './styles/main.scss'; // Import all styles through main.scss
import App from './App.jsx';

const root = createRoot(document.getElementById('root'));  
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);