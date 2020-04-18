import React from 'react';
import { StyledCard } from '../../styled';
import CitizenForm from './Form';

class UpdateCitizenForm extends React.Component {

  render() {
    return (
      <div className="admin-container">
        <h1>Actualizar ciudadano</h1>
        <StyledCard>
          <CitizenForm
            data={this.props.citizenData.citizen}
            typeCandidatesData={this.props.typeCandidatesData}
            handleSubmit={this.props.handleUpdateCitizen}
            handleChange={this.props.handleChange}
            handleSelectType={this.props.handleSelectType}
            handleSelectStatus={this.props.handleSelectStatus}
          />
        </StyledCard>
      </div>
    )
  }
}

export default UpdateCitizenForm;