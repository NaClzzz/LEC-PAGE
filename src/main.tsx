import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ClickSpark from './components/ClickSpark'
import ScrollSnap from './components/LenisScroll'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ScrollSnap>
      <ClickSpark sparkColor="#5227FF" sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
        <App />
      </ClickSpark>
    </ScrollSnap>
  </StrictMode>,
)
