import React from 'react';
import 'antd/dist/antd.css';
import { Form, Icon } from 'antd';
import { StyledInputIcon, StyledButton } from '../../styled';
import axios from 'axios';
import { connect } from 'react-redux';
import { SET_CURRENT_USER, SET_TOKENS } from '../../../actions/session';
import swal from 'sweetalert';
import { Link } from "react-router-dom";

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
      cb,
      setCurrentUser,
      setTokens
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

      setTokens(tokens)

      // Callback received by props
      cb();

      if (response.statusText === "OK") {
        setCurrentUser(currentUser)

        if (currentUser.roles && currentUser.roles.length !== 0) {
          if (currentUser.roles[0].name === 'superadmin') { 
            console.log('superadmin logged')
          }
        } else {
          console.log('User with no role')
        }

        swal("Inicio de sesión exitoso", "", "success");
      } else {
        swal("Ha ocurrido un error, intenta de nuevo", "", "warning");
      }
    })
    .catch((error) => {
      console.error('error: ', error)
      let errorMessage = error.response ? error.response.data.errors.full_messages : 'Algo salió mal!!!'
      swal(`${errorMessage}`, "", "error");
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login-box">
        <h1 style={{
          textTransform: 'uppercase',
          color: '#ff663b',
          fontWeight: 700,
          marginBottom: '30px'
        }}>Inicio de sesión</h1>
        <Form className="login-form" onSubmit={this.loginUser}>
          <Form.Item>
            {getFieldDecorator('email', {
              rules: [{ required: true, message: 'Ingresa tu correo!' }],
            })(
              <StyledInputIcon
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
              <StyledInputIcon
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

const mapDispatchToProps = {
  setCurrentUser: SET_CURRENT_USER,
  setTokens: SET_TOKENS
}

export default connect(null, mapDispatchToProps)(WrappedLoginForm);
