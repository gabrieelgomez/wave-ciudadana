import React, { Component } from 'react';
import { Avatar, Input, Button, Form } from 'antd';
import { BASE_DOMAIN } from '../../constants';
import axios from 'axios';
import { connect } from 'react-redux';
import { SET_CURRENT_USER, SET_TOKENS } from '../../actions/session';

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

  getUserData() {
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };

    axios({
      method: 'GET',
      url: `${BASE_DOMAIN}/v1/users/`,
      headers: headers
    })
    .then((response) => {
      const data = response.data.data.attributes;
      this.setState({
        user:{
          name: data.name,
          lastname: data.lastname,
          avatar: data.avatar.url,
          email: data.email,
          nickname: data.nickname
        }
      })
    })
    .catch((error) => {
      console.log(error, 'error being returned')
    });
  }

  updateUserData() {
    const { uid, client, access_token } = this.props.session.tokens;
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'access-token': access_token,
      client, uid
    };

    const userData = this.state.user
    console.log(userData)
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
      avatar,
      email,
      phone_one,
      phone_two
    } = this.state.user;

    const handleSubmit = (e, value) => {
      e.preventDefault();
      this.updateUserData();
    }
    
    const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    };

    const Item = Form.Item;

    return (
      <div>
        <Avatar
          size={150}
          src={avatar == null ? "https://raw.githack.com/creativetimofficial/now-ui-kit/master/assets/img/ryan.jpg" : avatar}
        />
        <Form {...layout} name="nest-messages" onSubmit={handleSubmit}>
          <Item name={['user', 'nickname']} label="Nickname" rules={[{ required: true }]}>
            <Input placeholder="Nickname" value={nickname} name="nickname" onChange={this.handleChange}/>
          </Item>
          <Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
            <Input placeholder="Name" value={name} name="name" onChange={this.handleChange}/>
          </Item>
          <Item name={['user', 'last_name']} label="Last name" rules={[{ required: false }]}>
            <Input placeholder="Last name" value={lastname} name="lastname" onChange={this.handleChange}/>
          </Item>
          <Item name={['user', 'email']} label="email" rules={[{ required: true }]}>
            <Input placeholder="email" value={email} name="email" onChange={this.handleChange}/>
          </Item>
          <Item name={['user', 'phone_one']} label="Primary Phone" rules={[{ required: false }]}>
            <Input placeholder="Primary Phone" value={phone_one} name="phone_one" onChange={this.handleChange}/>
          </Item>
          <Item name={['user', 'phone_two']} label="Secundary Phone" rules={[{ required: false }]}>
            <Input placeholder="Secundary Phone" value={phone_two} name="phone_two" onChange={this.handleChange}/>
          </Item>
          <Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Item>
        </Form>

        <Button onClick={this.updateUserData}>Actualizar user profile</Button>
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
  setCurrentUser: SET_CURRENT_USER
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);
