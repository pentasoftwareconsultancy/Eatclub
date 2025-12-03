import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import ErrorBoundary from './components/layout/ErrorBoundary'
import { LocationProvider } from './context/LocationContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <LocationProvider>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </LocationProvider>
    </BrowserRouter>
  </StrictMode>,
)
