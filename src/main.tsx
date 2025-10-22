/*
 * Application entry point
 *
 * renders the root App component into the DOM.
 * uses react StrictMode for development warnings and best practices.
*/

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
