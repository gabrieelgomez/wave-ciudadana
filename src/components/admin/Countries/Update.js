import React from 'react';
import { StyledCard } from '../../styled';
import CountryForm from './Form';

class UpdateCountryForm extends React.Component {

  render() {

    return (
      <div className="admin-container">
        <h1>Actualizar país</h1>
        <StyledCard>
          <CountryForm
            data={this.props.countryData.country}
            handleSubmit={this.props.handleUpdateCountry}
            handleSelect={this.props.handleSelectChange}
            handleChange={this.props.handleChange}
          />
        </StyledCard>
      </div>
    )
  }
}

export default UpdateCountryForm;
