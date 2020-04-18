import React from 'react';
import moment from 'moment';
import {
  Form,
  Input,
  Button,
  Row,
  Col,
  Select,
  DatePicker,
  Icon
} from 'antd';
import { StyledInput } from '../../styled';
const {Option} = Select;
const { TextArea } = Input;

const PollForm = (props) => {
  const {
    title,
    description,
    poll_category_id,
    due_date,
    items_attributes
  } = props.data;

  const formatDueDateShow = moment.utc(due_date).format("L");

  const poll_category = props.data.poll_category
  const currentPollCategoryName = poll_category !== undefined ? poll_category.name : 'Cargando...';
  const placeholderSelect = poll_category_id === '' ? 'Seleccionar categoría de encuesta' : currentPollCategoryName;

  return (
    <Form onSubmit={props.handleSubmit}>
      <Row>
        <Col span={12} lg={8} md={12} xs={24}>
          <Form.Item style={{padding: '0 15px'}}>
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
          <Form.Item style={{padding: '0 15px'}}>
            <label>Categoría de la encuesta</label><br></br>
            <Select placeholder={placeholderSelect} defaultValue={poll_category_id} style={{ width: 120 }} onChange={props.handleSelect}>
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

        <Col span={24} lg={24} md={24} xs={24}>
          <h4>Items</h4>
          {items_attributes.map((item, i)=> {
            return (
              <div className="item" key={i+1}>
                <Form.Item>
                  <StyledInput
                    onChange={(e) => {props.itemshandleChange(e, i)}}
                    value={item.title}
                    placeholder={`Item ${i+1}`}
                  />
                </Form.Item>
                <span className="remove-item" onClick={() => {props.itemshandleRemove(i)}}><Icon type="delete"/></span>
              </div>
            )
          })}
          <span className="add-item" onClick={props.addField}>Agregar item <Icon type="plus"/></span>
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
