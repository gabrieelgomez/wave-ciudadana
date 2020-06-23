import React, { Component } from 'react';
import { Form, Col, Row } from 'antd';
import axios from 'axios';
import swal from 'sweetalert';
import { BASE_DOMAIN } from '../../constants';
import { withRouter } from "react-router-dom";
import { StyledButton, StyledInput, StyledCard } from '../../components/styled';

const Item = Form.Item;

class ResetPassword extends Component {

  state = {
    email: '',
    password: '',
    password_confirmation: '',
    token: '',
    emailIsSent: false,
    isLoading: false
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  resetPassword = (e) => {
    e.preventDefault();

    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };

    const {
      password,
      password_confirmation,
      token
    } = this.state;

    axios({
      method: 'POST',
      url: `${BASE_DOMAIN}/v1/auth/password/reset`,
      headers: headers,
      data: {
        password,
        password_confirmation,
        token
      },
    })
    .then((response) => {
      const that = this;
      swal("Contraseña cambiada exitosamente", "", "success").then((value) => {
        that.props.history.push("/");
      });
    })
    .catch((error) => {
      swal(`${error.response.data.errors}`, "", "error");
    });
  }

  sendResetPassEmail = (e) => {
    e.preventDefault();

    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };
    axios({
      method: 'POST',
      url: `${BASE_DOMAIN}/v1/auth/password`,
      headers: headers,
      data: {
        email: this.state.email,
      },
    })
    .then((response) => {

      const that = this;
      swal("Correo enviado exitosamente", "Revisa tu bandeja de entrada", "success").then((value) => {
        that.setState({
          email: '',
          emailIsSent: true
        })
      });

    })
    .catch((error) => {
      const errMessage = error ? error.response.data.error : 'Algo salió mal, intenta de nuevo';
      swal(errMessage, "", "error");
    });
  }
  render() {

    const {
      emailIsSent,
      password,
      password_confirmation,
      token,
      email
    } = this.state;
    return (
      <div className="container">
        <Row>
          <Col span={14} offset={5}>
            <StyledCard>
              { emailIsSent ? (
                  <div>
                    <h1>Cambia tu contraseña</h1>
                    <Form name="send_email" onSubmit={this.resetPassword}>
                      <Item>
                        <label>Nueva contraseña</label>
                        <StyledInput type="password" name="password" value={password} onChange={this.handleChange}></StyledInput>
                      </Item>
                      <Item>
                        <label>Confirmación de nueva contraseña</label>
                        <StyledInput type="password" name="password_confirmation" value={password_confirmation} onChange={this.handleChange}></StyledInput>
                      </Item>
                      <Item>
                        <label>Código de verificación</label>
                        <StyledInput name="token" value={token} onChange={this.handleChange}></StyledInput>
                        <small>Ingresa el código recibido en tu correo</small>
                      </Item>
                      <Item>
                        <StyledButton htmlType="submit">
                          Cambiar contraseña
                        </StyledButton>
                      </Item>
                    </Form>
                  </div>
                ) : (
                  <div>
                    <h1>Ingresa tu correo, te enviaremos un mensaje</h1>
                    <Form name="reset_password" onSubmit={this.sendResetPassEmail}>
                      <Item>
                        <StyledInput name="email" value={email} onChange={this.handleChange}></StyledInput>
                      </Item>
                      <Item>
                        <StyledButton htmlType="submit">
                          Enviar
                        </StyledButton>
                      </Item>
                    </Form>
                  </div>
                )
              }
            </StyledCard>
          </Col>
        </Row>
      </div>
    );
  }
}

export default withRouter(ResetPassword);
