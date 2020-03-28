import React from 'react';
import AdminProposalCategoriesList from './List';
import LinkButton from '../../common/ui/LinkButton';

class AdminProposalCategories extends React.Component {

  render() {
    const {
      proposal_categories
    } = this.props;
    return (
      <div className="admin-container">
        <div className="admin-actions">
          <LinkButton name="Crear Categoría de Propuesta" action="/admin/proposal_category/new" />
        </div>
        <AdminProposalCategoriesList data={proposal_categories}/>
      </div>
    )
  }
}

export default AdminProposalCategories;
