import React, { Component } from 'react';
import { Input, Button, Form } from 'antd';
import { BASE_DOMAIN } from '../../../constants';
import axios from 'axios';
import { connect } from 'react-redux';
import { SET_CURRENT_USER, SET_TOKENS } from '../../../actions/session';
import styled from 'styled-components';
import swal from 'sweetalert';
import { api } from '../../../services/api';

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

  state = {
    user: {}
  }

  componentDidMount() {
    const {
      name,
      lastname,
      nickname,
      avatar,
      email,
      phone_one,
      phone_two
    } = this.props.currentUser

    this.setState({
      user: {
        name,
        lastname,
        nickname,
        avatar,
        email,
        phone_one,
        phone_two
      }
    })
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => {
      return {
        user: {
          ...prevState.user,
          [name]: value
        }
      }
    });
  }

  updateUserData = () => {
    const { uid, client, access_token } = this.props.session.tokens;
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'access-token': access_token,
      client, uid
    };

    const userData = this.state.user

    axios({
      method: 'PUT',
      url: `${BASE_DOMAIN}/v1/auth/`,
      headers: headers,
      data: { ...userData }
    })
    .then(response => {
      console.log('updateUserData: ', response);
      const headers = {
        access_token: response.headers['access-token'],
        client, uid
      }
      this.props.setTokens(headers);
      this.props.setCurrentUser(response.data.data)
      swal('Datos actualizados exitosamente', '', 'success')
    })
    .catch(error => {
      console.log(error, 'error being returned')
    });
  }

  render() {
    const {
      name,
      lastname,
      nickname,
      email,
      phone_one,
      phone_two
    } = this.state.user;

    const handleSubmit = (e, value) => {
      e.preventDefault();
      this.updateUserData();
    }
    
    const Item = Form.Item;

    return (
      <div>
        <Form name="nest-messages" onSubmit={handleSubmit}>
          <Item name={['user', 'nickname']} rules={[{ required: true }]}>
            <label>Usuario</label>
            <StyledInput placeholder="Nickname" value={nickname} name="nickname" onChange={this.handleChange}/>
          </Item>
          <Item name={['user', 'name']} rules={[{ required: true }]}>
            <label>Nombre</label>
            <StyledInput placeholder="Name" value={name} name="name" onChange={this.handleChange}/>
          </Item>
          <Item name={['user', 'last_name']} rules={[{ required: false }]}>
            <label>Apellido</label>
            <StyledInput placeholder="Last name" value={lastname} name="lastname" onChange={this.handleChange}/>
          </Item>
          <Item name={['user', 'email']} rules={[{ required: true }]}>
            <label>Email</label>
            <StyledInput placeholder="email" value={email} name="email" onChange={this.handleChange}/>
          </Item>
          <Item name={['user', 'phone_one']} rules={[{ required: false }]}>
            <label>Teléfono</label>
            <StyledInput placeholder="Primary Phone" value={phone_one} name="phone_one" onChange={this.handleChange}/>
          </Item>
          <Item name={['user', 'phone_two']} rules={[{ required: false }]}>
            <label>Otro teléfono</label>
            <StyledInput placeholder="Secundary Phone" value={phone_two} name="phone_two" onChange={this.handleChange}/>
          </Item>
          <Item>
            <StyledButton onClick={this.updateUserData}>Actualizar datos</StyledButton>
          </Item>
        </Form>
      </div>
    )
  } 
}

const mapStateToProps = (state) => {
  const { tokens, currentUser } = state.session;
  return {
    currentUser: currentUser,
    session: { tokens }
  }
}

const mapDispatchToProps = {
  setTokens: SET_TOKENS,
  setCurrentUser: SET_CURRENT_USER,
  api
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);
