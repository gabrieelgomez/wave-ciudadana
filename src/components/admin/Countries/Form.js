import React from 'react';
import {
  Form,
  Input,
  Button,
  Row,
  Col
} from 'antd';

const CountryForm = (props) => {
  const {
    name,
    country_code,
    currency
  } = props.data;

  return (
    <Form onSubmit={props.handleSubmit}>
      <Row>
        <Col span={12} lg={8} md={12} xs={24}>
          <Form.Item style={{padding: '0 15px'}}>
            <label>Nombre</label>
            <Input
              type="text"
              name="name"
              value={name}
              placeholder="Nombre del país"
              onChange={props.handleChange}
            />
          </Form.Item>
        </Col>
        <Col span={12} lg={8} md={12} xs={24}>
          <Form.Item style={{padding: '0 15px'}}>
            <label>Código del País (ej: VE)</label>
            <Input
              type="text"
              name="country_code"
              value={country_code}
              placeholder="Código"
              onChange={props.handleChange}
            />
          </Form.Item>
        </Col>
        <Col span={12} lg={8} md={12} xs={24}>
          <Form.Item style={{padding: '0 15px'}}>
            <label>Código de moneda local (ej: Bs.)</label>
            <Input
              type="text"
              name="currency"
              value={currency}
              placeholder="Currency"
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

export default CountryForm;
