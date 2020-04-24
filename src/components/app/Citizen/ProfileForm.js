import React, { Component } from 'react';
import { Form, Avatar } from 'antd';
import { StyledInput, StyledButton } from '../../styled';
import FileBase64 from 'react-file-base64';

class ProfileForm extends Component {
  // Callback~
  handleGetFile = (file) => {
    this.props.getFile(file)
  }

  render() {
    const {
      name,
      nickname,
      email,
      phone,
      avatar
    } = this.props.citizen;
   
    const Item = Form.Item;

    return (
      <div>
        <Form name="nest-messages" onSubmit={this.props.updateCitizen}>
          <Avatar size={80} src={avatar ? avatar : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"} />
          <FileBase64
            multiple={ false }
            onDone={ this.handleGetFile }
          />
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