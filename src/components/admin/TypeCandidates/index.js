import React from 'react';
import AdminTypeCandidatesList from './List';
import LinkButton from '../../common/ui/LinkButton';

class AdminTypeCandidates extends React.Component {

  render() {
    const {
      type_candidates
    } = this.props;
    return (
      <div className="admin-container">
        <div className="admin-actions">
          <h3>Tipos de Candidaturas</h3>
          <LinkButton name="Crear nuevo" action="/admin/type_candidate/new" />
        </div>
        <AdminTypeCandidatesList data={type_candidates}/>
      </div>
    )
  }
}

export default AdminTypeCandidates;
