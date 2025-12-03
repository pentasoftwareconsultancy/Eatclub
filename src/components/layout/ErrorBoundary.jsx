import React from 'react'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { error: null, info: null }
  }

  componentDidCatch(error, info) {
    this.setState({ error, info })
    // also log to console
    console.error('ErrorBoundary caught:', error, info)
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: 24 }}>
          <h2>Something went wrong</h2>
          <pre style={{ whiteSpace: 'pre-wrap', background: '#fff', padding: 12, borderRadius: 6, color: '#900' }}>
            {String(this.state.error && this.state.error.toString())}
            {this.state.info && '\n' + (this.state.info.componentStack || '')}
          </pre>
        </div>
      )
    }
    return this.props.children
  }
}
