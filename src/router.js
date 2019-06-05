import React from 'react'
import {HashRouter as Router, Route,Switch} from 'react-router-dom'
import Home from './pages/home'
import Category from './pages/category'
import Car from './pages/car'
import User from './pages/user'
import Login from './pages/login.js'


export default ()=>(
    <Router>
    <Switch>
        <Route path ='/home' component ={Home}></Route>
        <Route path ='/category' component ={Category}></Route>
        <Route path ='/car' component ={Car}></Route>
        <Route path ='/user' component ={User}></Route>
        <Route path ='/login' component ={Login}></Route>
    </Switch>
    </Router>
)