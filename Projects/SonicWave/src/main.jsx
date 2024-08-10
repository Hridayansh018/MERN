import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './output.css'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <App style="bg-gradient-to-r from-cyan-500 to-blue-500"/>
  </StrictMode>,
)
