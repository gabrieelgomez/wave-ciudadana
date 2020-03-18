import React from 'react';
import {
  Form,
  Input,
  Button,
  Card,
  Row,
  Col
} from 'antd';
import axios from 'axios';
import swal from 'sweetalert';

class NewUserForm extends React.Component {
  state = {
    user: {
      name: '',
      lastname: '',
      nickname: '',
      email: '',
      password: '',
      password_confirmation: '',
      phone_one: '',
      phone_two: '',
      dni: '',
      gender: '',
      roles_attributes: [
        {
          name: 'admin'
        }
      ]
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState=> {
      return {
        user: {
          ...prevState.user,
          [name]: value
        }
      }
    });
  }

  handleCreateUser = (e) => {
    e.preventDefault()
    const { password, password_confirmation } = this.state;
    if (password !== password_confirmation) {
        alert("Contraseñas no coinciden");
    } else {
      this.props.createUser(this.state.user)
    }
  }

  render() {

    return (
      <div className="admin-container">
        <h1>Crear nuevo usuario admin</h1>
        <Card>
          <Form onSubmit={this.handleCreateUser}>
            <Row>
              <Col span={12}>
                <Form.Item>
                  <Input 
                    type="text"
                    name="nickname"
                    placeholder="Usuario"
                    onChange={this.handleChange}
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    onChange={this.handleChange}
                  />
                </Form.Item>                
              </Col>
              <Col span={12}>
                <Form.Item>
                  <Input
                    type="text"
                    name="lastname"
                    placeholder="Apellido"
                    onChange={this.handleChange}
                  />
                </Form.Item>                
              </Col>
              <Col span={12}>
                <Form.Item>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={this.handleChange}
                  />
                </Form.Item>                
              </Col>
              <Col span={12}>
                <Form.Item>
                  <Input
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    onChange={this.handleChange}
                  />
                </Form.Item>                
              </Col>
              <Col span={12}>
                <Form.Item>
                  <Input
                    type="password"
                    name="password_confirmation"
                    placeholder="Confirmacion de contraseña"
                    onChange={this.handleChange}
                  />
                </Form.Item>                
              </Col>
              <Col span={12}>
                <Form.Item>
                  <Input
                    type="text"
                    name="phone_one"
                    placeholder="Telefono 1"
                    onChange={this.handleChange}
                  />
                </Form.Item>                
              </Col>
              <Col span={12}>
                <Form.Item>
                  <Input
                    type="text"
                    name="phone_two"
                    placeholder="Telefono 2"
                    onChange={this.handleChange}
                  />
                </Form.Item>                
              </Col>
              <Col span={12}>
                <Form.Item>
                  <Input
                    type="text"
                    name="dni"
                    placeholder="DNI"
                    onChange={this.handleChange}
                  />
                </Form.Item>                
              </Col>
              <Col span={12}>
                <Form.Item>
                  <Input
                    type="text"
                    name="gender"
                    placeholder="Genero"
                    onChange={this.handleChange}
                  />
                </Form.Item>                
              </Col>
            </Row>
            <Button htmlType="submit">
              Crear
            </Button>
          </Form>
        </Card>
      </div>
    )
  }
}

export default NewUserForm;