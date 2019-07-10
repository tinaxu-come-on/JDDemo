index.js 利用高阶组件进行优化

高阶组件：

1.实现一个普通组件
2.将普通组件使用函数包裹


在开始讲述高阶组件前，我们先来回顾高阶函数的定义：接收函数作为输入，或者输出另一个函数的一类函数，被称作高阶函数。对于高阶组件，它描述的便是接受React组件作为输入，输出一个新的React组件的组件。
map, filter, reduce

const arr1 = [1,2,3]
const arr2 =[]
for (let i = 0; i <arr1.length; i ++){
    arr2.push(arr1[i] *2)
}

console.log(arr2)


使用高阶函数后 
const arr1 = [1,2,3]
const arr2 = arr1.map( item => item *2)
console.log(arr2)

更通俗地描述为，高阶组件通过包裹（wrapped）被传入的React组件，经过一系列处理，最终返回一个相对增强（enhanced）的React组件，供其他组件调用。


index.1.js 优化前的代码

home.js ,category.js,car.js,user.js 每个页面都引入Tabbar
import React, { Component } from 'react'
import Tabbar from '../components/tabbar';

export default class home extends Component {
    render() {
        return (
            <div>
                this is my home page
                <Tabbar/>
            </div>
        )
    }
}
