import React, { Component } from 'react';
import { Avatar, Input } from 'antd';
import { BASE_DOMAIN } from '../../constants';
import axios from 'axios';
import { connect } from 'react-redux';

class ProfileForm extends Component {

  state = {
    user: {}
  }

  componentDidMount() {
    this.setState({
      user: this.props.currentUser
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

  updateProfile(profileId) {
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };

    axios({
      method: 'GET',
      url: `${BASE_DOMAIN}/v1/users/`,
      headers: headers
    })
    .then(response => {
      // const data = response.data.data.attributes;
      // this.setState({
      //   user:{
      //     name: data.name,
      //     lastname: data.lastname,
      //     avatar: data.avatar.url,
      //     email: data.email,
      //     nickname: data.nickname
      //   }
      // })
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
    
    return (
      <div>
        <Avatar
          size={150}
          src={avatar == null ? "https://raw.githack.com/creativetimofficial/now-ui-kit/master/assets/img/ryan.jpg" : avatar}
        />
        <Input placeholder="Nickname" value={nickname} name="nickname" onChange={this.handleChange7}/>
        <Input placeholder="Name" value={name} name="name" onChange={this.handleChange7}/>
        <Input placeholder="Last name" value={lastname} name="lastname" onChange={this.handleChange7}/>
        <Input placeholder="Email" value={email} name="email" onChange={this.handleChange7}/>
        <Input placeholder="Primary Phone" value={phone_one} name="phone_one" onChange={this.handleChange7}/>
        <Input placeholder="Secundary Phone" value={phone_two} name="phone_two" onChange={this.handleChange7}/>

        <h1>{name} {lastname}</h1>
        <span>{nickname}</span>
      </div>
    )
  } 
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    currentUser: state.session.currentUser
  }
}

export default connect(mapStateToProps, null)(ProfileForm);
