import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ProductProvider } from './ContextApi/ConextApi.jsx'
import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById('root')).render(
  <HelmetProvider >
    <ProductProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </ProductProvider>
  </HelmetProvider>,
)
