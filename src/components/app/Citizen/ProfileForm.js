import React, { Component } from 'react';
import { Form } from 'antd';
import { StyledInput, StyledButton } from '../../styled';

class ProfileForm extends Component { 
  render() {
    const {
      name,
      nickname,
      email,
      phone
    } = this.props.citizen;
   
    const Item = Form.Item;

    return (
      <div>
        <Form name="nest-messages" onSubmit={this.props.updateCitizen}>
          <Item name={['citizen', 'nickname']} rules={[{ required: true }]}>
            <label>Usuario</label>
            <StyledInput placeholder="Nickname" value={nickname} name="nickname" onChange={this.props.handleChange}/>
          </Item>
          <Item name={['citizen', 'name']} rules={[{ required: true }]}>
            <label>Nombre</label>
            <StyledInput placeholder="Name" value={name} name="name" onChange={this.props.handleChange}/>
          </Item>
          <Item name={['citizen', 'email']} rules={[{ required: true }]}>
            <label>Email</label>
            <StyledInput placeholder="email" value={email} name="email" onChange={this.props.handleChange}/>
          </Item>
          <Item name={['citizen', 'phone']} rules={[{ required: false }]}>
            <label>Teléfono</label>
            <StyledInput placeholder="Teléfono" value={phone} name="phone" onChange={this.props.handleChange}/>
          </Item>
          <Item>
            <StyledButton onClick={this.props.updateCitizen}>Actualizar datos</StyledButton>
          </Item>
        </Form>
      </div>
    )
  } 
}

export default ProfileForm;