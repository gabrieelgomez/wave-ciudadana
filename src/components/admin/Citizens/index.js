import React from 'react';
import AdminCitizensList from './List';
import LinkButton from '../../common/ui/LinkButton';

class AdminCitizens extends React.Component {

  render() {
    const {
      citizens
    } = this.props;
    return (
      <div className="admin-container">
        <div className="admin-actions">
          <h3>Ciudadanos</h3>
          <LinkButton name="Crear nuevo" action="/admin/citizen/new" />
        </div>
        <AdminCitizensList data={citizens}/>
      </div>
    )
  }
}

export default AdminCitizens;
