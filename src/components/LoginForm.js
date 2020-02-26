import React from 'react';
import 'antd/dist/antd.css';
import { Form, Icon, Input, Button } from 'antd';
import styled from 'styled-components';
import axios from 'axios';
import { connect } from 'react-redux';
import { SET_CURRENT_USER } from '../actions/session';
import swal from 'sweetalert';

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

class LoginForm extends React.Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  loginUser = (e) => {
    e.preventDefault();
    const {
      cb
    } = this.props;

    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
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
      this.props.saveCurrentUser(response.data.data)
      cb();
      swal("Login successfully", "", "success");
    })
    .catch((error) => {
      swal(`${error.response.data.errors}`, "", "error");
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login-box">
        <h1>Inicio de sesión</h1>
        <Form className="login-form" onSubmit={this.loginUser}>
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
            Iniciar sesión
          </StyledButton>
          <div className="login-box-footer">
            Inicia sesión con
            <ul>
              <li><span><Icon type="facebook" /></span></li>
              <li><span><Icon type="google" /></span></li>
            </ul>
          </div>
        </Form>
      </div>
    );
  }
}

const WrappedLoginForm = Form.create({ name: 'normal_login' })(LoginForm);

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
}

const mapDispatchToProps = {
  saveCurrentUser: SET_CURRENT_USER
}

export default connect( mapStateToProps, mapDispatchToProps )(WrappedLoginForm);
