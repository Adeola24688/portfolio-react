import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, info: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, info) {
    this.setState({ error, info })
    // You could also log to an external service here
    // console.error(error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 40, color: '#fff', background: '#111', minHeight: '100vh' }}>
          <h1 style={{ color: '#f97316' }}>Something went wrong</h1>
          <pre style={{ whiteSpace: 'pre-wrap', color: '#fff' }}>
            {this.state.error && this.state.error.toString()}
            {this.state.info && '\n' + (this.state.info.componentStack || '')}
          </pre>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
