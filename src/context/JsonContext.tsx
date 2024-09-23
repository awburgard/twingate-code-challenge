// JsonContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react'
import Ajv, { JSONSchemaType } from 'ajv'
import { Content } from '../types'

// Define the context type
interface JsonContextType {
  json: string
  setJson: (value: string) => void
  isValid: boolean
}

// Create the context
const JsonContext = createContext<JsonContextType | undefined>(undefined)

const schema: JSONSchemaType<Content[]> = {
  type: 'array',
  items: {
    anyOf: [
      {
        type: 'object',
        properties: {
          type: { type: 'string', enum: ['hero'] },
          imageURI: { type: 'string' },
        },
        required: ['type', 'imageURI'],
        additionalProperties: false,
      },
      {
        type: 'object',
        properties: {
          type: { type: 'string', enum: ['image-text'] },
          imageURI: { type: 'string' },
          text: { type: 'string' },
          title: { type: 'string', nullable: true },
          leftToRight: { type: 'boolean', nullable: true, default: true },
        },
        required: ['type', 'imageURI', 'text'],
        additionalProperties: false,
      },
      {
        type: 'object',
        properties: {
          type: { type: 'string', enum: ['data'] },
          url: { type: 'string' },
        },
        required: ['type', 'url'],
        additionalProperties: false,
      },
    ],
  },
}

export const JsonProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [json, setJson] = useState('')
  const [isValid, setIsValid] = useState(false)

  const validateJson = (jsonString: string) => {
    const ajv = new Ajv()
    const validate = ajv.compile(schema)

    try {
      const data = JSON.parse(jsonString)
      const valid = validate(data)
      console.log({ valid })
      setIsValid(valid)
    } catch {
      setIsValid(false)
    }
  }

  const handleSetJson = (value: string) => {
    setJson(value)
    validateJson(value)
  }

  return (
    <JsonContext.Provider value={{ json, setJson: handleSetJson, isValid }}>
      {children}
    </JsonContext.Provider>
  )
}

// Custom hook to use the JSON context
export const useJsonContext = () => {
  const context = useContext(JsonContext)
  if (context === undefined) {
    throw new Error('useJsonContext must be used within a JsonProvider')
  }
  return context
}
