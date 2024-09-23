import './App.css'
import { JsonProvider } from './context/JsonContext'
import { JsonInput } from './features/Editor'
import { LandingPageContainer } from './features/LandingPage'

function App() {
  return (
    <JsonProvider>
      <JsonInput />
      <LandingPageContainer />
    </JsonProvider>
  )
}

export default App
