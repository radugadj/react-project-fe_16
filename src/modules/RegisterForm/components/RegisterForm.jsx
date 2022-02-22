import React, { Component } from 'react';
// import { Form, Icon, Input } from "antd";
import { Link } from 'react-router-dom';
import { InfoCircleTwoTone } from '@ant-design/icons';

import { Button, Block } from '../../../components';

class RegisterForm extends Component {
    render() {
      const success = false;
        return (
          <div>
            <div className="auth__top">
              <h2>Регистрация</h2>
              <p>Для входа в чат, вам необходимо зарегестрироваться</p>
            </div>
            <Block>
              {!success ? (
              <Form onSubmit={this.handleSubmit} className="login-form">
              <Form.Item validation="success" hasFeedback>
                <Input 
                prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25'}}/>} 
                size="large"
                placeholder="Ваше Имя" 
                />
              </Form.Item>
              <Form.Item validation="success" hasFeedback>
                <Input 
                prefix={<Icon type="email" style={{color: 'rgba(0,0,0,.25'}}/>} 
                size="large"
                placeholder="E-mail" 
                />
              </Form.Item>
              <Form.Item>
                <Input
                  prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25'}}/>}
                  size="large"
                  type="password"
                  placeholder="Пароль"
                />
              </Form.Item>
              <Form.Item>
                <Input
                  prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25'}}/>}
                  size="large"
                  type="password"
                  placeholder="Повторите пароль"
                />
              </Form.Item>
              <Form.Item>
                <Button type="primary" size="large">
                Зарегестрироваться
                </Button>
              </Form.Item>
              <Link className="auth__register-link" to="/login">
                Войти в аккаунт
              </Link>
            </Form>
            ) : (
            <div className="auth_success-block">
              <div><InfoCircleTwoTone /></div>
            </div>)}
              
          </Block>
          </div>
            
        );
    }    
}

export default RegisterForm;