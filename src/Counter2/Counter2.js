// eslint-disable-next-line no-use-before-define
import React, { Component } from 'react'
import { ClickedContext } from '../App'

// eslint-disable-next-line react/display-name
export default class Counter2 extends Component {
  render () {
    return (
            <div style={{
              border: '1px solid #ccc',
              width: 200,
              margin: '0 auto'
            }}>
                <h3>Counter2</h3>
                {/* eslint-disable-next-line react/prop-types */}
                <ClickedContext.Consumer>
                    {clicked => clicked ? <p>Clicked</p> : null}
                </ClickedContext.Consumer>
            </div>
    )
  }
}
