import React from 'react';
import { Link } from 'react-router-dom';
import { StyledButton } from '../../styled';

const LinkButton = (props) => {
  return (
    <Link to={props.action}>
      <StyledButton>{props.name}</StyledButton>    
    </Link>
  )
}

export default LinkButton;