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

export const StyledInput = styled(Input)`
  padding: 10px 20px;
  height: auto;
  border-radius: 25px;
`

export const StyledInputIcon = styled(Input)`
  input {
    padding: 10px 20px;
    height: auto;
    border-radius: 25px;
  }
`

export const StyledButton = styled(Button)`
  border-radius: 25px;
  padding: 15px 20px;
  height: auto;
  width: 100%;
  box-shadow: 0 8px 17px 2px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12), 0 5px 5px -3px rgba(0,0,0,0.1);
  background-color: #ff663b;
  color: white;
  text-transform: uppercase;
  border: none;
  font-weight: 700;
  margin-bottom: 15px;

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