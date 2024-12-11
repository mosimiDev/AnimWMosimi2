import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CharacterAnimationsProvider } from './contexts/CharactersAnimations.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CharacterAnimationsProvider>
      <App />
    </CharacterAnimationsProvider>
  </StrictMode>
);
