import React from 'react';
import {
  Form,
  Input,
  Button,
  Row,
  Col,
  Select,
} from 'antd';
const { Option } = Select;

const UserForm = (props) => {
  const {
    name,
    lastname,
    nickname,
    email,
    password,
    password_confirmation,
    phone_one,
    phone_two,
    dni,
    gender
  } = props.data;

  return (
    <Form onSubmit={props.handleSubmit}>
      <Row>
        <Col span={12} lg={12} xs={24}>
          <Form.Item>
            <label>Usuario</label>
            <Input
              type="text"
              name="nickname"
              value={nickname}
              placeholder="Usuario"
              onChange={props.handleChange}
            />
          </Form.Item>
        </Col>
        <Col span={12} lg={12} xs={24}>
          <Form.Item>
            <label>Nombre</label>
            <Input
              type="text"
              name="name"
              value={name}
              placeholder="Nombre"
              onChange={props.handleChange}
            />
          </Form.Item>
        </Col>
        <Col span={12} lg={12} xs={24}>
          <Form.Item>
            <label>Apellido</label>
            <Input
              type="text"
              name="lastname"
              value={lastname}
              placeholder="Apellido"
              onChange={props.handleChange}
            />
          </Form.Item>
        </Col>
        <Col span={12} lg={12} xs={24}>
          <Form.Item>
            <label>Email</label>
            <Input
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={props.handleChange}
            />
          </Form.Item>
        </Col>
        <Col span={12} lg={12} xs={24}>
          <Form.Item>
            <label>Contraseña</label>
            <Input
              type="password"
              name="password"
              value={password}
              placeholder="Contraseña"
              onChange={props.handleChange}
            />
          </Form.Item>
        </Col>
        <Col span={12} lg={12} xs={24}>
          <Form.Item>
            <label>Confirmacion de contraseña</label>
            <Input
              type="password"
              name="password_confirmation"
              value={password_confirmation}
              placeholder="Confirmacion de contraseña"
              onChange={props.handleChange}
            />
          </Form.Item>
        </Col>
        <Col span={12} lg={12} xs={24}>
          <Form.Item>
            <label>Telefono 1</label>
            <Input
              type="text"
              name="phone_one"
              value={phone_one}
              placeholder="Telefono 1"
              onChange={props.handleChange}
            />
          </Form.Item>
        </Col>
        <Col span={12} lg={12} xs={24}>
          <Form.Item>
            <label>Telefono 2</label>
            <Input
              type="text"
              name="phone_two"
              value={phone_two}
              placeholder="Telefono 2"
              onChange={props.handleChange}
            />
          </Form.Item>
        </Col>
        <Col span={12} lg={12} xs={24}>
          <Form.Item>
            <label>DNI</label>
            <Input
              type="text"
              name="dni"
              value={dni}
              placeholder="DNI"
              onChange={props.handleChange}
            />
          </Form.Item>
        </Col>
        <Col span={12} lg={12} xs={24}>
          <Form.Item>
            <label>Género</label>
            <Select defaultValue={gender} style={{ width: 180 }} onChange={props.handleSelect}>
              <Option value="male">Masculino</Option>
              <Option value="female">Femenino</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Button htmlType="submit">
        Guardar
      </Button>
    </Form>
  )
}

export default UserForm;
