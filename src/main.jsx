import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AppRoot } from './pages/App.jsx';

createRoot(document.getElementById('root')).render(<StrictMode><AppRoot /></StrictMode>);
