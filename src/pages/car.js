import React, { Component } from 'react'
import Tabbar from '../components/tabbar';

class Car extends Component {
    render() {
        return (
            <div>
                 <img
                        src={require("../static/car.png")}
                        alt="carouserl" style={{width:'100%'}}/>
            </div>
        )
    }
}

export default Tabbar(Car)
