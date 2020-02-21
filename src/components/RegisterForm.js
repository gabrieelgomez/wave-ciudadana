import React from 'react';
import 'antd/dist/antd.css';
import { Form, Icon, Input, Button } from 'antd';
import styled from 'styled-components';
import axios from 'axios';
import { connect } from 'react-redux';

const StyledInput = styled(Input)`
  input {
    padding: 10px 20px;
    height: auto;
    border-radius: 25px;
  }
`

const StyledButton = styled(Button)`
  border-radius: 25px;
  padding: 15px 20px;
  height: auto;
  width: 100%;
  box-shadow: 0 8px 17px 2px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12), 0 5px 5px -3px rgba(0,0,0,0.1);
  background-color: #ff663b;
  color: white;
  text-transform: uppercase;
  border: none;
  font-weight: 700;
  margin-bottom: 30px;

  &:hover {
    color: #0c2e60;
  }
`

class RegisterForm extends React.Component {
  state = {
    name: '',
    nickname: '',
    email: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  registerUser = (e) => {
    e.preventDefault();
    const {
      cb
    } = this.props;

    const headers = {
      'Content-Type': 'application/json',
      'Accept': '*/*'
    };

    axios({
      method: 'POST',
      url: `https://api.ibigwave.com/v1/auth`,
      headers: headers,
      data: {
        name: this.state.name,
        nickname: this.state.nickname,
        email: this.state.email,
        password: this.state.password
      },
    })
    .then((response) => {
      console.log(response)
      this.props.saveCurrentUser(response.data.data)
      let obj = {
        client: response.headers.client,
        accessToken: response.headers['access-token'],
        uid: response.headers.uid
      }
      cb(obj);
    })
    .catch((error) => {
      console.log(error, '<== Error being returned');
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login-box">
        <h1>Registro</h1>
        <Form className="login-form" onSubmit={this.registerUser}>
          <Form.Item>
            {getFieldDecorator('name', {
              rules: [{ required: true, message: 'Please input your name!' }],
            })(
              <StyledInput
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="name"
                name="name"
                placeholder="Name"
                onChange={this.handleChange}
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('nickname', {
              rules: [{ required: true, message: 'Please input your nickname!' }],
            })(
              <StyledInput
                prefix={<Icon type="tag" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="nickname"
                name="nickname"
                placeholder="Nickname"
                onChange={this.handleChange}
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('email', {
              rules: [{ required: true, message: 'Please input your email!' }],
            })(
              <StyledInput
                prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="email"
                name="email"
                placeholder="Email"
                onChange={this.handleChange}
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <StyledInput
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                name="password"
                placeholder="Password"
                onChange={this.handleChange}
              />,
            )}
          </Form.Item>
          <StyledButton htmlType="submit">
            Registrarse
          </StyledButton>
        </Form>
      </div>
    );
  }
}

const WrappedRegisterForm = Form.create({ name: 'normal_login' })(RegisterForm);

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
}

const saveCurrentUser = (currentUser) => {
  return {
    type: 'SET_CURRENT_USER',
    currentUser: currentUser
  }
}

const mapDispatchToProps = {
  saveCurrentUser: saveCurrentUser
}

export default connect( mapStateToProps, mapDispatchToProps )(WrappedRegisterForm);