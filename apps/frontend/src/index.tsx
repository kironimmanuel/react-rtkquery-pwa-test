import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { setupStore } from './store';
import './styles/globals.css';

import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { apiSlice } from './services';

import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
    <React.StrictMode>
        <Provider store={setupStore()}>
            <ApiProvider api={apiSlice}>
                <App />
            </ApiProvider>
        </Provider>
    </React.StrictMode>,
);

serviceWorkerRegistration.register();
