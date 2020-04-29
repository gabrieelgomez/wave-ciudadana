import React from 'react';
import moment from 'moment';
import PollItems from './Items';
import { Row, Col, Form, DatePicker, Select } from 'antd';
import { StyledTextAreaFeed, StyledInput, StyledCard, StyledButton } from '../../styled';
const { Option } = Select;

const FormUpdate = (props) => {

  const {title, description, poll_category_id, poll_category, due_date, items} = props.poll;
  const formatDueDateShow = moment.utc(due_date).format("L");

  return (
    <StyledCard>
      <Form onSubmit={props.handleUpdate}>
        <div className="border-bottom">
          <Form.Item>
            <StyledInput
              name="title"
              value={title}
              placeholder="Haz una pregunta"
              onChange={props.handleChange}
            ></StyledInput>
          </Form.Item>
          <Form.Item>
            <StyledTextAreaFeed 
              name="description"
              value={description}
              placeholder="Escribe tu encuesta"
              onChange={props.handleChange}
            />
          </Form.Item>
          <Row>
            <Col span={12}>
              <Form.Item>
                <Select placeholder={poll_category_id ? poll_category.name : ""} defaultValue={poll_category_id} style={{ width: 180 }} onChange={props.handleSelectChange}>
                  { props.pollCategories !== undefined ? props.pollCategories.map((item) => {
                      return <Option key={item.id} value={item.id}>{item.name}</Option>
                    })
                    :
                    <Option disabled value="">No hay categorías</Option>
                  }
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item>
                <DatePicker
                  format="DD/MM/YYYY"
                  placeholder={formatDueDateShow}
                  onChange={props.datePickerChange}
                  style={{ width: '100%' }}
                />
              </Form.Item>
            </Col>
          </Row>
        </div>
        <PollItems items={items} addField={props.addField} removeField={props.removeField} itemshandleChange={props.itemshandleChange} />
        <br></br>
        <StyledButton onClick={props.handleUpdate}>Actualizar</StyledButton>
      </Form>
    </StyledCard>
  )
}

export default FormUpdate;