import React from 'react';
import { Form, Icon, Button, Input } from 'antd';
import styled from 'styled-components';

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

const Item = Form.Item;
const RegisterForm = (props) => {

  const {
    handleChange,
    registerUser
  } = props;

  const { getFieldDecorator } = props.form;
  return (
    <Form className="login-form" onSubmit={registerUser}>
      <Item>
        {getFieldDecorator('name', {
          rules: [{ required: true, message: 'Ingresa tu nombre!' }],
        })(
          <StyledInput
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="text"
            name="name"
            placeholder="Nombre"
            onChange={handleChange}
          />,
        )}
      </Item>
      <Item>
        {getFieldDecorator('lastname', {
          rules: [{ required: true, message: 'Ingresa tu apellido!' }],
        })(
          <StyledInput
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="text"
            name="lastname"
            placeholder="Apellido"
            onChange={handleChange}
          />,
        )}
      </Item>
      <Item>
        {getFieldDecorator('nickname', {
          rules: [{ required: true, message: 'Ingresa tu usuario!' }],
        })(
          <StyledInput
            prefix={<Icon type="tag" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="text"
            name="nickname"
            placeholder="Usuario"
            onChange={handleChange}
          />,
        )}
      </Item>
      <Item>
        {getFieldDecorator('email', {
          rules: [{ required: true, message: 'Ingresa tu email!' }],
        })(
          <StyledInput
            prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />,
        )}
      </Item>
      <Item>
        {getFieldDecorator('password', {
          rules: [{ required: true, message: 'Ingresa tu contraseña!' }],
        })(
          <StyledInput
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />,
        )}
      </Item>
      <Item>
        {getFieldDecorator('password_confirmation', {
          rules: [{ required: true, message: 'Ingresa tu confirmación de contraseña!' }],
        })(
          <StyledInput
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            name="password_confirmation"
            placeholder="Password confirmation"
            onChange={handleChange}
          />,
        )}
      </Item>
      <StyledButton htmlType="submit">
        Registrarse
      </StyledButton>
    </Form>
  )
}

const WrappedRegisterForm = Form.create({ name: 'normal_login' })(RegisterForm);

export default WrappedRegisterForm;