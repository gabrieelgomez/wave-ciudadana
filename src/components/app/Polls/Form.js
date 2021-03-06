import React from 'react';
import moment from 'moment';
import PollItems from './Items';
import { Row, Col, Form, DatePicker, Select } from 'antd';
import { StyledTextAreaFeed, StyledInput } from '../../styled';
const { Option } = Select;

class PollForm extends React.Component {
  state = {
    poll: {
      title: '',
      description: '',
      due_date: '',
      poll_category_id: '',
      items_attributes: []
    }
  }

  datePickerChange = (date) => {
    var datepickerDate = moment(date).format('YYYY-MM-DD');
    var proposedDate = datepickerDate + "T00:00:00.000Z";
    this.setState(prevState => {
      return {
        poll: {
          ...prevState.poll,
          due_date: proposedDate
        }
      }
    });
  }

  handleSelectChange = (e) => {
    const value = e;
    this.setState(prevState => {
      return {
        poll: {
          ...prevState.poll,
          poll_category_id: value
        }
      }
    });
  }

  addField = () => {
    this.setState(prevState => {
      return {
        poll: {
          ...prevState.poll,
          items_attributes: [...prevState.poll.items_attributes, { title: "" }]
        }
      }
    })
  }

  itemshandleChange = (e, i) => {
    const items = this.state.poll.items_attributes;
    items[i].title = e.target.value;

    this.setState(prevState=> {
      return {
        poll: {
          ...prevState.poll,
          items_attributes: this.state.poll.items_attributes
        }
      }
    })
  }

  removeField = (i) => {
    const items = this.state.poll.items_attributes;
    items.splice(i,1);

    this.setState(prevState=> {
      return {
        poll: {
          ...prevState.poll,
          items_attributes: items
        }
      }
    })
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState=> {
      return {
        poll: {
          ...prevState.poll,
          [name]: value
        }
      }
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSubmit(this.state.poll)
  }

  disabledDate = (current) => {
    return current && current < moment().endOf('day');
  }

  render() {
    const {title, description, poll_category_id, items_attributes} = this.state.poll;

    return (
      <Form onSubmit={this.handleSubmit}>
        <div className="border-bottom">
          <Form.Item>
            <StyledInput
              name="title"
              value={title}
              placeholder="Haz una pregunta"
              onChange={this.handleChange}
            ></StyledInput>
          </Form.Item>
          <Form.Item>
            <StyledTextAreaFeed 
              name="description"
              value={description}
              placeholder="Escribe tu encuesta"
              onChange={this.handleChange}
            />
          </Form.Item>
          <Row>
            <Col span={12}>
              <Form.Item>
                <Select placeholder={poll_category_id} defaultValue={poll_category_id} style={{ width: 180 }} onChange={this.handleSelectChange}>
                  { this.props.categories !== undefined ? this.props.categories.map((item) => {
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
                  disabledDate={this.disabledDate}
                  placeholder="Fecha de vencimiento"
                  onChange={this.datePickerChange}
                  style={{ width: '100%' }}
                />
              </Form.Item>
            </Col>
          </Row>
        </div>
        <PollItems items={items_attributes} addField={this.addField} removeField={this.removeField} itemshandleChange={this.itemshandleChange} />
        <button hidden type='submit' ref={this.props.pollFormRef}>submit</button>
      </Form>
    )
  }
}

export default PollForm;