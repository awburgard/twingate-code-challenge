import './index.css'
import { StrictMode, Fragment } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Fragment>
      <CssBaseline />
      <Container maxWidth='lg'>
        <App />
      </Container>
    </Fragment>
  </StrictMode>
)
