import React from 'react';
import { Card } from 'antd';
import CitizenForm from './Form';

class UpdateCitizenForm extends React.Component {

  render() {
    return (
      <div className="admin-container">
        <h1>Actualizar ciudadano</h1>
        <Card>
          <CitizenForm
            data={this.props.citizenData.citizen}
            typeCandidatesData={this.props.typeCandidatesData}
            handleSubmit={this.props.handleUpdateCitizen}
            handleChange={this.props.handleChange}
            handleSelectType={this.props.handleSelectType}
            handleSelectStatus={this.props.handleSelectStatus}
          />
        </Card>
      </div>
    )
  }
}

export default UpdateCitizenForm;