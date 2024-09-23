import Grid from '@mui/material/Grid2'
import { JsonProvider } from './context/JsonContext'
import { JsonInput } from './features/Editor'
import { LandingPageContainer } from './features/LandingPage'

function App() {
  return (
    <JsonProvider>
      <Grid container spacing={2}>
        <Grid size={6}>
          <JsonInput />
        </Grid>
        <Grid size={6}>
          <LandingPageContainer />
        </Grid>
      </Grid>
    </JsonProvider>
  )
}

export default App
