// eslint-disable-next-line no-use-before-define,no-unused-vars
import React, { Component } from 'react'
// import Radium from 'radium'
import './Car.css'

class Car extends Component {
  // // eslint-disable-next-line react/no-deprecated
  // componentWillReceiveProps (nextProps, nextContext) {
  //   console.log('Car componentWillReceiveProps', nextProps, nextContext)
  // }
  //
  // shouldComponentUpdate (nextProps, nextState, nextContext) {
  //   console.log('Car shouldComponentUpdate', nextProps, nextState, nextContext)
  //   // eslint-disable-next-line react/prop-types
  //   return nextProps.name.trim() !== this.props.name
  // }
  //
  // // eslint-disable-next-line react/no-deprecated
  // componentWillUpdate (nextProps, nextState, nextContext) {
  //   console.log('Car componentWillUpdate', nextProps, nextState, nextContext)
  // }
  //
  // static getDerivedStateFromProps (nextProps, prevState) {
  //   console.log('Car getDerivedStateFromProps', nextProps, nextProps, prevState)
  //
  //   return {
  //     prevState
  //   }
  // }
  //
  // componentDidUpdate (prevProps, prevState, snapshot) {
  //   console.log('Car componentDidUpdate', prevProps, prevState)
  // }
  //
  // getSnapshotBeforeUpdate (prevProps, prevState) {
  //   console.log('Car getSnapshotBeforeUpdate', prevProps, prevState)
  // }
  //
  // componentWillUnmount () {
  //   console.log('Car componentWillUnmount')
  // }

  render () {
    console.log('Car render')

    const inputClasses = ['input']

    // eslint-disable-next-line react/prop-types
    if (this.props.name !== '') {
      inputClasses.push('green')
    } else {
      inputClasses.push('red')
    }

    // eslint-disable-next-line react/prop-types
    if (this.props.name.length > 4) {
      inputClasses.push('bold')
    }

    // eslint-disable-next-line no-unused-vars
    const carStyle = {
      border: '1px solid #ccc',
      boxShadow: '0 4px 5px 0 rgba(0, 0, 0, .14)',
      ':hover': {
        border: '1px solid #aaa',
        boxShadow: '0 4px 15px 0 rgba(0, 0, 0, .25)',
        cursor: 'pointer'
      }
    }

    return (
            <div className="Car" style={carStyle}>
                {/* eslint-disable-next-line react/prop-types */}
                <h3>Car name: {this.props.name}</h3>
                {/* eslint-disable-next-line react/prop-types */}
                <p>Year: <strong>{this.props.year}</strong></p>
                {/* eslint-disable-next-line react/prop-types */}
                <input type="text" onChange={this.props.onChangeName} value={this.props.name} className={inputClasses.join(' ')}/>
                {/* eslint-disable-next-line react/prop-types */}
                <button onClick={this.props.onDelete}>Delete</button>
            </div>
    )
  }
}

export default Car
