import React from 'react';
import { Modal } from 'antd';
import styled from 'styled-components';

class CustomModal extends React.Component {
  render() {
    const { visible, confirmLoading, handleClose, handleOk, footer, isScrollable, styles } = this.props;

    const StyledModal = styled(Modal)`
    .ant-modal-content {
      border-radius: 12px;
      font-family: 'Martel Sans';
      background-color: white;
      padding: 20px;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    }

    .ant-modal-close {
      top: 10px;
      right: 10px;
    }

    .ant-modal-body {
      max-height: ${ isScrollable ? styles.maxHeight : 'unset'};
      overflow-y: ${ isScrollable ? 'scroll' : 'unset'};
    }
  `

    return (
      <div>
        <StyledModal
          visible={visible}
          centered
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleClose}
          footer={footer}
        >
          {this.props.children}
        </StyledModal>
      </div>
    );
  }
}

export default CustomModal;