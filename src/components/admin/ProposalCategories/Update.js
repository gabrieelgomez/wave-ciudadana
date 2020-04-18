import React from 'react';
import { StyledCard } from '../../styled';
import ProposalCategoryForm from './Form';

class UpdateProposalCategoryForm extends React.Component {

  render() {

    return (
      <div className="admin-container">
        <h1>Actualizar categoría de propuesta</h1>
        <StyledCard>
          <ProposalCategoryForm
            data={this.props.proposal_categoryData}
            countriesData={this.props.countriesData}
            handleSubmit={this.props.handleUpdateProposalCategory}
            handleSelect={this.props.handleSelectChange}
            handleChange={this.props.handleChange}
          />
        </StyledCard>
      </div>
    )
  }
}

export default UpdateProposalCategoryForm;
