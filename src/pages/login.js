import React, { Component } from 'react'
import { Form, Icon, Input, Button,Divider,Row, Col  } from 'antd';
import {Link} from 'react-router-dom'
import "./login.css"

class Login extends Component {
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className ="login-wrapper">
                <div className ="login-title"><Link to ='/jd/home' className="back-icon"> <Icon type="left" /></Link> 京东登录</div>
                 <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item hasFeedback>  
        {/* hasFeedback：用于给输入框添加反馈图标。 输入合法，显示一个绿色的 √ */}
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="用户名/邮箱/已验证手机"
            />,
          )}
        </Form.Item>
        <Form.Item hasFeedback>
        <Row><Col span={17}>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input.Password
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="请输入密码"
            />,
          )}
          </Col><Col span={7}><Divider type="vertical" /> 忘记密码</Col></Row>
          
        </Form.Item>
        <Form.Item>
        {/* block 属性将使按钮适合其父宽度 */}
        <Button htmlType="submit" className="login-form-button login-button" block>
            登录
          </Button>
        </Form.Item>
        <Form.Item>
        <Button htmlType="submit" className="login-form-onestep login-button" block>
            一键登录
          </Button>
        </Form.Item>
        </Form>
            </div>
        )
    }
}

export default Form.create()(Login) //必须写Form create()(Login) 不然报错TypeError: Cannot read property 'getFieldDecorator' of undefined
