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
const { TextArea } = Input;

const CitizenForm = (props) => {
  const {
    name,
    nickname,
    email,
    description,
    status_citizen
  } = props.data;

  return (
    <Form onSubmit={props.handleSubmit}>
      <Row>
        <Col span={24} lg={24} md={24} xs={24}>
          <Form.Item style={{padding: '0 15px'}}>
            <label>Estado del ciudadano</label>
            <Select defaultValue={status_citizen} style={{ width: 120 }} onChange={props.handleSelect}>
              <Option value="citizen">Ciudadano</Option>
              <Option value="candidate">Candidato</Option>
            </Select>
          </Form.Item>                
        </Col>
      </Row>
      <Row>
        <Col span={12} lg={8} md={12} xs={24}>
          <Form.Item style={{padding: '0 15px'}}>
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
        <Col span={12} lg={8} md={12} xs={24}>
          <Form.Item style={{padding: '0 15px'}}>
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
        <Col span={12} lg={8} md={12} xs={24}>
          <Form.Item style={{padding: '0 15px'}}>
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
        <Col span={24} lg={24} md={24} xs={24}>
          <Form.Item style={{padding: '0 15px'}}>
            <label>Descripción</label>
            <TextArea
              name="description"
              value={description}
              placeholder="Descripción"
              onChange={props.handleChange}
            />
          </Form.Item>                
        </Col>
      </Row>
      { props.children }
      <Button htmlType="submit">
        Crear
      </Button>
    </Form>
  )
}

export default CitizenForm;