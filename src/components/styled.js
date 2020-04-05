import { Input, Button, Card, Table } from 'antd';
import styled from 'styled-components';

export const StyledCard = styled(Card)`
  width: calc(100% - 20px) !important;
  margin: 10px 10px;
  height: 350px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  font-family: 'Martel Sans';

  .ant-card-cover img {
    border-radius: 10px 10px 0 0;
  }
`

export const StyledPollCard = styled(Card)`
  width: calc(100% - 20px) !important;
  margin: 10px 10px;
  height: 350px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  font-family: 'Martel Sans';

  .ant-card-cover img {
    border-radius: 10px 10px 0 0;
  }
`

export const StyledInput = styled(Input)`
  padding: 10px 20px;
  height: auto;
  border-radius: 10px;
`

export const StyledInputIcon = styled(Input)`
  input {
    padding: 10px 20px;
    height: auto;
    border-radius: 10px;
  }
`

export const StyledButton = styled(Button)`
  border-radius: 10px;
  padding: 10px 20px;
  height: auto;
  width: 100%;
  box-shadow: 4px 7px 12px 0 rgba(255, 102, 59, 0.2);
  background-color: #ff663b;
  color: white;
  border: none;
  font-weight: 700;
  font-family: 'Martel Sans';

  &:hover {
    color: #0c2e60;
  }
`

export const StyledTable = styled(Table)`
  background-color: #fff;
  width: 100%;

  @media screen and (min-width:0px) and (max-width:991px) {
    overflow-x: scroll;
    display: inline-block;
  }
`

export const StyledTextAreaFeed = styled(Input.TextArea)`
  background-color: #fcfcfd;
  border-radius: 0;
  border: none;
  padding: 26px 28px 0;
  font-size: 14px;
  resize: none;
  font-family: 'Martel Sans';

  &:focus, &:hover {
    outline: none;
    border-color: transparent;
    box-shadow: none;
  }

  &.ant-input {
    height: 120px;
  }
`