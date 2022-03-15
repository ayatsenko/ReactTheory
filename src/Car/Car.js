// eslint-disable-next-line no-use-before-define,no-unused-vars
import React, { Component } from 'react'
import Radium from 'radium'
import './Car.css'

const Car = props => {
  const inputClasses = ['input']

  // eslint-disable-next-line react/prop-types
  if (props.name !== '') {
    inputClasses.push('green')
  } else {
    inputClasses.push('red')
  }

  // eslint-disable-next-line react/prop-types
  if (props.name.length > 4) {
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
            <h3>Car name: {props.name}</h3>
            {/* eslint-disable-next-line react/prop-types */}
            <p>Year: <strong>{props.year}</strong></p>
            {/* eslint-disable-next-line react/prop-types */}
            <input type="text" onChange={props.onChangeName} value={props.name} className={inputClasses.join(' ')}/>
            {/* eslint-disable-next-line react/prop-types */}
            <button onClick={props.onDelete}>Delete</button>
        </div>
  )
}

export default Radium(Car)
