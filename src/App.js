// eslint-disable-next-line no-use-before-define
import React, { Component } from 'react'
import classes from './App.module.scss'
import { Route, NavLink, Routes } from 'react-router-dom'
import About from './About/About'
import Cars from './Cars/Cars'

class App extends Component {
  render () {
    return (
            <div>
                <nav className={classes.nav}>
                            <NavLink
                                to="/"
                                exact="true"
                                activeclassname={'wfm-active'}
                            >Home</NavLink>
                            <NavLink to="/about" activestyle={{
                              color: 'blue'
                            }}>About</NavLink>
                            <NavLink to={{
                              pathname: '/cars'
                            }}>Cars</NavLink>
                </nav>

                <hr/>
                <Routes>
                    {/* localhost:3000 */}
                    <Route path="/" exact render={() => <h1>Home Page</h1>} />
                    <Route path="/about" component={<About />} />
                    <Route path="/cars" component={<Cars />} />
                </Routes>
            </div>
    )
  }
}

export default App
