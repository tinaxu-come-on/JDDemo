import React, { Component } from 'react'
import Tabbar from '../components/tabbar';

class Category extends Component {
    render() {
        return (
            <div>
                <img
                        src={require("../static/category.png")}
                        alt="carouserl" style={{width:'100%'}}/>
            </div>
        )
    }
}

export default Tabbar(Category)
