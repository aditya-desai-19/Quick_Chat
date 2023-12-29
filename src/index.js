import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import { RouterProvider } from 'react-router-dom';
import Router from './Routes';

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(<RouterProvider router={Router} />);