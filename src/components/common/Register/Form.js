import React from 'react';
import { Form, Icon } from 'antd';
import { StyledInputIcon, StyledButton } from '../../styled';

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
          <StyledInputIcon
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
          <StyledInputIcon
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
          <StyledInputIcon
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
          <StyledInputIcon
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
          <StyledInputIcon
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
          <StyledInputIcon
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