import React from 'react';
import {
  Form,
  Input,
  Button,
  Card
} from 'antd';
import axios from 'axios';
import swal from 'sweetalert';
import {BASE_DOMAIN} from '../../../constants';

class AdminUserUpdate extends React.Component {
  state = {
    user: {
      name: '',
      lastname: '',
      nickname: '',
      email: '',
      password: '',
      phone_one: '',
      phone_two: ''
    }
  }

  componentDidMount() {
    this.userID = this.props.location.pathname.split('/').pop();
    console.log(this.userID)
    this.getUserData();
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
      url: `${BASE_DOMAIN}/v1/users/${this.userID}`,
      headers: headers
    })
    .then((response) => {
      const data = response.data.data.attributes;
      this.setState({
        user: {
          name: data.name,
          lastname: data.lastname,
          nickname: data.nickname,
          email: data.email,
          password: data.password,
          phone_one: data.phone_one,
          phone_two: data.phone_two
        }
      })
    })
    .catch((error) => {
      console.log(error, 'error being returned')
    });
  }

  updateUser = (e) => {
    e.preventDefault();

    const headers = {
      'Content-Type': 'application/json',
      'Accept': '*/*'
    };
    const userData = this.state.user
    console.log(userData)
    axios({
      method: 'PATCH',
      url: `${BASE_DOMAIN}/v1/auth/`,
      headers: headers,
      data: { ...userData }
    })
    .then((response) => {
      console.log(response)
      swal("Actualizado exitosamente", "", "success");
    })
    .catch((error) => {
      console.log(error, 'error being returned')
    });
  }

  render() {
    const {
      name,
      lastname,
      nickname,
      email,
      password,
      phone_one,
      phone_two
    } = this.state.user;

    return (
      <div className="admin-container">
        <h1>Actualizar usuario admin</h1>
        <Card>
          <Form onSubmit={this.updateUser}>
            <Form.Item>
              <Input 
                type="text"
                name="nickname"
                placeholder="Usuario"
                value={nickname}
                onChange={this.handleChange}
              />
            </Form.Item>
            <Form.Item>
              <Input
                type="text"
                name="name"
                placeholder="Nombre"
                value={name}
                onChange={this.handleChange}
              />
            </Form.Item>
            <Form.Item>
              <Input
                type="text"
                name="lastname"
                placeholder="Apellido"
                value={lastname}
                onChange={this.handleChange}
              />
            </Form.Item>
            <Form.Item>
              <Input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={this.handleChange}
              />
            </Form.Item>
            <Form.Item>
              <Input
                type="password"
                name="password"
                placeholder="Contraseña"
                value={password}
                onChange={this.handleChange}
              />
            </Form.Item>
            <Form.Item>
              <Input
                type="text"
                name=""
                placeholder="Telefono 1"
                value={phone_one}
                onChange={this.handleChange}
              />
            </Form.Item>
            <Form.Item>
              <Input
                type="text"
                name="phone_two"
                placeholder="Telefono 2"
                value={phone_two}
                onChange={this.handleChange}
              />
            </Form.Item>
            <Button htmlType="submit">
              Update
            </Button>
          </Form>
        </Card>
      </div>
    )
  }
}

export default AdminUserUpdate;