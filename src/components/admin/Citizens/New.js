import React from 'react';
import {
  Form,
  Input,
  Button,
  Card,
  Row,
  Col,
  Select,
} from 'antd';
const { Option } = Select;
const { TextArea } = Input;

class NewCitizenForm extends React.Component {
  state = {
    user: {
      name: '',
      email: '',
      nickname: '',
      description: '',
      password: '',
      password_confirmation: ''
    },
    citizen: {
      status_citizen: 'citizen'      
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

  handleSelect = (e) => {
    const value = e;
    this.setState({citizen: {status_citizen: value}})
  }

  handleCreateCitizen = (e) => {
    e.preventDefault()
    const { password, password_confirmation } = this.state;
    if (password !== password_confirmation) {
        alert("Contraseñas no coinciden");
    } else {
      const {user, citizen} = this.state;
      this.props.createCitizen(user, citizen)
    }
  }

  render() {

    return (
      <div className="admin-container">
        <h1>Crear nuevo ciudadano</h1>
        <Card>
          <Form onSubmit={this.handleCreateCitizen}>
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
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={this.handleChange}
                  />
                </Form.Item>                
              </Col>
              <Col span={12}>
                <Form.Item>
                  <TextArea
                    name="description"
                    placeholder="Descripción"
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
                  <Select defaultValue="citizen" style={{ width: 120 }} onChange={this.handleSelect}>
                    <Option name="citizen" value="citizen">Ciudadano</Option>
                    <Option name="candidate" value="candidate">Candidato</Option>
                  </Select>
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

export default NewCitizenForm;