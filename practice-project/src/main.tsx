import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Tailwind CSS
import '@/assets/styles/tailwind.css'
//组件样式
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
