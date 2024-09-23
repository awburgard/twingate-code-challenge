import { Component, ReactNode } from 'react'

type ErrorBoundaryProps = {
  children: ReactNode
  fallback: ReactNode
}

type ErrorBoundaryState = {
  hasError: boolean
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      // Render fallback UI when an error occurs
      return this.props.fallback
    }

    // Render the children when no error occurs
    return this.props.children
  }
}

export default ErrorBoundary
