import React from 'react'
import ReactDOM from 'react-dom'
import {Route} from 'react-router-dom'
import {Routes} from 'react-router-dom'
import {BrowserRouter} from 'react-router-dom'
import {Router} from 'react-router-dom'
import {RouterProvider} from 'react-router-dom'
import Home from './Components/Home'

function App() {
  return <Home />
}

ReactDOM.render(<App />, document.getElementById('root'))
