import React from 'react';
import { Card } from 'antd';
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

    return (
      <div className="admin-container">
        <h1>Crear nuevo país</h1>
        <Card>
          <ProposalCategoryForm
            handleSubmit={this.handleCreateProposalCategory}
            handleChange={this.handleChange}
            data={proposal_category}
          >
          </ProposalCategoryForm>
        </Card>
      </div>
    )
  }
}

export default NewProposalCategoryForm;
