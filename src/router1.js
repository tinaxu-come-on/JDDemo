import React from 'react'
import {BrowserRouter, Route,Switch} from 'react-router-dom'
import Home from './pages/home'
import Category from './pages/category'
import Car from './pages/car'
import User from './pages/user'
import Login from './pages/login.js'


export default ()=>(
    <BrowserRouter basename={process.env.REACT_APP_ROUTER_BASE || ''}>
    <Switch>
        <Route path ='/jd/home' component ={Home}></Route>
        <Route path ='/jd/category' component ={Category}></Route>
        <Route path ='/jd/car' component ={Car}></Route>
        <Route path ='/jd/user' component ={User}></Route>
        <Route path ='/jd/login' component ={Login}></Route>
    </Switch>
    </BrowserRouter>
)