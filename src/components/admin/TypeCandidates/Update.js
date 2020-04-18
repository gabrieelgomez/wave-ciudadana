import React from 'react';
import { StyledCard } from '../../styled';
import TypeCandidateForm from './Form';

class UpdateTypeCandidateForm extends React.Component {

  render() {
    const {countriesData} = this.props;
    return (
      <div className="admin-container">
        <h1>Actualizar tipo de candidatura</h1>
        <StyledCard>
          <TypeCandidateForm
            data={this.props.type_candidateData}
            countriesData={countriesData}
            handleSubmit={this.props.handleUpdateTypeCandidate}
            handleSelect={this.props.handleSelectChange}
            handleChange={this.props.handleChange}
          />
        </StyledCard>
      </div>
    )
  }
}

export default UpdateTypeCandidateForm;
