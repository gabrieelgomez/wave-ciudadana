import React from 'react';
import { Card } from 'antd';
import CountryForm from './Form';

class UpdateCountryForm extends React.Component {

  render() {

    return (
      <div className="admin-container">
        <h1>Actualizar país</h1>
        <Card>
          <CountryForm
            data={this.props.countryData.country}
            handleSubmit={this.props.handleUpdateCountry}
            handleSelect={this.props.handleSelectChange}
            handleChange={this.props.handleChange}
          />
        </Card>
      </div>
    )
  }
}

export default UpdateCountryForm;
