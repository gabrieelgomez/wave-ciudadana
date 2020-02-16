import React from 'react';
import { Modal } from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components';

const StyledModal = styled(Modal)`
  .ant-modal-content {
    background-color: transparent;
    box-shadow: none;
  }
  .ant-modal-close{
    top: 20px;
    right: 20px;
  }
`

export default class CustomModal extends React.Component {
  render() {
    const { visible, confirmLoading, handleCancel, handleOk } = this.props;
    return (
      <div>
        <StyledModal
          visible={visible}
          centered
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
          footer={false}
        >
          {this.props.children}
        </StyledModal>
      </div>
    );
  }
}