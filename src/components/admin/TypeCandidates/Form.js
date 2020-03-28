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

const TypeCandidateForm = (props) => {
  const {
    name,
    country_id
  } = props.data;

  return (
    <Form onSubmit={props.handleSubmit}>
      <Row>
        <Col span={12} lg={8} md={12} xs={24}>
          <Form.Item style={{padding: '0 15px'}}>
            <label>Tipo de candidatura</label>
            <Input
              type="text"
              name="name"
              value={name}
              placeholder="Nombre del tipo de candidatura"
              onChange={props.handleChange}
            />
          </Form.Item>
        </Col>
        <Col span={12} lg={8} md={12} xs={24}>
          <Form.Item style={{padding: '0 15px'}}>
            <label>ID del país</label>
            <Input
              type="text"
              name="country_id"
              value={country_id}
              placeholder="País"
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

export default TypeCandidateForm;
