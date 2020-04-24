import React, { Component } from 'react';
import { Form, Avatar, Upload, Icon } from 'antd';
import { StyledInput, StyledButton } from '../../styled';

class ProfileForm extends Component {

  getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  dummyRequest = ({file, onSuccess}) => {
    setTimeout(() => {
      let avatarBase64 = '';
      this.getBase64(file, (result) => {
        avatarBase64 = result;

        this.props.getFile(avatarBase64)
      });

      onSuccess("ok")
    }, 0)
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
          <Item>
            <Upload name="avatar" customRequest={this.dummyRequest}>
              <div style={{position: 'relative'}}>
                <Avatar size={120} src={avatar ? avatar : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"} />
                <div className="upload-mask">
                  <Icon type="plus" />
                  <div className="ant-upload-text">Upload</div>
                </div>
              </div>
            </Upload>
          </Item>
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