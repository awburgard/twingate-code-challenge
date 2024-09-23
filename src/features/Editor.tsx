// App.tsx
import React from 'react'
import { useJsonContext } from '../context/JsonContext'

export const JsonInput: React.FC = () => {
  const { json, setJson, isValid } = useJsonContext()

  return (
    <div>
      <textarea
        value={json}
        onChange={(e) => setJson(e.target.value)}
        rows={10}
        cols={30}
        placeholder='Type your JSON here...'
      />
      <p>{isValid ? 'JSON is valid!' : 'JSON is invalid.'}</p>
    </div>
  )
}
