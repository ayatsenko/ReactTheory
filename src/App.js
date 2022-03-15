// eslint-disable-next-line no-use-before-define
import React, { Component } from 'react'
import './App.css'
import Car from './Car/Car'

class App extends Component {
  state = {
    cars: [
      { name: 'Ford', year: '2018' },
      { name: 'Audi', year: '2016' },
      { name: 'Mazda', year: '2010' }
    ],
    pageTitle: 'React components',
    showCars: false
  }

  onChangeName (name, index) {
    const car = this.state.cars[index]
    car.name = name
    // eslint-disable-next-line no-unused-vars
    const cars = [...this.state.cars]
    cars[index] = car
    this.setState({
      cars
    })
  }

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }

  deleteHandler (index) {
    const cars = this.state.cars.concat()
    cars.splice(index, 1)
    this.setState({ cars })
  }

  render () {
    const divStyle = {
      textAlign: 'center'
    }

    let cars = null

    if (this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
        return (
                // eslint-disable-next-line react/jsx-key
                <Car
                    key = {index}
                    name={car.name}
                    year = {car.year}
                    onDelete={this.deleteHandler.bind(this, index)}
                    onChangeName = { event => this.onChangeName(event.target.value, index)}
                >
                </Car>
        )
      })
    }

    return (
          // eslint-disable-next-line react/react-in-jsx-scope
          <div style={divStyle}>
              <h1 style={{ color: 'blue', fontSize: '50px' }}>{this.state.pageTitle}</h1>

              <button
                  onClick={this.toggleCarsHandler}>
                Toggle cars</button>

              {/* eslint-disable-next-line array-callback-return */}
              { cars }

          </div>
    )
  }
}

export default App
