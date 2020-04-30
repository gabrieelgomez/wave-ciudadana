import React from 'react';
import {
  Form,
  Input,
  Button,
  Row,
  Col,
  Select
} from 'antd';
const {Option} = Select;

const PollCategoryForm = (props) => {
  const {
    name,
    country_id,
    country = {
      name: ''
    }
  } = props.data;

  return (
    <Form onSubmit={props.handleSubmit}>
      <Row>
        <Col span={12} lg={12} md={12} xs={24}>
          <Form.Item>
            <label>Categoría de Encuesta (ej: Sector Salud)</label>
            <Input
              type="text"
              name="name"
              value={name}
              placeholder="Nombre del tipo de categoría"
              onChange={props.handleChange}
            />
          </Form.Item>
        </Col>
        <Col span={12} lg={12} md={12} xs={24}>
          <Form.Item style={{padding: '0 15px'}}>
            <label>País</label><br></br>
            <Select placeholder={country_id ? country.name : ""} defaultValue={country_id} style={{ width: 180 }} onChange={props.handleSelect}>
              { props.countriesData !== undefined ? props.countriesData.map((item) => {
                  return <Option key={item.id} value={item.id}>{item.name}</Option>
                })
                :
                <Option disabled value="">No hay países</Option>
              }
            </Select>
          </Form.Item>
        </Col>
      </Row>
      { props.children }
      <Button htmlType="submit">
        Guardar
      </Button>
    </Form>
  )
}

export default PollCategoryForm;
