import React from 'react';
import { Card } from 'antd';
import ProposalForm from './Form';

class NewProposalForm extends React.Component {
  state = {
    proposal: {
      title: '',
      description: '',
      proposal_category_id: '',
    }
  }

  handleSelectChange = (e) => {
    const value = e;
    this.setState(prevState => {
      return {
        proposal: {
          ...prevState.proposal,
          proposal_category_id: value
        }
      }
    });
  }

  handleCreateProposal = (e) => {
    e.preventDefault()
    const { proposal } = this.state;
    this.props.createProposal(proposal)
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState=> {
      return {
        proposal: {
          ...prevState.proposal,
          [name]: value
        }
      }
    });
  }

  render() {
    const {
      proposal
    } = this.state;

    const {proposalCategoriesData} = this.props;
    return (
      <div className="admin-container">
        <h1>Crear nueva propuesta</h1>
        <Card>
          <ProposalForm
            handleSelect={this.handleSelectChange}
            handleSubmit={this.handleCreateProposal}
            handleChange={this.handleChange}
            data={proposal}
            proposalCategoriesData={proposalCategoriesData}
          >
          </ProposalForm>
        </Card>
      </div>
    )
  }
}

export default NewProposalForm;
