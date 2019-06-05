index.js 利用高阶组件进行优化

高阶组件：

1.实现一个普通组件
2.将普通组件使用函数包裹

index.1.js 优化前的代码

home.js ,category.js,car.js,user.js 每个页面都引入Tabbar
import React, { Component } from 'react'
import Tabbar from '../components/tabbar';

export default class home extends Component {
    render() {
        return (
            <div>
                User
                <Tabbar/>
            </div>
        )
    }
}
