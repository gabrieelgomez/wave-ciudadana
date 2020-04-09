import React from 'react';
import { Row, Col, Form, DatePicker, Select, Icon } from 'antd';
import { StyledTextAreaFeed, StyledInput } from '../../styled';
const {Option} = Select;

class PollForm extends React.Component {
  state = {
    items: []
  }

  datePickerChange = (date) => {
    console.log(date)
  }

  handleSelect = (e) => {
    console.log(e)
  }

  addField = () => {
    this.setState({
      items: [...this.state.items, ""]
    })
  }

  itemshandleChange = (e, i) => {
    const items = this.state.items;
    items[i] = e.target.value;

    this.setState({
      items: this.state.items
    })
  }

  itemshandleRemove = (i) => {
    const items = this.state.items;
    items.splice(i,1);
    console.log(items)

    this.setState({
      items: items
    })
  }

  render() {
    const { items } = this.state;
    return (
      <Form>
        <div className="border-bottom">
          <Form.Item>
            <StyledInput
              placeholder="Haz una pregunta"
            ></StyledInput>
          </Form.Item>
          <Form.Item>
            <StyledTextAreaFeed placeholder="Escribe tu encuesta"/>
          </Form.Item>
          <Row>
            <Col span={12}>
              <Form.Item>
                <Select placeholder="Categoría" defaultValue="Categoría" style={{ width: 'calc(100% - 15px)' }} onChange={this.handleSelect}>
                  <Option key="1" value="">Categoria 1</Option>
                  <Option key="2" value="">Categoria 2</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item>
                <DatePicker
                  format="DD/MM/YYYY"
                  placeholder="Fecha de vencimiento"
                  onChange={this.datePickerChange}
                  style={{ width: '100%' }}
                />
              </Form.Item>
            </Col>
          </Row>
        </div>
        <h4>Items</h4>
        {items.map((item, i)=> {
          return (
            <div className="item">
              <Form.Item key={i+1}>
                <StyledInput
                  onChange={(e) => {this.itemshandleChange(e, i)}}
                  value={item}
                  placeholder={`Item ${i+1}`} 
                />
              </Form.Item>
              <span className="remove-item" onClick={() => {this.itemshandleRemove(i)}}><Icon type="delete"/></span>
            </div>
          )
        })}
        <span className="add-item" onClick={this.addField}>Agregar item <Icon type="plus"/></span>
      </Form>
    )
  }
}

export default PollForm;