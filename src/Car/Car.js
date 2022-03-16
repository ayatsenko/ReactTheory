// eslint-disable-next-line no-use-before-define,no-unused-vars
import React, { Component } from 'react'
import './Car.css'
import PropTypes from 'prop-types'
import withClass from '../Hoc/withClass'

class Car extends Component {
  constructor (props) {
    super(props)
    this.inputRef = React.createRef()
  }

  componentDidMount () {
    if (this.props.index === 1) {
      this.inputRef.current.focus()
    }
  }

  render () {
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

    return (
            <React.Fragment>
                {/* eslint-disable-next-line react/prop-types */}
                <h3>Car name: {this.props.name}</h3>
                {/* eslint-disable-next-line react/prop-types */}
                <p>Year: <strong>{this.props.year}</strong></p>
                <input
                    ref={this.inputRef}
                    type="text"
                    onChange={this.props.onChangeName}
                    value={this.props.name}
                    className={inputClasses.join(' ')}/>
                {/* eslint-disable-next-line react/prop-types */}
                <button onClick={this.props.onDelete}>Delete</button>
            </React.Fragment>
    )
  }
}

Car.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.number,
  index: PropTypes.number,
  onChangeName: PropTypes.func,
  onDelete: PropTypes.func
}
export default withClass(Car, 'Car')
