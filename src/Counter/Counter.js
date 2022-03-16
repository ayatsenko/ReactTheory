// eslint-disable-next-line no-use-before-define
import React, { Component } from 'react'

export default class Counter extends Component {
  state = {
    counter: 0
  }

  addCounter = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render () {
    // return (
    //          <div>
    //              <h2>Counter {this.state.counter}</h2>
    //              <button onClick={this.addCounter}>+</button>
    //              <button onClick={() => this.setState({ counter: this.state.counter - 1 })}>-</button>
    //          </div>
    // )

    return [
      // eslint-disable-next-line react/jsx-key
         <h2 key={'1'}>Counter {this.state.counter}</h2>,
         // eslint-disable-next-line react/jsx-key
         <button key={'2'} onClick={this.addCounter}>+</button>,
         // eslint-disable-next-line react/jsx-key
         <button key={'3'} onClick={() => this.setState({ counter: this.state.counter - 1 })}>-</button>
    ]
  }
}
