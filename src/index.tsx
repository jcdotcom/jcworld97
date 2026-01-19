import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { isMobile } from 'react-device-detect';
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App onMobile = {isMobile || window.innerWidth < window.innerHeight} />
  </StrictMode>,
)