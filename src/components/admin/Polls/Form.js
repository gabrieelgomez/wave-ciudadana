import React from 'react';
import moment from 'moment';
import {
  Form,
  Input,
  Button,
  Row,
  Col,
  Select,
  DatePicker
} from 'antd';
import PollItems from './Items';
const { Option } = Select;
const { TextArea } = Input;

const PollForm = (props) => {
  const {
    title,
    description,
    poll_category_id,
    due_date,
    poll_category = {
      name: ''
    },
    items = []
  } = props.data;

  const formatDueDateShow = moment.utc(due_date).format("L");

  return (
    <Form onSubmit={props.handleSubmit}>
      <Row>
        <Col span={12} lg={8} md={12} xs={24}>
          <Form.Item>
            <label>Título de la encuesta</label>
            <Input
              type="text"
              name="title"
              value={title}
              placeholder="Título de la encuesta"
              onChange={props.handleChange}
            />
          </Form.Item>
        </Col>

        <Col span={8} lg={8} md={8} xs={24}>
          <Form.Item style={{padding: '0 15px'}}>
            <label>Fecha de vencimiento</label><br></br>
            <DatePicker
              format="DD/MM/YYYY"
              placeholder={due_date ? formatDueDateShow : ''}
              onChange={props.datePickerChange}
            />
          </Form.Item>
        </Col>

        <Col span={8} lg={8} md={8} xs={24}>
          <Form.Item>
            <label>Categoría de la encuesta</label><br></br>
            <Select placeholder={poll_category_id ? poll_category.name : ""} defaultValue={poll_category_id} style={{ width: 180 }} onChange={props.handleSelect}>
              { props.pollCategories !== undefined ? props.pollCategories.map((item) => {
                  return <Option key={item.id} value={item.id}>{item.name}</Option>
                })
                :
                <Option disabled value="">No hay categorías</Option>
              }
            </Select>
          </Form.Item>
        </Col>

        <Col span={24} lg={24} md={24} xs={24}>
          <Form.Item>
            <label>Descripción</label>
            <TextArea
              name="description"
              value={description}
              placeholder="Descripción"
              onChange={props.handleChange}
            />
          </Form.Item>
        </Col>

        <Col span={24} lg={24} md={24} xs={24}>
          <PollItems items={items} addField={props.addField} itemshandleChange={props.itemshandleChange} itemshandleRemove={props.itemshandleRemove} />
        </Col>
      </Row>
      { props.children }
      <Button htmlType="submit">
        Guardar
      </Button>
    </Form>
  )
}

export default PollForm;
