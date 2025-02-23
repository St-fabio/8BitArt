import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ReloadProvider } from './ReloadContext.jsx'

createRoot(document.getElementById('root')).render(
  <ReloadProvider>
    <App />
  </ReloadProvider>,
)
