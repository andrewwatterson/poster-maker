import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import InterpretationPoster from './InterpretationPoster.jsx'
import InterpretationPoster from './InterpretationPoster.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InterpretationPoster />
  </StrictMode>,
)
