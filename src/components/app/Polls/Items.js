import React from 'react';
import { Form, Icon } from 'antd';
import { StyledInput } from '../../styled';

const PollItems = (props) => {
  const { items } = props;

  return (
    <div>
      <h4>Items</h4>
      {items.map((item, i)=> {
        return (
          <div className="item" key={i+1}>
            <Form.Item>
              <StyledInput
                onChange={(e) => {props.itemshandleChange(e, i)}}
                value={item.title}
                placeholder={`Item ${i+1}`} 
              />
            </Form.Item>
            <span className="remove-item" onClick={() => {props.removeField(i)}}><Icon type="delete"/></span>
          </div>
        )
      })}
      <span className="add-item" onClick={props.addField}>Agregar item <Icon type="plus"/></span>
    </div>
  )
}

export default PollItems;