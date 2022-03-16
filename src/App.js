// eslint-disable-next-line no-use-before-define
import React, { Component } from 'react'
import './App.css'
import Car from './Car/Car'
import ErrorBoundarys from './ErrorBoundary/ErrorBoundarys'
import Counter from './Counter/Counter'

// eslint-disable-next-line no-unused-vars
export const ClickedContext = React.createContext(false)

class App extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor (props) {
    // console.log('App constructor')
    super(props)

    this.state = {
      clicked: false,
      cars: [
        { name: 'Ford', year: 2018 },
        { name: 'Audi', year: 2016 },
        { name: 'Mazda', year: 2010 }
      ],
      pageTitle: 'React components',
      showCars: false
    }
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

  // eslint-disable-next-line react/no-deprecated
  componentWillMount () {
    // console.log('App componentWillMount')
  }

  componentDidMount () {
    // console.log('App componentDidMount')
  }

  render () {
    // console.log('App render')

    const divStyle = {
      textAlign: 'center'
    }

    let cars = null

    if (this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
        return (
            <ErrorBoundarys
                key = {index}
            >
                <Car
                    name = {car.name}
                    year = {car.year}
                    index = {index}
                    onDelete = {this.deleteHandler.bind(this, index)}
                    onChangeName = { event => this.onChangeName(event.target.value, index)}
                >
                </Car>
            </ErrorBoundarys>
        )
      })
    }

    return (
          // eslint-disable-next-line react/react-in-jsx-scope
          <div style={divStyle}>
              {/* <h1 style={{ color: 'blue', fontSize: '50px' }}>{this.state.pageTitle}</h1> */}
            {/* eslint-disable-next-line react/prop-types */}
              <h1>{this.props.title}</h1>

            <ClickedContext.Provider value={this.state.clicked}>
              <Counter />
            </ClickedContext.Provider>
              <hr />
              <button
                  style={{ marginTop: '20px' }}
                  onClick={this.toggleCarsHandler}>
                Toggle cars</button>

            <button onClick={() => this.setState({ clicked: true })}>Change clicked</button>

              {/* eslint-disable-next-line array-callback-return */}
              <div style={{
                width: 400,
                margin: 'auto',
                paddingTop: '20px'
              }}>
                { cars }
              </div>
          </div>
    )
  }
}

export default App
