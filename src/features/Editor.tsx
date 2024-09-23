import { useJsonContext } from '../context/JsonContext'

export const JsonInput = () => {
  const { json, setJson } = useJsonContext()

  return (
    <div>
      <textarea
        value={json}
        onChange={(e) => setJson(e.target.value)}
        rows={10}
        cols={30}
        placeholder='Type your JSON here...'
      />
    </div>
  )
}
