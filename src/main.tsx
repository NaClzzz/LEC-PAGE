import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import ClickSpark from './components/ClickSpark'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ClickSpark sparkColor="#5227FF" sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
        <App />
      </ClickSpark>
    </BrowserRouter>
  </StrictMode>,
)
