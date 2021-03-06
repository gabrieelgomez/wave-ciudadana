import React from 'react';
import { StyledCard } from '../../styled';
import CountryForm from './Form';

class NewCountryForm extends React.Component {
  state = {
    country: {
      name: '',
      country_code: '',
      currency: ''
    }
  }

  handleCreateCountry = (e) => {
    e.preventDefault()
    const { country } = this.state;
    this.props.createCountry(country)
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState=> {
      return {
        country: {
          ...prevState.country,
          [name]: value
        }
      }
    });
  }

  render() {
    const {
      country
    } = this.state;

    return (
      <div className="admin-container">
        <h1>Crear nuevo país</h1>
        <StyledCard>
          <CountryForm
            handleSubmit={this.handleCreateCountry}
            handleChange={this.handleChange}
            data={country}
          >
          </CountryForm>
        </StyledCard>
      </div>
    )
  }
}

export default NewCountryForm;
