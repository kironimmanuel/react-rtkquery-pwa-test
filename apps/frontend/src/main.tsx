import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { apiSlice } from './services';
import './styles/globals.css';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
    <React.StrictMode>
        <ApiProvider api={apiSlice}>
            <App />
        </ApiProvider>
    </React.StrictMode>,
);
