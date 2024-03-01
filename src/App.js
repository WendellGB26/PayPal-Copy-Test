import React from 'react';
import './index.css';
import AppRouter from './router/AppRouter'
import { createRoot } from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById('root')).render(<AppRouter />);