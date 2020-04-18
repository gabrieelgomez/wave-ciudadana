import React from 'react';
import { StyledCard } from '../../styled';
import ProposalCategoryForm from './Form';

class NewProposalCategoryForm extends React.Component {
  state = {
    proposal_category: {
      name: '',
      country_id: ''
    }
  }

  handleCreateProposalCategory = (e) => {
    e.preventDefault()
    const { proposal_category } = this.state;
    this.props.createProposalCategory(proposal_category)
  }

  handleSelectChange = (e) => {
    const value = e;
    this.setState(prevState => {
      return {
        proposal_category: {
          ...prevState.proposal_category,
          country_id: value
        }
      }
    });
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState=> {
      return {
        proposal_category: {
          ...prevState.proposal_category,
          [name]: value
        }
      }
    });
  }

  render() {
    const {
      proposal_category
    } = this.state;

    const { countriesData } = this.props;

    return (
      <div className="admin-container">
        <h1>Crear nueva categoría de propuesta</h1>
        <StyledCard>
          <ProposalCategoryForm
            handleSubmit={this.handleCreateProposalCategory}
            handleChange={this.handleChange}
            handleSelect={this.handleSelectChange}
            data={proposal_category}
            countriesData={countriesData}
          >
          </ProposalCategoryForm>
        </StyledCard>
      </div>
    )
  }
}

export default NewProposalCategoryForm;
