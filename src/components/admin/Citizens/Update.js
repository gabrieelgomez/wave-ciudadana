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
            handleSubmit={this.props.handleUpdateCitizen}
            handleSelect={this.props.handleSelectChange}
            handleChange={this.props.handleChange}
          />
        </Card>
      </div>
    )
  }
}

export default UpdateCitizenForm;