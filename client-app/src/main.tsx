import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App/Layout/App.tsx'
import 'semantic-ui-css/semantic.min.css'
import './App/Layout/styles.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
