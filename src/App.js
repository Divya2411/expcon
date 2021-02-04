import React from 'react'
import Home from './Home'
import Pracing from './Pracing'
import Contact from './Contact'
import Navbar from './Navbar.jsx'
import './index.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import {Switch, Route, Redirect, BrowserRouter } from 'react-router-dom'
 
const App = () => {
  return(
    <BrowserRouter>
    <Navbar/>
    <Switch>
      <Route exact path = '/' component = {Home}/>
      <Route exact path = '/pracing' component = {Pracing}/>
      <Route exact path = '/contact' component = {Contact}/>
      <Redirect to = '/'/>
    </Switch>
    </BrowserRouter>
  )
}

export default App;
