import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyle } from './styles/global';
import AppRoutes from './Routes';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <GlobalStyle />
    <AppRoutes />
  </StrictMode>,
)
