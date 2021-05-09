import React, { ReactNode } from 'react'

interface StateFromError {
  hasErrored: boolean
}

class ErrorBoundary extends React.Component {
  state = {
    hasErrored: false,
  }
  static getDerivedStateFromError(error: Error): StateFromError {
    console.log(error.message)
    return { hasErrored: true }
  }

  componentDidCatch(error: Error): void {
    console.log(error)
  }

  render(): ReactNode {
    if (this.state.hasErrored) {
      return <div>Something went wrong!</div>
    }
    return this.props.children
  }
}

export default ErrorBoundary
