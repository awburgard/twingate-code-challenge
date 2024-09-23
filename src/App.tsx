import './App.css'
import { JsonProvider } from './context/JsonContext'
import { JsonInput } from './features/Editor'
import { LandingPageContainer } from './features/LandingPage'

function App() {
  return (
    <JsonProvider>
      <div
        style={{
          display: 'flex',
          alignContent: 'center',
          alignItems: 'center',
        }}
      >
        <JsonInput />
        <LandingPageContainer />
      </div>
    </JsonProvider>
  )
}

export default App
