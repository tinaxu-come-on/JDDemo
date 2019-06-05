import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './index.css'

const imgs = [
    {
        name:'icon-home',
        text:'首页',
        link:'/home'
    },
    {
        name:'icon-category',
        text:'分类',
        link:'/category'
    },
    {
        name:'icon-shop',
        text:'购物车',
        link:'/car'
    },
    {
        name:'icon-user',
        text:'用户',
        link:'user'
    }
]
export default class Tabbar extends Component {
    constructor(props){
        super(props)
        this.state= {
        }
    }

    render() {
        const path = window.location.href //使用location.herf 报错 no-restricted-globals 
        return (
            <div className='tabbar-container'>
           {
              imgs.map((img,index) => (
                  <Link key={index} to ={img.link} className = {'tabbar-item ' +(path.indexOf(img.link) >-1 ? 'active':' ')}>
                    <div className ={'iconfont '+img.name} ></div>
                    <div>{img.text}</div>
                  </Link>
                
              ))
          } 
            </div>
        )
    }
}

