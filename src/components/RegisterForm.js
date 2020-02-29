import React from 'react';
import 'antd/dist/antd.css';
import { Form, Icon, Input, Button } from 'antd';
import styled from 'styled-components';
import axios from 'axios';
import { connect } from 'react-redux';
import { SET_CURRENT_USER, SET_TOKENS } from '../actions/session';
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

class RegisterForm extends React.Component {
  state = {
    name: '',
    lastname: '',
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
        lastname: this.state.lastname,
        nickname: this.state.nickname,
        email: this.state.email,
        password: this.state.password
      },
    })
    .then((response) => {
      const { client, uid } = response.headers
      const tokens = {
        access_token: response.headers['access-token'],
        client, uid
      }
      this.props.setCurrentUser(response.data.data);
      this.props.setTokens(tokens);

      cb();
      swal("Registrado exitosamente", "", "success");
    })
    .catch((error) => {
      swal(`${error.response.data.errors.full_messages}`, "", "error");
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
              rules: [{ required: true, message: 'Ingresa tu nombre!' }],
            })(
              <StyledInput
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="text"
                name="name"
                placeholder="Nombre"
                onChange={this.handleChange}
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('lastname', {
              rules: [{ required: true, message: 'Ingresa tu apellido!' }],
            })(
              <StyledInput
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="text"
                name="lastname"
                placeholder="Apellido"
                onChange={this.handleChange}
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('nickname', {
              rules: [{ required: true, message: 'Ingresa tu usuario!' }],
            })(
              <StyledInput
                prefix={<Icon type="tag" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="text"
                name="nickname"
                placeholder="Usuario"
                onChange={this.handleChange}
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('email', {
              rules: [{ required: true, message: 'Ingresa tu email!' }],
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
              rules: [{ required: true, message: 'Ingresa tu contraseña!' }],
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

const mapDispatchToProps = {
  setCurrentUser: SET_CURRENT_USER,
  setTokens: SET_TOKENS
}

export default connect( mapStateToProps, mapDispatchToProps )(WrappedRegisterForm);
