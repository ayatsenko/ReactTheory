// eslint-disable-next-line no-use-before-define,no-unused-vars
import React, { Component } from 'react'

// eslint-disable-next-line react/display-name
export default (props) => (
    <div style={{
      border: '1px solid #ccc',
      marginBottom: '10px',
      display: 'block',
      padding: '10px'
    }}>
        {/* eslint-disable-next-line react/prop-types */}
        <h3>Car name: { props.name }</h3>
        {/* eslint-disable-next-line react/prop-types */}
        <p>Year: <strong>{ props.year }</strong></p>
        {/* eslint-disable-next-line react/prop-types */}
        <input type="text" onChange={props.onChangeName} value={ props.name }/>
        {/* eslint-disable-next-line react/prop-types */}
         <button onClick={props.onDelete}>Delete</button>
    </div>
)
