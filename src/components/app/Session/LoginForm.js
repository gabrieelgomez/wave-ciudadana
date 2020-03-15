import React from 'react';
import 'antd/dist/antd.css';
import { Form, Icon, Input, Button } from 'antd';
import styled from 'styled-components';
import axios from 'axios';
import { connect } from 'react-redux';
import { SET_CURRENT_USER, SET_TOKENS } from '../../../actions/session';
import swal from 'sweetalert';
import { Link } from "react-router-dom";

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
  margin-bottom: 20px;

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
      const { client, uid } = response.headers

      const tokens = {
        access_token: response.headers['access-token'],
        client, uid
      }

      const currentUser = {
        ...response.data.data
      }

      this.props.setCurrentUser(currentUser)
      this.props.setTokens(tokens)

      cb();
      if (response.status === 200) {
        swal("Inicio de sesión exitoso", "", "success");
      } else {
        swal("Ha ocurrido un error, intenta de nuevo", "", "warning");
      }
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
              rules: [{ required: true, message: 'Ingresa tu correo!' }],
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
                placeholder="Contraseña"
                onChange={this.handleChange}
              />,
            )}
          </Form.Item>
          <StyledButton htmlType="submit">
            Iniciar sesión
          </StyledButton>
          <Link to={`/reset-password`}>
            Reset password
          </Link>
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
    currentUser: state.session.currentUser
  }
}

const mapDispatchToProps = {
  setCurrentUser: SET_CURRENT_USER,
  setTokens: SET_TOKENS
}

export default connect( mapStateToProps, mapDispatchToProps )(WrappedLoginForm);