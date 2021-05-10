import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom'

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
      return (
        <div className="error">
          <div className="msg">Something went wrong!</div>
          <Link className="option" to="/">
            Return to Home
          </Link>
        </div>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
