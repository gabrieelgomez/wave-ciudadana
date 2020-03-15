import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { Button } from 'antd';

const StyledButton = styled(Button)`
  border-radius: 25px;
  padding: 15px 30px;
  height: auto;
  box-shadow: 0 5px 8px 0px rgba(0,0,0,0.14);
  background-color: #ff663b;
  color: white;
  text-transform: uppercase;
  border: none;
  font-weight: 700;

  &:hover {
    color: #0c2e60;
  }
`

const LinkButton = (props) => {
  return (
    <Link to={props.action}>
      <StyledButton>{props.name}</StyledButton>    
    </Link>
  )
}

export default LinkButton;