import React, { Component } from 'react'
import Tabbar from '../components/tabbar';

class User extends Component {
    render() {
        return (
            <div>
                <img
                        src={require("../static/user.png")}
                        alt="carouserl" style={{width:'100%'}}/>
            </div>
        )
    }
}

export default Tabbar(User)
