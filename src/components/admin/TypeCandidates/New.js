import React from 'react';
import { StyledCard } from '../../styled';
import TypeCandidateForm from './Form';

class NewTypeCandidateForm extends React.Component {
  state = {
    type_candidate: {
      name: '',
      country_id: '',
    }
  }

  handleSelectChange = (e) => {
    const value = e;
    this.setState(prevState => {
      return {
        type_candidate: {
          ...prevState.type_candidate,
          country_id: value
        }
      }
    });
  }

  handleCreateTypeCandidate = (e) => {
    e.preventDefault()
    const { type_candidate } = this.state;
    this.props.createTypeCandidate(type_candidate)
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState=> {
      return {
        type_candidate: {
          ...prevState.type_candidate,
          [name]: value
        }
      }
    });
  }

  render() {
    const {
      type_candidate
    } = this.state;

    const {countriesData} = this.props;

    return (
      <div className="admin-container">
        <h1>Crear nuevo tipo de candidatura</h1>
        <StyledCard>
          <TypeCandidateForm
            handleSelect={this.handleSelectChange}
            handleSubmit={this.handleCreateTypeCandidate}
            handleChange={this.handleChange}
            data={type_candidate}
            countriesData={countriesData}
          >
          </TypeCandidateForm>
        </StyledCard>
      </div>
    )
  }
}

export default NewTypeCandidateForm;
