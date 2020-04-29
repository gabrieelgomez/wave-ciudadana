import React from 'react';
import { Form, Icon } from 'antd';
import { StyledInput } from '../../styled';

const PollItems = (props) => {
  const items = props.items || [];

  return (
    <div>
      <h4>Items</h4>
      {items.map((item, i)=> {
        if (item.hasOwnProperty("_destroy")) return false
        return (
          <div className="item" key={item.id}>
            <Form.Item>
              <StyledInput
                onChange={(e) => {props.itemshandleChange(e, i)}}
                value={item.title}
                placeholder={`Item ${i+1}`} 
              />
            </Form.Item>
            <span className="remove-item" onClick={() => {props.removeField(item.id)}}><Icon type="delete"/></span>
          </div>
        )
      })}
      <span className="add-item" onClick={props.addField}>Agregar item <Icon type="plus"/></span>
    </div>
  )
}

export default PollItems;