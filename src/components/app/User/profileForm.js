import React, { Component } from 'react';
import { Input, Button, Form } from 'antd';
import styled from 'styled-components';

const StyledInput = styled(Input)`
  padding: 10px 20px;
  height: auto;
  border-radius: 25px;
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

  &:hover {
    color: #0c2e60;
  }
`

class ProfileForm extends Component { 
  render() {
    const {
      name,
      lastname,
      nickname,
      email,
      phone_one,
      phone_two
    } = this.props.user;
   
    const Item = Form.Item;

    return (
      <div>
        <Form name="nest-messages" onSubmit={this.props.updateUser}>
          <Item name={['user', 'nickname']} rules={[{ required: true }]}>
            <label>Usuario</label>
            <StyledInput placeholder="Nickname" value={nickname} name="nickname" onChange={this.props.handleChange}/>
          </Item>
          <Item name={['user', 'name']} rules={[{ required: true }]}>
            <label>Nombre</label>
            <StyledInput placeholder="Name" value={name} name="name" onChange={this.props.handleChange}/>
          </Item>
          <Item name={['user', 'last_name']} rules={[{ required: false }]}>
            <label>Apellido</label>
            <StyledInput placeholder="Last name" value={lastname} name="lastname" onChange={this.props.handleChange}/>
          </Item>
          <Item name={['user', 'email']} rules={[{ required: true }]}>
            <label>Email</label>
            <StyledInput placeholder="email" value={email} name="email" onChange={this.props.handleChange}/>
          </Item>
          <Item name={['user', 'phone_one']} rules={[{ required: false }]}>
            <label>Teléfono</label>
            <StyledInput placeholder="Primary Phone" value={phone_one} name="phone_one" onChange={this.props.handleChange}/>
          </Item>
          <Item name={['user', 'phone_two']} rules={[{ required: false }]}>
            <label>Otro teléfono</label>
            <StyledInput placeholder="Secundary Phone" value={phone_two} name="phone_two" onChange={this.props.handleChange}/>
          </Item>
          <Item>
            <StyledButton onClick={this.props.updateUser}>Actualizar datos</StyledButton>
          </Item>
        </Form>
      </div>
    )
  } 
}

export default ProfileForm;