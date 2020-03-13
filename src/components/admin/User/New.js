import React from 'react';
import {
  Form,
  Input,
  Button,
  Card
} from 'antd';
import axios from 'axios';
import swal from 'sweetalert';

class AdminUserNew extends React.Component {
  state = {
    name: '',
    lastname: '',
    nickname: '',
    email: '',
    password: '',
    phone_one: '',
    phone_two: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  createUser = (e) => {
    e.preventDefault();

    const headers = {
      'Content-Type': 'application/json',
      'Accept': '*/*'
    };

    axios({
      method: 'POST',
      url: `https://api.ibigwave.com/v1/auth`,
      headers: headers,
      data: {
        roles: [{name: "admin"}],
        name: this.state.name,
        lastname: this.state.lastname,
        nickname: this.state.nickname,
        email: this.state.email,
        password: this.state.password,
        phone_one: this.state.phone_one,
        phone_two: this.state.phone_two
      },
    })
    .then((response) => {
      console.log(response)
      swal("Registrado exitosamente", "", "success");
    })
    .catch((error) => {
      swal(`${error.response.data.errors.full_messages}`, "", "error");
    });
  }

  render() {

    return (
      <div className="admin-container">
        <h1>Crear nuevo usuario admin</h1>
        <Card>
          <Form onSubmit={this.createUser}>
            <Form.Item>
              <Input 
                type="text"
                name="nickname"
                placeholder="Usuario"
                onChange={this.handleChange}
              />
            </Form.Item>
            <Form.Item>
              <Input
                type="text"
                name="name"
                placeholder="Nombre"
                onChange={this.handleChange}
              />
            </Form.Item>
            <Form.Item>
              <Input
                type="text"
                name="lastname"
                placeholder="Apellido"
                onChange={this.handleChange}
              />
            </Form.Item>
            <Form.Item>
              <Input
                type="email"
                name="email"
                placeholder="Email"
                onChange={this.handleChange}
              />
            </Form.Item>
            <Form.Item>
              <Input
                type="password"
                name="password"
                placeholder="Contraseña"
                onChange={this.handleChange}
              />
            </Form.Item>
            <Form.Item>
              <Input
                type="text"
                name="phone_one"
                placeholder="Telefono 1"
                onChange={this.handleChange}
              />
            </Form.Item>
            <Form.Item>
              <Input
                type="text"
                name="phone_two"
                placeholder="Telefono 2"
                onChange={this.handleChange}
              />
            </Form.Item>
            <Button htmlType="submit">
              Crear
            </Button>
          </Form>
        </Card>
      </div>
    )
  }
}

export default AdminUserNew;