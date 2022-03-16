// eslint-disable-next-line no-use-before-define
import React, { Component } from 'react'

export default class ErrorBoundarys extends Component {
  state = {
    hasError: false
  }

  // eslint-disable-next-line node/handle-callback-err
  componentDidCatch (error, errorInfo) {
    this.setState({ hasError: true })
  }

  render () {
    if (this.state.hasError) {
      return <h1 style={{ color: 'red' }}>Something went wrong</h1>
    }

    // eslint-disable-next-line react/prop-types
    return this.props.children
  }
}
