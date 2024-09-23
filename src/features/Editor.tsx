import { useJsonContext } from '../context/JsonContext'
import TextField from '@mui/material/TextField'

export const JsonInput = () => {
  const { json, setJson } = useJsonContext()

  return (
    <TextField
      type='textarea'
      value={json}
      onChange={(e) => setJson(e.target.value)}
      multiline
      placeholder='Type your JSON here...'
    />
  )
}
