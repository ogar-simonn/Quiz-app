import React, { StrictMode  } from 'react';
import { createRoot } from 'react-dom/client';
import {useContext} from "react"

import App from './App';
import {AppProvider, AppContext} from "./context";
const rootElement = document.getElementById('root');
const root = createRoot(rootElement)


root.render(
  <StrictMode>
    <AppProvider>
    <App />
    </AppProvider>
  </StrictMode>
);
