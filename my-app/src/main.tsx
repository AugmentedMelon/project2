import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css'; // Importing your styles
import App from './App.tsx'; // Importing your main App component

// Create the root element and render the App component within StrictMode
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
