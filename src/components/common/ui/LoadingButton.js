import React, { useState } from 'react';
import { Icon } from 'antd';
import { StyledButton } from '../../styled';

const LoadingButton = (props) => {
  let [loading, setLoading] = useState(false)

  const actionButton = () => {
    setLoading(true)
    props.action()
  }

  return (
    <StyledButton onClick={()=> actionButton()}>
      {props.title}
      { loading &&
        <Icon type="loading"/>
      }
    </StyledButton>
  )
}

export default LoadingButton;