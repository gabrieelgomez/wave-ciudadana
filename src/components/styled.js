import { Input, Button, Card, Table, Modal } from 'antd';
import styled from 'styled-components';

const fontPrimary = 'Martel Sans';
const primary = "#0c2e60";
const secondary = "#ff663b";

export const StyledCard = styled(Card)`
  width: calc(100% - 20px) !important;
  margin: 10px 10px;
  height: 350px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  font-family: ${fontPrimary};

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
  font-family: ${fontPrimary};

  .ant-card-cover img {
    border-radius: 10px 10px 0 0;
  }
`

export const StyledInput = styled(Input)`
  padding: 8px 16px;
  font-size: 13px;
  height: auto;
  border-radius: 10px;
  font-family: ${fontPrimary};

  &:focus, &:hover {
    box-shadow: none;
    -webkit-box-shadow: none;
    border-color: ${primary};
  }
`

export const StyledInputIcon = styled(Input)`
  input {
    padding: 8px 16px;
    font-size: 13px;
    height: auto;
    border-radius: 10px;
    font-family: ${fontPrimary};

    &:focus, &:hover {
      box-shadow: none;
      -webkit-box-shadow: none;
      border-color: ${primary};
    }
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
  font-family: ${fontPrimary};

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
  padding: 15px 15px 0;
  font-size: 14px;
  resize: none;
  font-family: ${fontPrimary};
  border-radius: 10px;

  &:focus, &:hover {
    outline: none;
    box-shadow: none;
    border-color: ${primary};
  }

  &.ant-input {
    height: 120px;
  }
`

export const StyledPollModal = styled(Modal)`
  .ant-modal-content {
    border-radius: 10px;
    font-family: ${fontPrimary};
  }

  .ant-modal-body {
    max-height: 60vh;
    overflow-y: scroll;
  }
`