import React, { Component } from "react"
import Tabbar from "../components/tabbar"
import {
    Carousel,
    Input,
    Icon,
    Row,
    Col,
    message,
    List,
    Avatar,
    Spin
} from "antd"
import { Link } from "react-router-dom"
import InfiniteScroll from "react-infinite-scroller" //实现滚动自动加载列表
import reqwest from "reqwest"
import "./home.css"

const fakeDataUrl = "/mock/orders.json"

class Home extends Component {
    state = {
        data: [],
        loading: false,
        hasMore: true,
        className: ""
    }

    //监听滚动大于120的时候，给搜索框添加一个红色背景
    handleScroll() {
        if (document.documentElement.scrollTop > 120) {
            this.setState({
                className: "main-page"
            })
        } else {
            this.setState({
                className: ""
            })
        }
    }

    //在第一次渲染后调用，只在客户端
    componentDidMount() {
        window.onscroll = () => this.handleScroll() //监听滚动事件

        this.fetchData(res => {
            this.setState({
                data: res
            })
        })
    }

    fetchData = callback => {
        reqwest({
            url: fakeDataUrl,
            type: "json",
            method: "get",
            contentType: "application/json",
            success: res => {
                callback(res)
            }
        })
    }
    componentWillUnmount() {
        //在组件从 DOM 中移除之前立刻被调用
        this.setState = (data, callback) => {
            return
        }
    }
    //InfiniteScroll 外层div 必须设置高度，不然不会调用loadMore加载方法
    handleInfiniteOnLoad = () => {
        let data = this.state.data
        this.setState({
            loading: true
        })
        if (data.length > 40) {
            message.warning("所有的数据加载完成")
            this.setState({
                hasMore: false,
                loading: false
            })
            return
        }
        this.fetchData(res => {
            data = data.concat(res)
            this.setState({
                data,
                loading: false
            })
        })
    }

    render() {
        return (
            <div>
                <div className={this.state.className}>
                    <Row className="row-title">
                        <Col span={3}>
                            <Icon type="menu-fold" />
                        </Col>
                        <Col span={18}>
                            <Input
                                placeholder="Enter your keyword"
                                prefix={
                                    <Icon
                                        type="search"
                                        style={{ color: "rgba(0,0,0,.25)" }}
                                    />
                                }
                            />
                        </Col>
                        <Col span={3}>
                            <Link to="/login" className="login">
                                {" "}
                                登录
                            </Link>
                        </Col>
                    </Row>
                </div>

                <Carousel effect="fade" autoplay className="carousel-content">
                    {/* <img src = '../static/carouserl1.png'/> react src里面引入图片的几种方式es6不支持在<img />标签内直接写图片的路径 用import和require */}
                    <img
                        src={require("../static/carouserl12.png")}
                        alt="carouserl"
                        className="carouserl-img"
                    />

                    <img
                        src={require("../static/carouserl21.png")}
                        alt="carouserl"
                        className="carouserl-img"
                    />
                    <img
                        src={require("../static/carouserl31.png")}
                        alt="carouserl"
                        className="carouserl-img"
                    />
                    <img
                        src={require("../static/carouserl41.png")}
                        alt="carouserl"
                        className="carouserl-img"
                    />
                </Carousel>
                <Carousel className="carousel-block">
                    <div>
                        <a className="carouserl-a" href="/test">
                            <img
                                src={require("../static/1.png.webp")}
                                alt="carouserl"
                            />
                            <span>京东超市</span>
                        </a>
                        <a className="carouserl-a" href="/test">
                            <img
                                src={require("../static/2.png.webp")}
                                alt="carouserl"
                            />
                            <span>数码电器</span>
                        </a>
                        <a className="carouserl-a" href="/test">
                            <img
                                src={require("../static/3.png.webp")}
                                alt="carouserl"
                            />
                            <span>京东服饰</span>
                        </a>
                        <a className="carouserl-a" href="/test">
                            <img
                                src={require("../static/4.png.webp")}
                                alt="carouserl"
                            />
                            <span>京东生鲜</span>
                        </a>
                        <a className="carouserl-a" href="/test">
                            <img
                                src={require("../static/5.png.webp")}
                                alt="carouserl"
                            />
                            <span>京东到家</span>
                        </a>
                        <a className="carouserl-a" href="/test">
                            <img
                                src={require("../static/6.png.webp")}
                                alt="carouserl"
                            />
                            <span>充值缴费</span>
                        </a>
                        <a className="carouserl-a" href="/test">
                            <img
                                src={require("../static/7.png.webp")}
                                alt="carouserl"
                            />
                            <span>充值缴费</span>
                        </a>
                        <a className="carouserl-a" href="/test">
                            <img
                                src={require("../static/8.png.webp")}
                                alt="carouserl"
                            />
                            <span>充值缴费</span>
                        </a>
                        <a className="carouserl-a" href="/test">
                            <img
                                src={require("../static/9.png.webp")}
                                alt="carouserl"
                            />
                            <span>充值缴费</span>
                        </a>
                        <a className="carouserl-a" href="/test">
                            <img
                                src={require("../static/10.png.webp")}
                                alt="carouserl"
                            />
                            <span>充值缴费</span>
                        </a>
                    </div>
                    <div>
                        <a className="carouserl-a" href="/test">
                            <img
                                src={require("../static/6.png.webp")}
                                alt="carouserl"
                            />
                            <span>充值缴费</span>
                        </a>
                        <a className="carouserl-a" href="/test">
                            <img
                                src={require("../static/11.png.webp")}
                                alt="carouserl"
                            />
                            <span>充值缴费</span>
                        </a>
                        <a className="carouserl-a" href="/test">
                            <img
                                src={require("../static/8.png.webp")}
                                alt="carouserl"
                            />
                            <span>充值缴费</span>
                        </a>
                        <a className="carouserl-a" href="/test">
                            <img
                                src={require("../static/3.png.webp")}
                                alt="carouserl"
                            />
                            <span>京东服饰</span>
                        </a>
                        <a className="carouserl-a" href="/test">
                            <img
                                src={require("../static/4.png.webp")}
                                alt="carouserl"
                            />
                            <span>京东生鲜</span>
                        </a>
                        <a className="carouserl-a" href="/test">
                            <img
                                src={require("../static/5.png.webp")}
                                alt="carouserl"
                            />
                            <span>京东到家</span>
                        </a>
                        <a className="carouserl-a" href="/test">
                            <img
                                src={require("../static/3.png.webp")}
                                alt="carouserl"
                            />
                            <span>京东服饰</span>
                        </a>
                        <a className="carouserl-a" href="/test">
                            <img
                                src={require("../static/4.png.webp")}
                                alt="carouserl"
                            />
                            <span>京东生鲜</span>
                        </a>
                        <a className="carouserl-a" href="/test">
                            <img
                                src={require("../static/5.png.webp")}
                                alt="carouserl"
                            />
                            <span>京东到家</span>
                        </a>
                        <a className="carouserl-a" href="/test">
                            <img
                                src={require("../static/5.png.webp")}
                                alt="carouserl"
                            />
                            <span>京东到家</span>
                        </a>
                    </div>
                </Carousel>
                <div className="list-container">
                    <InfiniteScroll
                        initialLoad={false}
                        pageStart={0}
                        loadMore={this.handleInfiniteOnLoad}
                        hasMore={!this.state.loading && this.state.hasMore}
                        useWindow={false}
                    >
                        <List
                            dataSource={this.state.data}
                            renderItem={(item, index) => (
                                <List.Item key={item.index}>
                                    <List.Item.Meta
                                        avatar={
                                            <Avatar
                                                src={item.picture}
                                                size="large"
                                            />
                                        }
                                        title={
                                            <a href="https://ant.design">
                                                {item.shop}
                                            </a>
                                        }
                                        description={item.product}
                                    />
                                </List.Item>
                            )}
                        >
                            {this.state.loading && this.state.hasMore && (
                                <div className="demo-loading-container">
                                    <Spin />
                                </div>
                            )}
                        </List>
                    </InfiniteScroll>
                </div>
            </div>
        )
    }
}

export default Tabbar(Home)
