import React from 'react';
import { StyledButton, StyledPollModal } from '../../styled';
import PollForm from './Form';

class PollModal extends React.Component {

  render() {
    return (
      <div>
        <StyledPollModal
          title="Crea una encuesta"
          visible={this.props.visible}
          onCancel={this.props.handleClose}
          footer={[
            <div className="quick-post-footer">
              <StyledButton>Publicar</StyledButton>
            </div>
          ]}
        >
          <PollForm />
        </StyledPollModal>
      </div>
    );
  }
}

export default PollModal;