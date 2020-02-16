import React from 'react';
import 'antd/dist/antd.css';
import { Form, Icon, Input, Button } from 'antd';
import styled from 'styled-components';
import axios from 'axios';

const CustomInput = styled(Input)`
  input {
    padding: 10px 20px;
    height: auto;
    border-radius: 25px;
  }
`

const CustomButton = styled(Button)`
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
    email: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  registerUser = () => {
    const headers = {
      'Content-Type': 'application/json',
      'Accept': '*/*'
    };

    axios({
      method: 'POST',
      url: `https://api.ibigwave.com/v1/auth/sign_in`,
      headers: headers,
      data: {
        email: this.state.email,
        password: this.state.password
      },
    })
    .then((response) => {
      console.log(response)
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
        <Form className="login-form">
          <Form.Item>
            {getFieldDecorator('email', {
              rules: [{ required: true, message: 'Please input your email!' }],
            })(
              <CustomInput
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
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
              <CustomInput
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                name="password"
                placeholder="Password"
                onChange={this.handleChange}
              />,
            )}
          </Form.Item>
          <CustomButton onClick={this.registerUser} className="login-form-button">
            Registrarse
          </CustomButton>
        </Form>
      </div>
    );
  }
}

const WrappedRegisterForm = Form.create({ name: 'normal_login' })(RegisterForm);
export default WrappedRegisterForm;