import React from 'react';
import AdminPollCategoriesList from './List';
import LinkButton from '../../common/ui/LinkButton';

class AdminPollCategories extends React.Component {

  render() {
    const {
      poll_categories
    } = this.props;
    return (
      <div className="admin-container">
        <div className="admin-actions">
          <LinkButton name="Crear Categoría de Encuesta" action="/admin/poll_category/new" />
        </div>
        <AdminPollCategoriesList data={poll_categories}/>
      </div>
    )
  }
}

export default AdminPollCategories;
