import React from 'react';
import { Card } from 'antd';
import TypeCandidateForm from './Form';

class UpdateTypeCandidateForm extends React.Component {

  render() {

    return (
      <div className="admin-container">
        <h1>Actualizar tipo de candidatura</h1>
        <Card>
          <TypeCandidateForm
            data={this.props.type_candidateData.type_candidate}
            handleSubmit={this.props.handleUpdateTypeCandidate}
            handleSelect={this.props.handleSelectChange}
            handleChange={this.props.handleChange}
          />
        </Card>
      </div>
    )
  }
}

export default UpdateTypeCandidateForm;
