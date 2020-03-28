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
          <LinkButton name="Crear tipo de candidatura" action="/admin/type_candidate/new" />
        </div>
        <AdminTypeCandidatesList data={type_candidates}/>
      </div>
    )
  }
}

export default AdminTypeCandidates;
