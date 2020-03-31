import React from 'react';
import { Card } from 'antd';
import ProposalCategoryForm from './Form';

class UpdateProposalForm extends React.Component {

  render() {
    const {proposalCategoriesData, currentUser} = this.props;
    return (
      <div className="admin-container">
        <h1>Actualizar Propuesta</h1>
        <Card>
          <ProposalCategoryForm
            data={this.props.proposalData}
            proposalCategoriesData={proposalCategoriesData}
            currentUser={currentUser}
            handleSubmit={this.props.handleUpdateProposal}
            handleSelect={this.props.handleSelectChange}
            handleChange={this.props.handleChange}
          />
        </Card>
      </div>
    )
  }
}

export default UpdateProposalForm;
